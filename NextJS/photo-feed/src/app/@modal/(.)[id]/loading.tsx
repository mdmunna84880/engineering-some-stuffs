export default function LoadingModalPhoto() {
  return (
    <div 
      className="flex items-center justify-center h-full p-4 sm:p-6" 
      aria-busy="true" 
      aria-live="polite"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Header Section: Avatar & User Info */}
        <div className="flex items-center p-4 space-x-3 border-b border-gray-50">
          <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-20 bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Main Image Area: Aspect Ratio Preservation */}
        <div className="relative w-full aspect-4/3 bg-gray-100 animate-pulse">
          {/* Optional: Add a subtle icon in the center to indicate 'image' type content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Footer Section: Meta Data & Actions */}
        <div className="p-4 space-y-4">
          
          {/* Action Buttons Row (Like, Share, etc.) */}
          <div className="flex justify-between items-center">
             <div className="flex space-x-2">
                <div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-8 w-8 bg-gray-100 rounded-lg animate-pulse"></div>
             </div>
             <div className="h-8 w-8 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>

          {/* Description Block */}
          <div className="space-y-2 pt-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
          </div>

          {/* Tags (Pills) */}
          <div className="flex gap-2 pt-2">
             <div className="h-6 w-16 bg-gray-100 rounded-full animate-pulse"></div>
             <div className="h-6 w-20 bg-gray-100 rounded-full animate-pulse"></div>
             <div className="h-6 w-12 bg-gray-100 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </div>
  );
}