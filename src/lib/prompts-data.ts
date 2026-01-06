export type Category = 'All' | 'Portrait' | 'Landscape' | 'Fantasy' | 'Sci-Fi' | 'Abstract' | 'Product' | 'Cinematic';

export interface Prompt {
  id: string;
  title: string;
  preview: string;
  fullPrompt: string;
  category: Exclude<Category, 'All'>;
  imageUrl: string;
}

export const categories: Category[] = [
  'All',
  'Portrait',
  'Landscape',
  'Fantasy',
  'Sci-Fi',
  'Abstract',
  'Product',
  'Cinematic',
];

export const prompts: Prompt[] = [
  {
    id: '1',
    title: 'Ethereal Portrait',
    preview: 'Dreamy portrait with soft lighting...',
    fullPrompt: 'A dreamy ethereal portrait of a woman with flowing silver hair, soft diffused lighting, bokeh background with floating particles, pastel color palette, shot on medium format camera, shallow depth of field, editorial fashion photography style',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
  },
  {
    id: '2',
    title: 'Misty Mountain Dawn',
    preview: 'Dramatic mountain landscape at sunrise...',
    fullPrompt: 'Majestic mountain peaks emerging from a sea of mist at golden hour, dramatic lighting with sun rays piercing through clouds, ultra wide angle, vibrant warm tones, landscape photography, 8K resolution, National Geographic style',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: '3',
    title: 'Dragon Guardian',
    preview: 'Ancient dragon protecting treasure...',
    fullPrompt: 'An ancient dragon with iridescent scales guarding a mountain of gold and jewels in a vast underground cavern, volumetric lighting from cracks above, epic fantasy art, highly detailed, mystical atmosphere, painted by Greg Rutkowski',
    category: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80',
  },
  {
    id: '4',
    title: 'Neon Cyberpunk City',
    preview: 'Futuristic cityscape with neon lights...',
    fullPrompt: 'A sprawling cyberpunk metropolis at night, towering skyscrapers with holographic advertisements, flying cars leaving light trails, rain-slicked streets reflecting neon signs, blade runner aesthetic, cinematic composition, ultra detailed',
    category: 'Sci-Fi',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
  },
  {
    id: '5',
    title: 'Liquid Chrome Flow',
    preview: 'Metallic fluid abstract composition...',
    fullPrompt: 'Abstract composition of liquid chrome and mercury flowing in impossible patterns, iridescent reflections, macro photography style, studio lighting, seamless gradients between silver gold and copper, hyper realistic 3D render',
    category: 'Abstract',
    imageUrl: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80',
  },
  {
    id: '6',
    title: 'Minimal Perfume Shot',
    preview: 'Elegant perfume bottle product photo...',
    fullPrompt: 'Luxury perfume bottle on a marble surface with soft morning light streaming through sheer curtains, minimalist composition, subtle shadows, high-end commercial photography, clean background, product showcase, 85mm lens',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
  },
  {
    id: '7',
    title: 'Film Noir Detective',
    preview: 'Classic noir scene with dramatic shadows...',
    fullPrompt: 'A detective in a trench coat standing under a street lamp on a foggy night, dramatic chiaroscuro lighting, black and white with subtle sepia tones, 1940s aesthetic, film grain, anamorphic lens flare, cinematic still',
    category: 'Cinematic',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  },
  {
    id: '8',
    title: 'Enchanted Forest Path',
    preview: 'Magical forest with glowing elements...',
    fullPrompt: 'A winding path through an enchanted forest with bioluminescent plants and mushrooms, fireflies dancing in the air, ancient twisted trees with glowing runes, mystical fog, fantasy art, volumetric god rays, magical realism',
    category: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
  },
  {
    id: '9',
    title: 'Space Station Sunrise',
    preview: 'Orbital view of Earth at dawn...',
    fullPrompt: 'View from a space station observation deck looking at Earth during sunrise, the thin blue line of atmosphere glowing, stars visible in the void of space, interior details of the station visible, hard science fiction, photorealistic',
    category: 'Sci-Fi',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
  },
  {
    id: '10',
    title: 'Geometric Dreamscape',
    preview: 'Impossible geometry and colors...',
    fullPrompt: 'Surreal abstract dreamscape with impossible geometric shapes floating in a gradient void, soft shadows, pastel pink blue and lavender palette, inspired by James Turrell and Olafur Eliasson, 3D render, octane, atmospheric',
    category: 'Abstract',
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
  },
  {
    id: '11',
    title: 'Moody Street Portrait',
    preview: 'Urban portrait with natural light...',
    fullPrompt: 'Street photography portrait of a young man in vintage clothing, natural overcast lighting, shallow depth of field with urban background blur, authentic candid expression, film photography aesthetic, Kodak Portra 400 colors',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    id: '12',
    title: 'Desert Dunes Sunset',
    preview: 'Golden sand dunes at magic hour...',
    fullPrompt: 'Endless sand dunes in the Sahara desert at sunset, dramatic shadows creating patterns, warm golden and orange tones, a single camel caravan silhouette on the horizon, epic scale, landscape photography, drone perspective',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
  },
  {
    id: '13',
    title: 'Floating Sneaker',
    preview: 'Dynamic shoe product photography...',
    fullPrompt: 'Premium sneaker floating in mid-air with dynamic lighting, colorful smoke wisps around it, studio setup with colored gels, product photography, sharp focus on shoe details, reflection on glossy black surface below',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  },
  {
    id: '14',
    title: 'Rainy Tokyo Night',
    preview: 'Atmospheric Japanese street scene...',
    fullPrompt: 'A lonely figure with an umbrella walking through a rain-soaked Tokyo alley at night, neon signs reflecting on wet pavement, steam rising from food stalls, cinematic color grading, Wong Kar-wai inspired mood, 35mm film look',
    category: 'Cinematic',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
  },
];
