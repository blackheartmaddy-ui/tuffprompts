import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSoundContext } from '@/contexts/SoundContext';

export function SoundToggle() {
  const { soundEnabled, toggleSound, playClick } = useSoundContext();

  const handleClick = () => {
    if (!soundEnabled) {
      // Will be enabled, so play sound after
      toggleSound();
      setTimeout(() => playClick(), 50);
    } else {
      playClick();
      toggleSound();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-2 rounded-full',
        'transition-all duration-300 ease-out',
        'hover:bg-secondary/80 active:scale-95',
        'text-muted-foreground hover:text-foreground'
      )}
      title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
}
