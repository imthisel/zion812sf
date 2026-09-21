export type Tutorial = {
  id: string;
  title: string;
  artist: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tuning: string;
  description: string;
  tags: string[];
};

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Intro to Hybrid Picking',
    artist: 'String Atlas',
    difficulty: 'Intermediate',
    tuning: 'Standard E',
    description:
      'A focused lesson on combining pick and fingerstyle phrasing for cleaner melodic lines.',
    tags: ['technique', 'hybrid picking', 'lead']
  },
  {
    id: '2',
    title: 'Easy Acoustic Rhythm Patterns',
    artist: 'String Atlas',
    difficulty: 'Beginner',
    tuning: 'Standard E',
    description:
      'Build timing and groove with practical acoustic rhythm ideas you can play on repeat.',
    tags: ['rhythm', 'acoustic', 'beginner']
  },
  {
    id: '3',
    title: 'Pentatonic Licks for Soloing',
    artist: 'String Atlas',
    difficulty: 'Intermediate',
    tuning: 'Drop D',
    description:
      'Learn a few reusable pentatonic licks to add flexibility and articulation to your solos.',
    tags: ['soloing', 'pentatonic', 'lead']
  }
];