import Link from 'next/link';
import { Shield } from 'lucide-react';

import { Logo } from '@/components/Logo';

export function NHSHeader() {
  return (
    <header className="bg-white text-black border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center">
        <Link href="/" className="flex items-center nhs-focus px-1 no-underline transform scale-[0.6] origin-left">
           <Logo />
        </Link>
      </div>
    </header>
  );
}