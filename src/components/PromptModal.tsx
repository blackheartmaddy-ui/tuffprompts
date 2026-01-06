import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { type Prompt } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface PromptModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

export function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.fullPrompt);
      setCopied(true);
      toast({
        title: 'Copied!',
        description: 'Prompt copied to clipboard',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Failed to copy',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md animate-fade-in" />

      {/* Modal */}
      <div
        className={cn(
          'relative z-10 w-full max-w-2xl max-h-[90vh] overflow-auto',
          'rounded-3xl bg-card shadow-2xl',
          'animate-scale-in'
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            'absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center',
            'rounded-full bg-background/80 backdrop-blur-sm',
            'transition-all duration-200',
            'hover:bg-background hover:scale-105',
            'active:scale-95'
          )}
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={prompt.imageUrl}
            alt={prompt.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-card-foreground">
              {prompt.title}
            </h2>
            <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {prompt.category}
            </span>
          </div>

          {/* Prompt text */}
          <div className="relative">
            <div className="rounded-2xl bg-secondary/50 p-4">
              <p className="text-sm leading-relaxed text-card-foreground">
                {prompt.fullPrompt}
              </p>
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={cn(
              'mt-4 flex w-full items-center justify-center gap-2',
              'rounded-xl py-3 px-4 font-medium',
              'transition-all duration-200',
              'hover:scale-[1.02] active:scale-[0.98]',
              copied
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-foreground'
            )}
          >
            {copied ? (
              <>
                <Check className="h-5 w-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
