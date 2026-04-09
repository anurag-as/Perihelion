import { useRef, type ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  disabled?: boolean;
}

export default function SearchBar({
  onSearch,
  disabled = false,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  return (
    <div
      className={`flex items-center bg-black/60 text-white rounded-lg px-3 py-2 w-full sm:min-w-[180px] ${disabled ? "opacity-40 pointer-events-none" : ""}`}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search NEOs…"
        onChange={handleChange}
        disabled={disabled}
        className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full disabled:cursor-not-allowed"
        aria-label="Search NEOs by name"
        aria-disabled={disabled}
      />
    </div>
  );
}
