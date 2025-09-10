import React, { useRef, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  isLoading?: boolean;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  isLoading = false,
  placeholder = 'Search...',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);



  useEffect(() => {
    // Add event listener for Ctrl+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onClear();
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center w-full h-10 bg-white rounded-lg relative">
      {/* Left icon: Search or Loading */}
      <div className="flex items-center justify-center  mr-2" aria-hidden="true">
        {isLoading ? (
          <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
        ) : (
          <Search className="h-6 w-6 text-gray-600" />
        )}
      </div>

      {/* Input field */}
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        className="flex-grow bg-transparent outline-none text-xl font-medium"
        placeholder={placeholder}
        aria-label="Search"
      />

      {/* Right button: Clear or Keyboard shortcut */}
      <div className="flex items-center">
        {value ? (
          <button
            type="button"
            onClick={handleClear}
            className="text-xs font-medium hover:text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 rounded"
            aria-label="Clear search"
          >
            Clear
          </button>
        ) : (
          <div className="flex items-center text-xs text-gray-400">
            <kbd className="px-1 py-0.5 bg-gray-100 rounded">Ctrl</kbd>
            <span className="mx-1">+</span>
            <kbd className="px-1 py-0.5 bg-gray-100 rounded">K</kbd>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
