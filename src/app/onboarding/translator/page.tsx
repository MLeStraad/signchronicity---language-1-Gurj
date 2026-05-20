'use client';

import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Button } from '@/components/ui/button';

export default function TranslatorPage() {
  const router = useRouter();
  const { translator, setTranslator } = useOnboardingStore();

  const handleNext = () => {
    if (!translator) {
      alert("Please select a translator");
      return;
    }
    router.push('/onboarding/security');
  };
  const handleBack = () => router.back();

  const options = [
    { id: 'older-female', label: 'Older Female', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 'older-male', label: 'Older Male', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 'younger-female', label: 'Younger Female', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 'younger-male', label: 'Younger Male', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  return (
    <div className="flex flex-col h-full bg-white px-4 pt-12 pb-6 overflow-y-auto">
      <div className="flex border-l-4 border-[#1D5EBC] pl-4 mb-12">
        <h2 className="text-2xl font-bold text-black leading-tight">
          Choose the person that you<br/>
          feel best represents you to<br/>
          be your translator.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-4 mb-12">
        {options.map((opt) => (
          <div key={opt.id} className="flex flex-col items-center">
            <button
              className={`w-28 h-28 rounded-3xl bg-gray-300 flex flex-col items-center justify-center relative overflow-hidden transition-all ${
                translator === opt.id ? 'ring-4 ring-[#1D5EBC]' : ''
              }`}
              onClick={() => setTranslator(opt.id)}
              aria-label={`Select ${opt.label} translator`}
            >
              <div className="w-24 h-24 bg-[#4e8ddb] flex items-center justify-center shadow-inner relative overflow-hidden rounded">
                <video
                  src={opt.videoSrc}
                  className="w-full h-full object-cover absolute inset-0 z-0 opacity-80"
                  muted
                  playsInline
                  onMouseOver={e => (e.target as HTMLVideoElement).play()}
                  onMouseOut={e => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                  onClick={e => {
                    // Allow clicking video to preview it explicitly or pause it
                    const v = e.target as HTMLVideoElement;
                    if (v.paused) v.play();
                    else v.pause();
                  }}
                />
                <span className="text-black font-bold text-xl tracking-tight z-10 pointer-events-none drop-shadow-md">Video</span>
              </div>
            </button>
            <span className="mt-3 text-black font-bold text-center leading-tight">
              {opt.label.split(' ').map((word, i) => <span key={i}>{word}<br/></span>)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-end mb-auto">
        <Button onClick={handleNext} className="bg-[#1D5EBC] hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
          Next {'>'}
        </Button>
      </div>

      <div className="mt-8">
        <button onClick={handleBack} className="text-black underline">
          Back
        </button>
      </div>
    </div>
  );
}
