export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-xl overflow-hidden sm:border-x">
      {/* NHS Standard Top Border */}
      <div className="h-2 w-full bg-primary absolute top-0 left-0"></div>

      {/* Content Area */}
      <main className="flex-1 flex flex-col pt-6 pb-6 px-4 sm:px-6 relative z-10">
        {children}
      </main>
    </div>
  );
}
