import Link from 'next/link';
import { Shield } from 'lucide-react';

export function NHSHeader() {
  return (
    <header className="bg-white text-[#005EB8] border-b-4 border-[#005EB8] sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start nhs-focus px-1 no-underline">
          <div className="flex items-center gap-2">
             <Shield className="w-6 h-6 fill-[#005EB8]" />
             <span className="text-sm font-extrabold tracking-tight text-[#005EB8] uppercase">signchronicity</span>
          </div>
        </Link>
        <div className="text-[10px] text-right text-[#4c6272] leading-tight font-medium uppercase tracking-wider">
          In partnership with <br />
          <span className="font-extrabold text-[#005EB8] text-sm">NHS</span> <br />
          Cheshire and Merseyside
        </div>
      </div>
    </header>
  );
}