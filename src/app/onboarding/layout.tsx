import { ProgressCounter } from '@/components/onboarding/ProgressCounter';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col max-w-md mx-auto relative shadow-xl overflow-hidden sm:border-x">
      <ProgressCounter />
      <main className="flex-1 flex flex-col h-full relative z-10">
        {children}
      </main>
    </div>
  );
}
