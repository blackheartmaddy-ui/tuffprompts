import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search prompts..."
        className={cn(
          'w-full h-12 pl-12 pr-4 rounded-full',
          'bg-secondary/60 backdrop-blur-sm',
          'border-0 outline-none',
          'text-foreground placeholder:text-muted-foreground',
          'transition-all duration-200',
          'focus:bg-secondary focus:ring-2 focus:ring-primary/20',
          'hover:bg-secondary'
        )}
      />
    </div>
  );
}
