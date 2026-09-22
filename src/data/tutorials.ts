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
    id: 'i-like-you-so-much-youll-know-it',
    title: 'I Like You So Much Youll Know It',
    artist: 'Ysabelle Cuevas',
    cover: '/images/0022.png',
    description:
      'dont forget to support his channel 🙏',
    difficulty: 'Intermediate',
    instrument: 'Electric Guitar',
    tuning: 'Standard',
    youtube: 'https://www.youtube.com/watch?v=3RkTJlb1x_E',
    tags: ['Fingerstyle']
  },
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
      'This genuinely hurt my hand to play bruh, this sumn you supposed to play on electric',
    difficulty: 'Advanced',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
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
    tuning: 'Standard',
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
    tuning: 'Standard',
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
    tuning: 'Standard',
    tiktok: 'https://vt.tiktok.com/ZSqoRXSNr/',
    tags: ['Rhythm / Strumming']
  },
    {
    id: 'pluto-projector',
    title: 'Pluto Projector',
    artist: 'Rex Orange County',
    cover: '/images/0007.png',
    description:
      'Rex Orange Country',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
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
    tuning: 'Standard',
    tiktok: ' https://vt.tiktok.com/ZSqo8T6Fo/',
    tags: ['Flatpicking']
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
    tuning: 'Standard',
    website: 'https://tabs.ultimate-guitar.com/tab/montell-fish/pretend-lovers-chords-5540373',
    tags: ['Rhythm / Strumming']
  },
   {
    id: 'lover-you-shouldve-come-over',
    title: "Lover, You Should've Come Over",
    artist: 'Jeff Buckley',
    cover: '/images/0010.png',
    description:
      "it's never overrrrrrr anw peak chord progression",
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    tiktok: 'https://vt.tiktok.com/ZSqoNF7gX/',
    tags: ['Rhythm / Strumming']
  }
  ,
   {
    id: 'neosoul',
    title: 'Neosoul - ES330',
    artist: 'Kasuki Isogai',
    cover: '/images/0011.png',
    description:
      'supposedly electric again but good hand strengthening exercise',
    difficulty: 'Advanced',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    youtube: 'https://www.youtube.com/watch?v=2qjdiPq4AkU',
    tags: ['Fingerstyle']
  }
  ,
  {
    id: 'invisible-string',
    title: 'Invisible String',
    artist: 'Taylor Swift',
    cover: '/images/0012.png',
    description:
      '🙍🏿',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    youtube: 'https://www.youtube.com/watch?v=9GAjP3a32_4',
    tags: ['Fingerstyle']
  }
  ,
  {
    id: 'beaches',
    title: 'Beaches',
    artist: 'Beabadoobee',
    cover: '/images/0013.png',
    description:
      'Beabadoobs again, im sureeeeee nowwwwwwow im sureee ',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    tiktok: 'https://vt.tiktok.com/ZSqoFq3XB/',
    tags: ['Rhythm / Strumming']
  },
  {
    id: 'fade-into-you',
    title: 'Fade Into You',
    artist: 'Mazzy Star',
    cover: '/images/0014.png',
    description:
      '🍰',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    tiktok: 'hhttps://vt.tiktok.com/ZSqoFHvd5/',
    tags: ['Rhythm / Strumming']
  },
  {
    id: 'need-2',
    title: 'Need 2',
    artist: 'Pinegrove',
    cover: '/images/0015.png',
    description:
      'nothin here to caree abouttt Note: High E string is half step down. ',
    difficulty: 'Beginner',
    instrument: 'Acoustic Guitar',
    tuning: 'E A D G B eb',
    tiktok: 'https://vt.tiktok.com/ZSqoYhUPS/',
    tags: ['Rhythm / Strumming']
  },
 
    {
    id: 'disillusioned',
    title: 'Disillusioned',
    artist: 'Daniel Caesar',
    cover: '/images/0016.png',
    description:
      'AND IIIIMMMMMMM',
    difficulty: 'Beginner',
    instrument: 'Bass Guitar',
    tuning: 'Standard',
    website: 'https://www.songsterr.com/a/wsa/daniel-caesar-disillusioned-bass-tab-s3005745',
    tags: ['Fingerstyle']
  },
   {
    id: 'tensionado',
    title: 'Tensionado',
    artist: 'Soapdish',
    cover: '/images/0017.png',
    description:
      'at sandali langggggg',
    difficulty: 'Intermediate',
    instrument: 'Bass Guitar',
    tuning: 'E A D G',
    youtube: 'https://www.youtube.com/watch?v=VOOFVtVZ4K8',
    tags: ['Fingerstyle']
  },
   {
    id: 'sweet-boy',
    title: 'Sweet boy',
    artist: 'Malcolm Todd',
    cover: '/images/0018.png',
    description:
      'can we go home nowwww',
    difficulty: 'Beginner',
    instrument: 'Electric Guitar',
    tuning: 'Standard',
    website: 'https://tabs.ultimate-guitar.com/tab/malcolm-todd/sweet-boy-chords-5368449',
    tags: ['Rhythm / Strumming']
  },
    {
    id: 'wherever-you-will-go',
    title: 'Wherever You Will Go',
    artist: 'The Calling',
    cover: '/images/0019.png',
    description:
      'unc song, if i coulddd then I woulddd. Lowkey j tried plugging the acoustic guitar to the amp here',
    difficulty: 'Intermediate',
    instrument: 'Acoustic Guitar',
    tuning: 'Standard',
    youtube: 'https://www.youtube.com/watch?v=26Q9Xpthj_s',
    tags: ['Flatpicking']
  },
     {
    id: 'kabisado',
    title: 'Kabisado',
    artist: 'IV OF SPADES',
    cover: '/images/0020.png',
    description:
      'Kabisadoooo ko naa ang tamis ng iyong labiiii kabisadooooooooo ko na',
    difficulty: 'Intermediate',
    instrument: 'Electric Guitar',
    tuning: 'Standard',
    tiktok: 'https://vt.tiktok.com/ZSqo2txLD/',
    tags: ['Flatpicking']
  },
    


];