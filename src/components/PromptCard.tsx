import { type Prompt } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';
import { useSoundContext } from '@/contexts/SoundContext';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
  index?: number;
}

export function PromptCard({ prompt, onClick, index = 0 }: PromptCardProps) {
  const { playClick } = useSoundContext();

  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={{ animationDelay: `${index * 50}ms` }}
      className={cn(
        'group relative w-full overflow-hidden rounded-2xl',
        'ios-card',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10',
        'active:scale-[0.97]',
        'text-left',
        'opacity-0 animate-fade-in-up'
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={prompt.imageUrl}
          alt={prompt.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-4 bg-card/80 backdrop-blur-sm">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-card-foreground truncate pr-2">
            {prompt.title}
          </h3>
          <span className="flex-shrink-0 rounded-full bg-secondary/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {prompt.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {prompt.preview}
        </p>
      </div>
    </button>
  );
}
