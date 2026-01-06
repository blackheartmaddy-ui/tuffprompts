import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { PromptCard } from '@/components/PromptCard';
import { PromptModal } from '@/components/PromptModal';
import { prompts, type Category, type Prompt } from '@/lib/prompts-data';

function TuffPrompts() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesCategory = category === 'All' || prompt.category === category;
      const matchesSearch =
        search === '' ||
        prompt.title.toLowerCase().includes(search.toLowerCase()) ||
        prompt.fullPrompt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPrompt(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">Tuff Prompts</h1>
            </div>
            <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Premium prompts that actually work.
          </p>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredPrompts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No prompts found. Try adjusting your search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  onClick={() => setSelectedPrompt(prompt)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <PromptModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
    </div>
  );
}

export default function Index() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TuffPrompts />
    </ThemeProvider>
  );
}
