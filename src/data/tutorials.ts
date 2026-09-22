export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Instrument = 'Acoustic Guitar' | 'Electric Guitar' | 'Piano' | 'Bass Guitar';

export type Tutorial = {
  id: string;
  title: string;
  artist: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  instrument: 'Acoustic Guitar' | 'Electric Guitar' | 'Piano' | 'Bass Guitar';
  tuning: string;
  tags: string[];
  cover?: string;
  description: string;
  youtube?: string;
  tiktok?: string;
  website?: string;
};

export const fallbackCover =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80';

export const tutorials: Tutorial[] = [
  {
    id: 'just-the-two-of-us',
    title: 'Just the Two of Us',
    artist: 'Grover Washing ton, Jr., Bill Withers',
    cover: '/images/0001.png',
    description:
      'First ever post',
    difficulty: 'Advanced',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    youtube: 'https://www.youtube.com/watch?v=2SnwOmYZ84E&list=RD2SnwOmYZ84E&start_radio=1',
    tags: ['Fingerstyle']
  },
  {
    id: 'every-breath-you-yake',
    title: 'Every Breath You Take',
    artist: 'The Police',
    cover: '/images/0002.png',
    description:
      'This genuinely hurt my hand to play bruh, this sumn thats supposed to be played in electric',
    difficulty: 'Advanced',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=JvRLYuiyURk&list=RDJvRLYuiyURk&start_radio=1',
    tags: ['Flatpicking']
  },
  {
    id: 'risk-it-all',
    title: 'Risk It All',
    artist: 'Bruno Mars',
    cover: '/images/0003.png',
    description:
      'my goat kenneth acoustic',
    difficulty: 'Advanced',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=Gpv0TbNNvdk&list=RDGpv0TbNNvdk&start_radio=1',
    tags: ['Fingerstyle']
  },
  {
    id: 'the-perfect-pair',
    title: 'The Perfect Pair',
    artist: 'Beabadoobee',
    cover: '/images/0005.png',
    description:
      'beabadoobs',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=zOJpmgPAn9A',
    tags: ['Fingerstyle']
  },
  {
    id: 'looking-out-for-you',
    title: 'Looking Out For You',
    artist: 'Joy Again',
    cover: '/images/0006.png',
    description:
      'v catchy',
    difficulty: 'Beginner',
    instrument: 'Electric Guitar',
    tuning: 'Standard E',
    tiktok: 'https://vt.tiktok.com/ZSqoRXSNr/',
    tags: ['Rhythm / Strumming']
  },
    {
    id: 'pluto-projector',
    title: 'Pluto Projector',
    artist: 'Rex Orange County',
    cover: '/images/007.png',
    description:
      'Rex Orange Country',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=C_o2-lvR5nk&list=RDC_o2-lvR5nk&start_radio=1',
    tags: ['Fingerstyle']
  },
  {
    id: 'rehab',
    title: 'Rehab (Winter in Paris)',
    artist: 'Brent Faiyaz',
    cover: '/images/0008.png',
    description:
      'we luv brent',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    tiktok: ' https://vt.tiktok.com/ZSqo8T6Fo/',
    tags: ['Fingerstyle']
  },
  {
    id: 'pretend-lovers',
    title: 'Pretend Lovers',
    artist: 'Montell Fish',
    cover: '/images/0009.png',
    description:
      'girllll do u really wanna be my friend or do you really wanna be my lover',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard E',
    youtube: 'https://www.youtube.com/watch?v=C_o2-lvR5nk&list=RDC_o2-lvR5nk&start_radio=1',
    tags: ['Rhythm / Strumming']
  }
  ,


];