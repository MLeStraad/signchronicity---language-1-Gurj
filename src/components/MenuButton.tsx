import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface MenuButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'white' | 'outline' | 'alert' | 'secondary';
  description?: string;
  className?: string;
  onClick?: () => void;
}

export function MenuButton({ href, children, variant = 'white', description, className, onClick }: MenuButtonProps) {
  const variants = {
    primary: "bg-[#005EB8] text-white hover:bg-[#003087] border-[#003087]",
    white: "bg-white text-[#212b32] hover:bg-[#f0f4f5] border-[#d8dde0]",
    outline: "bg-transparent text-[#005EB8] border-none hover:underline p-0 underline",
    alert: "bg-[#D4351C] text-white hover:bg-[#942D15] border-[#942D15]",
    secondary: "bg-[#E8EDEE] text-[#005EB8] hover:bg-[#D8DDE0] border-[#D8DDE0]"
  };

  const isPlainLink = variant === 'outline';

  if (isPlainLink) {
    return (
      <Link 
        href={href}
        onClick={onClick}
        className={cn("text-[#005EB8] font-bold text-xl nhs-focus inline-block py-3", className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full p-5 transition-all duration-100 nhs-focus rounded-none text-left border-b-2 active:translate-y-[1px] no-underline",
        variants[variant],
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-tight tracking-tight">
          {children}
        </span>
        {description && (
          <span className="text-base mt-1 opacity-90 font-medium">
            {description}
          </span>
        )}
      </div>
      <ChevronRight className={cn("w-8 h-8 shrink-0", variant === 'primary' || variant === 'alert' ? 'text-white' : 'text-[#005EB8]')} />
    </Link>
  );
}