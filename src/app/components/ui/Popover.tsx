import React, { useRef, useEffect, useState } from 'react';

interface PopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({ open, anchorEl, onClose, children, className }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [positioned, setPositioned] = useState(false);

  useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8, // 8px offset
        left: rect.left + window.scrollX - 150,
      });
      setPositioned(true);
    } else {
      setPositioned(false);
    }
  }, [open, anchorEl]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, anchorEl, onClose]);

  // Only render popover after position is set to avoid animation from wrong place
  if (!open || (open && !positioned)) return null;

  return (
    <div
      ref={popoverRef}
      className={`fixed z-50 transition-all duration-200 ease-out ${className ?? ''}`}
      style={{ top: position.top, left: position.left }}
      role="dialog"
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-[180px] animate-popover-fade-in">
        {children}
      </div>
      <style jsx global>{`
        @keyframes popover-fade-in {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-popover-fade-in {
          animation: popover-fade-in 0.18s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default Popover;
