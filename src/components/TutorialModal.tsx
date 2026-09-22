import { useEffect } from 'react';
import { fallbackCover, type Tutorial } from '../data/tutorials';

type TutorialModalProps = {
  tutorial: Tutorial | null;
  onClose: () => void;
};

export default function TutorialModal({ tutorial, onClose }: TutorialModalProps) {
  useEffect(() => {
    if (!tutorial) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [tutorial, onClose]);

  if (!tutorial) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={tutorial.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 backdrop-blur-sm sm:items-center sm:p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[92vh] w-full flex-col overflow-y-auto rounded-t-3xl border border-slate-800 bg-slate-900 sm:max-w-xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-lg text-white transition hover:bg-slate-800"
        >
          &times;
        </button>

        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-[16/9]">
          <img
            src={tutorial.cover || fallbackCover}
            alt={tutorial.title}
            decoding="async"
            onError={(event) => {
              event.currentTarget.src = fallbackCover;
            }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-300">{tutorial.artist}</p>
            <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
              {tutorial.difficulty}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{tutorial.title}</h2>

          <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Instrument</p>
              <p className="mt-2 font-medium text-white">{tutorial.instrument}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Tuning</p>
              <p className="mt-2 font-medium text-white">{tutorial.tuning}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-300">{tutorial.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tutorial.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {tutorial.youtube ? (
              <a
                href={tutorial.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Watch on YouTube
              </a>
            ) : null}

            {tutorial.tiktok ? (
              <a
                href={tutorial.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
              >
                Watch on TikTok
              </a>
            ) : null}

            {tutorial.website ? (
              <a
                href={tutorial.website}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
              >
                Open Website
              </a>
            ) : null}
          </div>

          {!tutorial.youtube && !tutorial.tiktok && !tutorial.website ? (
            <div className="mt-5 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4 text-sm text-slate-400">
              No external link has been added for this tutorial yet.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}