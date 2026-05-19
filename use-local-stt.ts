
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export function useLocalSTT() {
  const [isReady, setIsReady] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../lib/stt-worker.ts', import.meta.url));
    workerRef.current = worker;

    worker.onmessage = (event) => {
      const { type, data } = event.data;
      if (type === 'ready') setIsReady(true);
      if (type === 'result') setTranscript(data);
      if (type === 'error') {
        setError(data);
        setIsListening(false);
      }
    };

    return () => {
      worker.terminate();
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };
  }, []);

  const startListening = useCallback(async () => {
    if (!isReady || !workerRef.current) return;
    
    try {
      setIsListening(true);
      setTranscript('');
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const audioContext = new AudioContext({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      
      source.connect(processor);
      processor.connect(audioContext.destination);
      
      processor.onaudioprocess = (e) => {
        if (!isListening) return;
        const inputData = e.inputBuffer.getChannelData(0);
        workerRef.current?.postMessage({ type: 'process', audioData: inputData });
      };

    } catch (err: any) {
      setError(err.message);
      setIsListening(false);
    }
  }, [isReady, isListening]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  }, []);

  return { isReady, isListening, transcript, error, startListening, stopListening };
}
