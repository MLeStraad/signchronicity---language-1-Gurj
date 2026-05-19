
import { pipeline, env } from '@xenova/transformers';

// Disable local checks to load models from Hugging Face CDN
env.allowLocalModels = false;

let transcriber: any = null;

async function init() {
  try {
    // Load the smallest Whisper model for the PoC (approx 40MB)
    transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny.en');
    self.postMessage({ type: 'ready' });
  } catch (err: any) {
    self.postMessage({ type: 'error', data: err.message });
  }
}

init();

self.onmessage = async (event) => {
  const { type, audioData } = event.data;

  if (type === 'process' && transcriber && audioData) {
    try {
      const output = await transcriber(audioData, {
        chunk_length_s: 30,
        stride_length_s: 5,
        // For PoC, we transcribe English to English then map to Gujarati video
        // For patient responses, we would use task: 'translate' from Gujarati to English
      });
      self.postMessage({ type: 'result', data: output.text });
    } catch (err: any) {
      self.postMessage({ type: 'error', data: err.message });
    }
  }
};
