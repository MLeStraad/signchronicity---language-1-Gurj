export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Reconstructed Logo Icon */}
      <div className="relative flex items-center justify-center w-16 h-16 mr-2">
         <span className="text-[#0a3885] font-extrabold text-[4.5rem] tracking-tighter z-10 leading-none mr-5">S</span>
         <div className="absolute right-0 flex items-center space-x-[4px] h-full pt-2">
           <div className="w-[6px] h-[24px] bg-[#f42c88] rounded-full"></div>
           <div className="w-[6px] h-[36px] bg-[#36b649] rounded-full"></div>
           <div className="w-[6px] h-[48px] bg-[#29b6ce] rounded-full"></div>
         </div>
      </div>

      {/* Reconstructed Text block */}
      <div className="flex flex-col border-l-2 border-gray-300 pl-4">
         <span className="text-[#0a3885] text-4xl font-semibold tracking-tight lowercase">
           signchronicity
         </span>
         <div className="w-full h-[2px] bg-gray-400 mt-[2px] mb-[4px]"></div>
         <span className="text-[#4e8ddb] text-sm font-bold tracking-wide">
           your health. your words. your way.
         </span>
      </div>
    </div>
  );
}
