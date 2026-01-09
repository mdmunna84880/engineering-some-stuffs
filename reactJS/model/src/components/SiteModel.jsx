import { useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';


const SiteModal= ({ 
  isOpen, 
  onClose, 
  url, 
  title = "External Site" 
}) => {
  
  // 1. Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose} // Close when clicking backdrop
    >
      {/* Modal Container */}
      <div 
        className="bg-white w-full max-w-6xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
              {title}
            </h3>
            <span className="text-xs text-gray-500 font-mono truncate max-w-[300px]">
              {url}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* "Open in New Tab" fallback button */}
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Open in new tab (if site is blocked)"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body (Iframe) */}
        <div className="flex-1 bg-gray-100 relative w-full h-full">
          {url ? (
            <iframe 
              src={url} 
              title={title}
              className="w-full h-full border-0"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No URL provided
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SiteModal;