import { useMemo, useState } from 'react';
import SectionHeader from './components/SectionHeader';
import TutorialCard from './components/TutorialCard';
import { fallbackCover, tutorials } from './data/tutorials';

const categoryList = ['Fingerstyle', 'Rhythm / Strumming', 'Background Chords'];
const instrumentOptions = ['All', 'Acoustic Guitar', 'Electric Guitar', 'Piano', 'Bass Guitar'];

export default function App() {
  const [selectedId, setSelectedId] = useState(tutorials[0].id);
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [instrument, setInstrument] = useState('All');
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

  const selectedTutorial =
    filteredTutorials.find((item) => item.id === selectedId) ?? filteredTutorials[0] ?? tutorials[0];

  const tuningOptions = Array.from(
    new Set(tutorials.map((tutorial) => tutorial.tuning))
  );

  const tagOptions = ['All', ...Array.from(new Set(tutorials.flatMap((tutorial) => tutorial.tags)))];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-stone-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-base font-black text-slate-950">
              Z
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
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
            className="rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 transition hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950"
          >
            Browse lessons
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">
                Guitar tutorials
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn real songs, riffs, and rhythm with clarity.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                A focused library for guitar players who want polished lessons, practical
                breakdowns, and clean access to the original music videos.
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

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
              <div className="relative">
                <img
                  src={selectedTutorial.cover || fallbackCover}
                  alt={selectedTutorial.title}
                  onError={(event) => {
                    event.currentTarget.src = fallbackCover;
                  }}
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
                    Featured lesson
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {selectedTutorial.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-200">{selectedTutorial.artist}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Library"
            title="Browse guitar lessons by song and style"
            description="A clean library of guitar tutorials with key details, song context, and direct access to the original source videos."
          />

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr_0.8fr]">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Search
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by song or artist"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Difficulty
                </span>
                <select
                  value={difficulty}
                  onChange={(event) =>
                    setDifficulty(event.target.value as 'All' | 'Beginner' | 'Intermediate' | 'Advanced')
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
                  onChange={(event) => setInstrument(event.target.value)}
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

              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Category
                </span>
                <select
                  value={selectedTag}
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
          </div>

          {filteredTutorials.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center">
              <p className="text-xl font-semibold text-white">No tutorials match your filters.</p>
              <p className="mt-2 text-sm text-slate-400">
                Try clearing the search or adjusting the difficulty, instrument, tuning, or category.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-6 md:grid-cols-2">
                {filteredTutorials.map((tutorial) => (
                  <TutorialCard
                    key={tutorial.id}
                    tutorial={tutorial}
                    active={tutorial.id === selectedTutorial.id}
                    onSelect={setSelectedId}
                  />
                ))}
              </div>

              <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                <div className="overflow-hidden rounded-2xl border border-slate-800">
                  <img
                    src={selectedTutorial.cover || fallbackCover}
                    alt={selectedTutorial.title}
                    onError={(event) => {
                      event.currentTarget.src = fallbackCover;
                    }}
                    className="h-64 w-full object-cover"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-amber-300">
                      {selectedTutorial.artist}
                    </p>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                      {selectedTutorial.difficulty}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {selectedTutorial.title}
                  </h3>

                  <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Instrument
                      </p>
                      <p className="mt-2 font-medium text-white">{selectedTutorial.instrument}</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Tuning
                      </p>
                      <p className="mt-2 font-medium text-white">{selectedTutorial.tuning}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    {selectedTutorial.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedTutorial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {selectedTutorial.youtube ? (
                      <a
                        href={selectedTutorial.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                      >
                        Watch on YouTube
                      </a>
                    ) : null}

                    {selectedTutorial.tiktok ? (
                      <a
                        href={selectedTutorial.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
                      >
                        Watch on TikTok
                      </a>
                    ) : null}
                  </div>

                  {!selectedTutorial.youtube && !selectedTutorial.tiktok ? (
                    <div className="mt-5 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4 text-sm text-slate-400">
                      No external video link has been added for this tutorial yet.
                    </div>
                  ) : null}
                </div>
              </aside>
            </div>
          )}
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <SectionHeader
              eyebrow="About"
              title="All of my TikTok tutorials in one place"
              description="A simple library of the lessons I’ve used across my TikTok videos."
            />

            <div className="mt-8 max-w-3xl">
              <p className="text-base leading-7 text-slate-300">
                This site is basically a collection of the tutorials I’ve used in my TikTok
                videos. I wanted everything in one place so it’s easier to find a song, learn
                the arrangement, and jump straight to the original video.
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
                      'Clean fingerpicked patterns and melodic accompaniment work.'}
                    {category === 'Rhythm / Strumming' &&
                      'Groove-focused lessons built around strumming and timing.'}
                    {category === 'Background Chords' &&
                      'Chord-based support playing for softer accompaniment and song flow.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}