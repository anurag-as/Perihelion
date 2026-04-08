import { useRef, type ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  return (
    <div className="flex items-center bg-black/60 text-white rounded-lg px-3 py-2 min-w-[180px]">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search NEOs…"
        onChange={handleChange}
        className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
        aria-label="Search NEOs by name"
      />
    </div>
  );
}
