import { useMemo, useState } from 'react';
import SectionHeader from './components/SectionHeader';
import TutorialCard from './components/TutorialCard';
import TutorialModal from './components/TutorialModal';
import { fallbackCover, tutorials } from './data/tutorials';

const categoryList = ['Fingerstyle', 'Rhythm / Strumming', 'Flatpicking'] as const;
const instrumentOptions = [
  'All',
  'Acoustic Guitar',
  'Electric Guitar',
  'Piano',
  'Bass Guitar'
] as const;

type DifficultyFilter = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export default function App() {
  const [activeTutorialId, setActiveTutorialId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All');
  const [instrument, setInstrument] = useState<(typeof instrumentOptions)[number]>('All');
  const [tuning, setTuning] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredTutorials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tutorials.filter((tutorial) => {
      const matchesQuery =
        !normalizedQuery ||
        tutorial.title.toLowerCase().includes(normalizedQuery) ||
        tutorial.artist.toLowerCase().includes(normalizedQuery);

      const matchesDifficulty =
        difficulty === 'All' || tutorial.difficulty === difficulty;

      const matchesInstrument =
        instrument === 'All' || tutorial.instrument === instrument;

      const matchesTuning =
        tuning === 'All' || tutorial.tuning === tuning;

      const matchesTag =
        selectedTag === 'All' || tutorial.tags.includes(selectedTag);

      return matchesQuery && matchesDifficulty && matchesInstrument && matchesTuning && matchesTag;
    });
  }, [query, difficulty, instrument, tuning, selectedTag]);

  const hasActiveFilters =
    query.trim() !== '' ||
    difficulty !== 'All' ||
    instrument !== 'All' ||
    tuning !== 'All' ||
    selectedTag !== 'All';

  const featuredTutorial = tutorials[0];

  const activeTutorial = tutorials.find((item) => item.id === activeTutorialId) ?? null;

  const tuningOptions = Array.from(new Set(tutorials.map((tutorial) => tutorial.tuning)));

  const tagOptions = [
    'All',
    ...Array.from(new Set(tutorials.flatMap((tutorial) => tutorial.tags)))
  ];

  const resetFilters = () => {
    setQuery('');
    setDifficulty('All');
    setInstrument('All');
    setTuning('All');
    setSelectedTag('All');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-stone-950/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-base font-black text-slate-950 sm:h-10 sm:w-10">
              Z
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 sm:text-sm sm:tracking-[0.25em]">
                Zion812sf
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#library" className="transition hover:text-white">
              Library
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </nav>

          <a
            href="#library"
            className="shrink-0 whitespace-nowrap rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-300 transition hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 sm:px-4 sm:text-sm"
          >
            Browse lessons
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                Zion 812sf Complete Guitar Tutorials
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn How to Play All the Songs in my Tiktok Account
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                A completely free library for all those who are asking for tutorials 🙂
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#library"
                  className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Explore tutorials
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
                >
                  About the library
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 sm:rounded-3xl">
              <div className="relative">
                <img
                  src={featuredTutorial.cover || fallbackCover}
                  alt={featuredTutorial.title}
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.src = fallbackCover;
                  }}
                  className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
                    Featured lesson
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    {featuredTutorial.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-200">{featuredTutorial.artist}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="library" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeader
            eyebrow="Library"
            title="Browse guitar lessons by song and style"
            description="Find the right guitar lesson faster with a library organized by song, artist, style, tuning, and instrument. "
          />

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-5">
              <label className="block col-span-2 xl:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Search
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by song or artist"
                  aria-label="Search tutorials by song or artist"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Difficulty
                </span>
                <select
                  value={difficulty}
                  aria-label="Filter by difficulty"
                  onChange={(event) =>
                    setDifficulty(event.target.value as DifficultyFilter)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                >
                  <option value="All">All</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Instrument
                </span>
                <select
                  value={instrument}
                  aria-label="Filter by instrument"
                  onChange={(event) => setInstrument(event.target.value as (typeof instrumentOptions)[number])}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                >
                  {instrumentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Tuning
                </span>
                <select
                  value={tuning}
                  aria-label="Filter by tuning"
                  onChange={(event) => setTuning(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                >
                  <option value="All">All</option>
                  {tuningOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block md:col-span-2 xl:col-span-1">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Category
                </span>
                <select
                  value={selectedTag}
                  aria-label="Filter by category"
                  onChange={(event) => setSelectedTag(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                >
                  {tagOptions.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {hasActiveFilters ? (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            ) : null}
          </div>

          {filteredTutorials.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center">
              <p className="text-xl font-semibold text-white">No tutorials match your filters.</p>
              <p className="mt-2 text-sm text-slate-400">
                Try clearing the search or adjusting the difficulty, instrument, tuning, or category.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
              {filteredTutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.id}
                  tutorial={tutorial}
                  onSelect={setActiveTutorialId}
                />
              ))}
            </div>
          )}
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <SectionHeader
              eyebrow="About"
              title="All Tutorials I used for My Tiktok Videos"
              description="A simple library of the lessons I’ve used across my TikTok videos."
            />

            <div className="mt-8 max-w-3xl space-y-4">
              <p className="text-base leading-7 text-slate-300">
                The main reason I made this website is to give credit to those whose tutorials I used to learn the songs in my account. Aside from that, this website was also made to make it easier for everybody to play the things I’ve
                played, and to keep everything organized in one place instead of scattered
                replies in the comments.
              </p>
              <p className="text-base leading-7 text-slate-300">
                It’s also an outside project of mine built to test and improve my programming
                skills.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {categoryList.map((category) => (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <p className="text-sm font-semibold text-white">{category}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {category === 'Fingerstyle' &&
                      'Playing the strings with your fingers instead of a pick.'}
                    {category === 'Rhythm / Strumming' &&
                      'Just strumming chords either with a pick or just the hand.'}
                    {category === 'Flatpicking' &&
                      'Picking individual notes and riffs with a guitar pick.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

        <section id="difficulty-guide" className="mx-auto max-w-7xl px-4 py-10 sm:px-4 sm:py-16 lg:px-8">
          <SectionHeader
            eyebrow="Difficulty guide"
            title="How I decide the difficulty of each lesson"
            description="This is just a simple way to help you pick the right songs to practice next."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5">
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Beginner
              </div>

              <p className="text-sm leading-7 text-slate-200">
                Mostly easy strumming, simple chord shapes, and very comfortable fingerpicking.

              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Simple strumming patterns</li>
                <li>• Easy chord transitions</li>
                <li>• Light fingerpicking with little movement</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-5">
              <div className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                Intermediate
              </div>

              <p className="text-sm leading-7 text-slate-200">
                These usually include strumming with more bar chords, plus fingerpicking that is
                a little more involved but def still manageable with practice.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• More bar chords</li>
                <li>• Stronger rhythm control</li>
                <li>• Fingerpicking that feels a bit tougher</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-rose-500/30 bg-rose-500/10 p-5">
              <div className="mb-4 inline-flex rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-200">
                Advanced
              </div>

              <p className="text-sm leading-7 text-slate-200">
                These are the songs I personally find hardest to play, like fingerstyle with slaps,
                harmonics, difficult transitions, and techniques that need more control and precision.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Fingerstyle with slaps</li>
                <li>• Harmonics and advanced textures</li>
                <li>• Harder patterns and more technical playing</li>
              </ul>
            </div>
          </div>
        </section>
      

      <footer id="footer" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Zion812sf</p>
          <div className="flex flex-wrap gap-5">
            <a href="#library" className="transition hover:text-white">
              Library
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>
        </div>
      </footer>

      <TutorialModal tutorial={activeTutorial} onClose={() => setActiveTutorialId(null)} />
    </div>
  );
}