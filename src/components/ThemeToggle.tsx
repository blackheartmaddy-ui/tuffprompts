import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center rounded-full',
        'bg-secondary/80 backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        'hover:bg-secondary hover:scale-105',
        'active:scale-95'
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-foreground" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-foreground" />
    </button>
  );
}
