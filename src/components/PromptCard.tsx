import { type Prompt } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
}

export function PromptCard({ prompt, onClick }: PromptCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative w-full overflow-hidden rounded-2xl bg-card',
        'shadow-sm hover:shadow-xl',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:scale-[1.02]',
        'active:scale-[0.98]',
        'text-left'
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={prompt.imageUrl}
          alt={prompt.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-card-foreground truncate pr-2">
            {prompt.title}
          </h3>
          <span className="flex-shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
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
