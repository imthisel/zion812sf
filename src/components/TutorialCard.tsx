import { fallbackCover, type Tutorial } from '../data/tutorials';

type TutorialCardProps = {
  tutorial: Tutorial;
  onSelect: (id: string) => void;
};

export default function TutorialCard({ tutorial, onSelect }: TutorialCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tutorial.id)}
      className="group w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left transition-all duration-200 ease-out hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:rounded-2xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={tutorial.cover || fallbackCover}
          alt={tutorial.title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = fallbackCover;
          }}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-2 sm:p-3">
          <span className="rounded-full border border-white/15 bg-slate-900/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-300 sm:px-2.5 sm:py-1 sm:text-[10px]">
            {tutorial.difficulty}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
          <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-white sm:text-base">
            {tutorial.title}
          </h3>
          <p className="mt-1 truncate text-[11px] text-slate-300 sm:text-xs">{tutorial.artist}</p>
        </div>
      </div>
    </button>
  );
}
