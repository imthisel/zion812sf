import type { Tutorial } from '../data/tutorials';

type TutorialCardProps = {
  tutorial: Tutorial;
  active: boolean;
  onSelect: (id: string) => void;
};

export default function TutorialCard({
  tutorial,
  active,
  onSelect
}: TutorialCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tutorial.id)}
      className={[
        'group w-full overflow-hidden rounded-2xl border bg-slate-900 text-left transition-all duration-200',
        active
          ? 'border-amber-500 shadow-[0_0_0_1px_rgba(245,158,11,0.35)]'
          : 'border-slate-800 hover:border-slate-700'
      ].join(' ')}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={tutorial.cover}
          alt={tutorial.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/15 bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
            {tutorial.difficulty}
          </span>
          <span className="text-xs text-slate-200">{tutorial.tuning}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {tutorial.artist}
          </p>
          <span className="text-xs uppercase tracking-[0.12em] text-slate-500">Lesson</span>
        </div>

        <h3 className="text-xl font-semibold text-white">{tutorial.title}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
          {tutorial.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}