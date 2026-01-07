import { useState } from 'react';
import { Home, Grid3X3, Layers, Heart, FolderOpen, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSoundContext } from '@/contexts/SoundContext';

interface NavItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Grid3X3, label: 'Browse', id: 'browse' },
  { icon: Layers, label: 'Categories', id: 'categories' },
  { icon: Heart, label: 'Favorites', id: 'favorites' },
  { icon: FolderOpen, label: 'Collections', id: 'collections' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export function IOSSidebar() {
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { playClick } = useSoundContext();

  const handleItemClick = (id: string) => {
    playClick();
    setActiveItem(id);
  };

  return (
    <nav
      className={cn(
        'fixed left-4 top-1/2 -translate-y-1/2 z-50',
        'hidden lg:flex flex-col gap-2 p-3',
        'ios-sidebar',
        'opacity-0 animate-fade-in-up'
      )}
      style={{ animationDelay: '400ms' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;
        const isHovered = hoveredItem === item.id;

        return (
          <div key={item.id} className="relative group">
            <button
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={cn(
                'relative flex items-center justify-center w-11 h-11 rounded-xl',
                'transition-all duration-300 ease-out',
                'ios-nav-button',
                isActive && 'ios-nav-button-active',
                'hover:scale-110 active:scale-95'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 transition-all duration-300',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                  isHovered && !isActive && 'text-foreground'
                )}
              />
              
              {/* Active indicator glow */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-primary/10 animate-pulse" />
              )}
            </button>

            {/* Tooltip label on hover */}
            <div
              className={cn(
                'absolute left-full ml-3 top-1/2 -translate-y-1/2',
                'px-3 py-1.5 rounded-lg whitespace-nowrap',
                'glass-tooltip',
                'text-sm font-medium text-foreground',
                'transition-all duration-200 ease-out',
                'pointer-events-none',
                isHovered
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2'
              )}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
