import { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { type Prompt } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { useSoundContext } from '@/contexts/SoundContext';

interface PromptModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

export function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { playOpen, playClose, playClick } = useSoundContext();

  // Play open sound when prompt changes to non-null
  useEffect(() => {
    if (prompt) {
      playOpen();
      setIsClosing(false);
    }
  }, [prompt, playOpen]);

  if (!prompt && !isClosing) return null;

  const handleClose = () => {
    playClose();
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  const handleCopy = async () => {
    playClick();
    try {
      await navigator.clipboard.writeText(prompt!.fullPrompt);
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
      handleClose();
    }
  };

  const currentPrompt = prompt;
  if (!currentPrompt) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        isClosing ? 'animate-fade-out' : 'animate-fade-in'
      )}
      onClick={handleBackdropClick}
    >
      {/* Backdrop - Frosted glass */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" />

      {/* Modal */}
      <div
        className={cn(
          'relative z-10 w-full max-w-2xl max-h-[90vh] overflow-auto',
          'rounded-3xl shadow-2xl',
          'glass-modal',
          isClosing ? 'animate-scale-out' : 'animate-scale-in'
        )}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className={cn(
            'absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center',
            'rounded-full bg-background/60 backdrop-blur-md',
            'transition-all duration-300 ease-out',
            'hover:bg-background/80 hover:scale-110',
            'active:scale-90'
          )}
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={currentPrompt.imageUrl}
            alt={currentPrompt.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 bg-card/80 backdrop-blur-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-card-foreground">
              {currentPrompt.title}
            </h2>
            <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {currentPrompt.category}
            </span>
          </div>

          {/* Prompt text */}
          <div className="relative">
            <div className="rounded-2xl bg-secondary/50 p-4 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {currentPrompt.fullPrompt}
              </p>
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={cn(
              'mt-4 flex w-full items-center justify-center gap-2',
              'rounded-xl py-3 px-4 font-medium',
              'transition-all duration-300 ease-out',
              'hover:scale-[1.02] active:scale-95',
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