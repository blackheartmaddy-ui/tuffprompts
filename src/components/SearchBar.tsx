import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/70" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search prompts..."
        className={cn(
          'w-full h-14 pl-14 pr-6 rounded-full',
          'ios-search-bar',
          'text-foreground placeholder:text-muted-foreground/60',
          'transition-all duration-300 ease-out',
          'focus:ring-4 focus:ring-primary/10',
          'focus:shadow-lg focus:shadow-primary/5'
        )}
      />
    </div>
  );
}
