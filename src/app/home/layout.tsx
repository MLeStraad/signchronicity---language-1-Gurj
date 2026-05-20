import { InactivityWrapper } from '@/components/InactivityWrapper';
import { NHSHeader } from '@/components/NHSHeader';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <InactivityWrapper>
      <div className="min-h-screen bg-white text-black flex flex-col relative max-w-md mx-auto sm:border-x shadow-xl">
        <NHSHeader />
        <main className="flex-1 flex flex-col p-4 relative z-10">
          {children}
        </main>
      </div>
    </InactivityWrapper>
  );
}
