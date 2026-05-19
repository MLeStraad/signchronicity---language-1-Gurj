
import { pipeline, env } from '@xenova/transformers';

// Configure caching for faster subsequent loads
// Setting this to true ensures models are cached in the browser's Cache API
env.useBrowserCache = true;
// Disable local checks to load models from Hugging Face CDN
env.allowLocalModels = false;

import type { PipelineType } from '@xenova/transformers';

// We use a singleton pattern to ensure the model is loaded only once
class PipelineSingleton {
  static task: PipelineType = 'automatic-speech-recognition';
  static model = 'Xenova/whisper-tiny.en';
  static instance: any = null;

  static async getInstance(progress_callback?: Function) {
    if (this.instance === null) {
      this.instance = await pipeline(this.task, this.model, {
        progress_callback,
      });
    }
    return this.instance;
  }
}

// Pre-load the model as soon as the worker starts
PipelineSingleton.getInstance((x: any) => {
  // Can send loading progress back to UI if needed
  self.postMessage({ type: 'progress', data: x });
}).then(() => {
  self.postMessage({ type: 'ready' });
}).catch((err: any) => {
  self.postMessage({ type: 'error', data: err.message });
});

self.onmessage = async (event) => {
  const { type, audioData } = event.data;

  if (type === 'process' && audioData) {
    try {
      const transcriber = await PipelineSingleton.getInstance();
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
