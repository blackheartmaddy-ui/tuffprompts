import { categories, type Category } from '@/lib/prompts-data';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex gap-2 px-4 md:justify-center md:flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium',
              'transition-all duration-200 ease-out',
              'hover:scale-105 active:scale-95',
              selected === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary/60 text-secondary-foreground hover:bg-secondary'
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
