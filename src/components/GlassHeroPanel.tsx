import { type Prompt } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';

interface GlassHeroPanelProps {
  children: React.ReactNode;
  previewPrompts: Prompt[];
}

export function GlassHeroPanel({ children, previewPrompts }: GlassHeroPanelProps) {
  // Take first 3 prompts for depth preview
  const depthCards = previewPrompts.slice(0, 3);

  return (
    <div className="relative">
      {/* Main Glass Panel */}
      <div
        className={cn(
          'relative mx-auto max-w-2xl rounded-[2rem] p-8 md:p-12',
          'glass-panel',
          'opacity-0 animate-fade-in-up'
        )}
        style={{ animationDelay: '50ms' }}
      >
        {children}

        {/* Depth Preview Cards */}
        <div className="mt-8 flex justify-center items-end h-20 relative">
          {depthCards.map((prompt, index) => (
            <div
              key={prompt.id}
              className={cn(
                'absolute w-16 h-12 rounded-xl overflow-hidden shadow-lg',
                'transition-all duration-500 ease-out',
                'hover:scale-110 hover:z-10',
                'glass-card-preview'
              )}
              style={{
                transform: `translateX(${(index - 1) * 48}px) translateY(${index === 1 ? -8 : 0}px) rotate(${(index - 1) * 4}deg)`,
                zIndex: index === 1 ? 2 : 1,
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              <img
                src={prompt.imageUrl}
                alt={prompt.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
