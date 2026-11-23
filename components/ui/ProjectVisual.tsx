type ProjectVisualProps = {
  company: string
  surface: string
  accent: string
  /** Compact visuals drop the phone frame for smaller cards. */
  compact?: boolean
}

/**
 * Branded desktop + phone mockup used as the project visual.
 * It is an abstract placeholder, not a real screenshot: it shows layout
 * structure in the project's accent colour and never invents app content.
 */
const ProjectVisual = ({
  company,
  surface,
  accent,
  compact = false,
}: ProjectVisualProps) => {
  return (
    <div
      aria-hidden
      className="group relative w-full aspect-[16/10] overflow-hidden bg-dark-900"
      style={{
        backgroundImage: `radial-gradient(circle at 18% 18%, ${accent}3d, transparent 55%), radial-gradient(circle at 85% 95%, ${accent}26, transparent 50%)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Desktop window */}
      <div
        className={`absolute rounded-xl border border-white/10 bg-dark-800/95 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
          compact
            ? 'left-[10%] right-[10%] top-[16%] bottom-[16%]'
            : 'left-[8%] right-[22%] top-[14%] bottom-[16%] sm:left-[9%]'
        }`}
      >
        <div className="flex items-center gap-1.5 h-7 px-3 border-b border-white/10">
          <span className="rounded-full w-2 h-2 bg-white/20" />
          <span className="rounded-full w-2 h-2 bg-white/20" />
          <span className="rounded-full w-2 h-2 bg-white/20" />
          <span className="ml-3 truncate font-mono text-[10px] text-white/45">
            {surface}
          </span>
        </div>
        <div className="grid grid-cols-[26%_1fr] gap-3 p-3 h-[calc(100%-1.75rem)]">
          <div className="space-y-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-md h-2.5"
                style={{ backgroundColor: i === 0 ? `${accent}66` : 'rgba(255,255,255,0.08)' }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 min-w-0">
            <div className="rounded-md h-4 w-2/3 bg-white/12" />
            <div className="grid grid-cols-2 gap-2 flex-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg"
                  style={{ backgroundColor: `${accent}${i === 0 ? '40' : '1a'}` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      {!compact && (
        <div className="absolute right-[10%] bottom-[10%] w-[20%] min-w-[64px] aspect-[9/19] rounded-[1.25rem] border-[4px] border-dark-950 bg-dark-800 shadow-2xl shadow-black/60 transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <div className="space-y-2 p-2 pt-4">
            <div className="rounded h-2 w-1/2 bg-white/15" />
            <div className="rounded-lg aspect-[4/3]" style={{ backgroundColor: `${accent}40` }} />
            <div className="rounded h-2 w-3/4 bg-white/10" />
            <div className="rounded h-2 w-2/3 bg-white/10" />
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-4 flex items-center gap-2">
        <span
          className="rounded-full w-1.5 h-1.5"
          style={{ backgroundColor: accent }}
        />
        <span className="font-medium text-[10px] uppercase tracking-[0.18em] text-white/55">
          {company} · Visual placeholder
        </span>
      </div>
    </div>
  )
}

export default ProjectVisual
