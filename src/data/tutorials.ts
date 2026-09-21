export type Tutorial = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tuning: string;
  youtube: string;
  tiktok: string;
  tags: string[];
};

export const tutorials: Tutorial[] = [
  {
    id: 'black-hole-sun',
    title: 'Black Hole Sun',
    artist: 'Soundgarden',
    cover:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    description:
      'A clean breakdown of the main riff and lead phrasing with emphasis on timing, muted picking, and melodic phrasing.',
    difficulty: 'Intermediate',
    tuning: 'Drop D',
    youtube: 'https://www.youtube.com/watch?v=3qmVyCoHqUc',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567890',
    tags: ['Classic Rock', 'Riff', 'Lead']
  },
  {
    id: 'dust-in-the-wind',
    title: 'Dust in the Wind',
    artist: 'Kansas',
    cover:
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80',
    description:
      'A fingerstyle-friendly arrangement focused on chord clarity, restraint, and dynamics for a more expressive performance.',
    difficulty: 'Beginner',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=RtBBl6Z_1c8',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567891',
    tags: ['Acoustic', 'Fingerstyle', 'Beginner']
  },
  {
    id: 'take-it-easy',
    title: 'Take It Easy',
    artist: 'Eagles',
    cover:
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=80',
    description:
      'A rhythm-first lesson built around laid-back strumming, groove control, and chord transitions that feel natural and relaxed.',
    difficulty: 'Beginner',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=RudU5Y0T6dY',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567892',
    tags: ['Acoustic', 'Rhythm', 'Country Rock']
  },
  {
    id: 'wanted-dead-or-alive',
    title: 'Wanted Dead or Alive',
    artist: 'Bon Jovi',
    cover:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    description:
      'A practical breakdown of the iconic intro and rhythm work, with attention to pick attack, movement, and tonal control.',
    difficulty: 'Intermediate',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=9BMwcO6kq0Y',
    tiktok: 'https://www.tiktok.com/@yourhandle/video/1234567893',
    tags: ['Rock', 'Rhythm', 'Main Riff']
  }
];