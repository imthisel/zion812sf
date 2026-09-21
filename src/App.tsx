import { useMemo, useState } from 'react';
import SectionHeader from './components/SectionHeader';
import TutorialCard from './components/TutorialCard';
import { tutorials } from './data/tutorials';

const categoryList = ['Fingerstyle', 'Rhythm / Strumming', 'Background Chords'];

export default function App() {
  const [selectedId, setSelectedId] = useState(tutorials[0].id);

  const selectedTutorial = useMemo(
    () => tutorials.find((item) => item.id === selectedId) ?? tutorials[0],
    [selectedId]
  );

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
                  src={selectedTutorial.cover}
                  alt={selectedTutorial.title}
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

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {tutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.id}
                  tutorial={tutorial}
                  active={tutorial.id === selectedId}
                  onSelect={setSelectedId}
                />
              ))}
            </div>

            <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <img
                  src={selectedTutorial.cover}
                  alt={selectedTutorial.title}
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
                      Tuning
                    </p>
                    <p className="mt-2 font-medium text-white">{selectedTutorial.tuning}</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Format
                    </p>
                    <p className="mt-2 font-medium text-white">Tutorial + Video</p>
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
                  <a
                    href={selectedTutorial.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href={selectedTutorial.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
                  >
                    Open TikTok
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <SectionHeader
              eyebrow="About"
              title="Every lesson from my TikTok library"
              description="This website brings together all the guitar tutorials I’ve used across my TikTok videos."
            />

            <div className="mt-8 max-w-3xl">
              <p className="text-base leading-7 text-slate-300">
                This website is a collection of the tutorials I’ve used in my TikTok videos —
                all in one place so it’s easier to find the lesson, learn the song, and go
                straight to the original video.
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
                      'Warm, delicate picking patterns and melodic accompaniment styles.'}
                    {category === 'Rhythm / Strumming' &&
                      'Groove-based lessons focused on strumming patterns and timing.'}
                    {category === 'Background Chords' &&
                      'Chord-based support playing for songs and softer accompanying textures.'}
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