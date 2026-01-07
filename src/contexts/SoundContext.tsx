import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playOpen: () => void;
  playClose: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

// Create audio context lazily to avoid browser autoplay restrictions
function createClickSound(): () => void {
  let audioContext: AudioContext | null = null;
  
  return () => {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);
      
      gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.08);
    } catch (e) {
      // Silently fail if audio context not supported
    }
  };
}

function createOpenSound(): () => void {
  let audioContext: AudioContext | null = null;
  
  return () => {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.025, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.12);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.12);
    } catch (e) {
      // Silently fail
    }
  };
}

function createCloseSound(): () => void {
  let audioContext: AudioContext | null = null;
  
  return () => {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.08);
      
      gainNode.gain.setValueAtTime(0.025, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Silently fail
    }
  };
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tuff-sounds-enabled');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  const clickSoundRef = useRef<(() => void) | null>(null);
  const openSoundRef = useRef<(() => void) | null>(null);
  const closeSoundRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    clickSoundRef.current = createClickSound();
    openSoundRef.current = createOpenSound();
    closeSoundRef.current = createCloseSound();
  }, []);

  useEffect(() => {
    localStorage.setItem('tuff-sounds-enabled', String(soundEnabled));
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const playClick = useCallback(() => {
    if (soundEnabled && clickSoundRef.current) {
      clickSoundRef.current();
    }
  }, [soundEnabled]);

  const playOpen = useCallback(() => {
    if (soundEnabled && openSoundRef.current) {
      openSoundRef.current();
    }
  }, [soundEnabled]);

  const playClose = useCallback(() => {
    if (soundEnabled && closeSoundRef.current) {
      closeSoundRef.current();
    }
  }, [soundEnabled]);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, playOpen, playClose }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within SoundProvider');
  }
  return context;
}
