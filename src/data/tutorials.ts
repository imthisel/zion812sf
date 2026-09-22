export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Instrument = 'Acoustic Guitar' | 'Electric Guitar' | 'Piano' | 'Bass Guitar';

export type Tutorial = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  description: string;
  difficulty: Difficulty;
  instrument: Instrument;
  tuning: string;
  youtube?: string;
  tiktok?: string;
  tags: string[];
};

export const fallbackCover =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80';

export const tutorials: Tutorial[] = [
  {
    id: 'black-hole-sun',
    title: 'Black Hole Sun',
    artist: 'Soundgarden',
    cover: '/images/tutorials/black-hole-sun.jpg',
    description:
      'A clean breakdown of the main riff and lead phrasing with emphasis on timing, muted picking, and melodic phrasing.',
    difficulty: 'Intermediate',
    instrument: 'Electric Guitar',
    tuning: 'Drop D',
    youtube: 'https://www.youtube.com/watch?v=3qmVyCoHqUc',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567890',
    tags: ['Fingerstyle', 'Rhythm / Strumming', 'Flatpicking']
  },
  {
    id: 'dust-in-the-wind',
    title: 'Dust in the Wind',
    artist: 'Kansas',
    cover: '/images/tutorials/dust-in-the-wind.jpg',
    description:
      'A fingerstyle-friendly arrangement focused on chord clarity, restraint, and dynamics for a more expressive performance.',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=RtBBl6Z_1c8',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567891',
    tags: ['Fingerstyle', 'Rhythm / Strumming']
  },
  {
    id: 'take-it-easy',
    title: 'Take It Easy',
    artist: 'Eagles',
    cover: '/images/tutorials/take-it-easy.jpg',
    description:
      'A rhythm-first lesson built around laid-back strumming, groove control, and chord transitions that feel natural and relaxed.',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=RudU5Y0T6dY',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567892',
    tags: ['Rhythm / Strumming']
  },
  {
    id: 'wanted-dead-or-alive',
    title: 'Wanted Dead or Alive',
    artist: 'Bon Jovi',
    cover: '/images/tutorials/wanted-dead-or-alive.jpg',
    description:
      'A practical breakdown of the iconic intro and rhythm work, with attention to pick attack, movement, and tonal control.',
    difficulty: 'Intermediate',
    instrument: 'Electric Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=9BMwcO6kq0Y',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567893',
    tags: ['Rhythm / Strumming', 'Flatpicking']
  },
  {
    id: 'fast-car',
    title: 'Fast Car',
    artist: 'Tracy Chapman',
    cover: '/images/tutorials/fast-car.jpg',
    description:
      'A compact acoustic lesson focused on chord movement, the vocal rhythm, and a clean, steady picking feel.',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=6OQHwQ4PV2E',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567894',
    tags: ['Fingerstyle']
  },
  {
    id: 'sultans-of-swing',
    title: 'Sultans of Swing',
    artist: 'Dire Straits',
    cover: '/images/tutorials/sultans-of-swing.jpg',
    description:
      'A rhythm and lead lesson built around melodic phrasing, syncopation, and a light but articulate tone.',
    difficulty: 'Intermediate',
    instrument: 'Electric Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=9VwXQHAKxig',
    tags: ['Rhythm / Strumming', 'Fingerstyle']
  }
];