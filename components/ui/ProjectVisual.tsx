import Image from 'next/image'
import type { ProjectMedia } from '@/data/experiences'

type ProjectVisualProps = {
  title: string
  company: string
  surface: string
  accent: string
  media?: ProjectMedia
  /** Compact visuals use a smaller phone and no browser chrome for phone-only projects. */
  compact?: boolean
}

/** Browser window chrome around a website screenshot. */
const BrowserFrame = ({
  src,
  alt,
  url,
  className,
}: {
  src: string
  alt: string
  url: string
  className: string
}) => (
  <div
    className={`absolute overflow-hidden rounded-xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/60 transition-transform duration-500 ease-out group-hover:-translate-y-1 ${className}`}
  >
    <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-dark-900 px-3">
      <span className="h-2 w-2 rounded-full bg-white/25" aria-hidden />
      <span className="h-2 w-2 rounded-full bg-white/25" aria-hidden />
      <span className="h-2 w-2 rounded-full bg-white/25" aria-hidden />
      <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/55">
        {url}
      </span>
    </div>
    <div className="relative aspect-[1440/900] w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 60vw, 90vw"
        className="object-cover object-top"
      />
    </div>
  </div>
)

/** Phone bezel around an app-store screenshot. */
const PhoneFrame = ({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string
  alt: string
  className: string
  priority?: boolean
}) => (
  <div
    className={`absolute aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-[6px] border-dark-950 bg-dark-950 shadow-2xl shadow-black/70 ring-1 ring-white/10 transition-transform duration-500 ease-out group-hover:-translate-y-2 ${className}`}
  >
    <div className="absolute left-1/2 top-2.5 z-10 h-[18px] w-[30%] -translate-x-1/2 rounded-full bg-dark-950" aria-hidden />
    <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 220px, (min-width: 640px) 26vw, 40vw"
        className="object-cover object-top"
      />
    </div>
  </div>
)

/** Branded fallback used only when no genuine screenshot is available. */
const Placeholder = ({
  company,
  surface,
  accent,
}: Pick<ProjectVisualProps, 'company' | 'surface' | 'accent'>) => (
  <div
    aria-hidden
    className="relative w-full aspect-[16/10] overflow-hidden bg-dark-900"
    style={{
      backgroundImage: `radial-gradient(circle at 18% 18%, ${accent}3d, transparent 55%), radial-gradient(circle at 85% 95%, ${accent}26, transparent 50%)`,
    }}
  >
    <div className="absolute left-[9%] right-[22%] top-[14%] bottom-[16%] overflow-hidden rounded-xl border border-white/10 bg-dark-800/95 shadow-2xl shadow-black/50">
      <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-3 truncate font-mono text-[10px] text-white/45">{surface}</span>
      </div>
      <div className="grid h-[calc(100%-1.75rem)] grid-cols-[26%_1fr] gap-3 p-3">
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-2.5 rounded-md" style={{ backgroundColor: i === 0 ? `${accent}66` : 'rgba(255,255,255,0.08)' }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg" style={{ backgroundColor: `${accent}${i === 0 ? '40' : '1a'}` }} />
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 left-4 flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
        {company} · Screenshot pending
      </span>
    </div>
  </div>
)

/**
 * Project visual built from genuine screenshots (live site in a browser frame,
 * store screenshots in phone frames). Falls back to a labelled branded
 * placeholder when no real screenshot is available.
 */
const ProjectVisual = ({
  title,
  company,
  surface,
  accent,
  media,
  compact = false,
}: ProjectVisualProps) => {
  const phones = media?.phones ?? []
  const web = media?.web

  if (!web && phones.length === 0) {
    return <Placeholder company={company} surface={surface} accent={accent} />
  }

  return (
    <div
      className="group relative w-full aspect-[16/10] overflow-hidden bg-dark-900"
      style={{
        backgroundImage: `radial-gradient(circle at 15% 10%, ${accent}33, transparent 55%), radial-gradient(circle at 90% 100%, ${accent}1f, transparent 50%)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden />

      {web ? (
        <>
          <BrowserFrame
            src={web}
            alt={`${title}: live website`}
            url={surface}
            className={
              phones.length > 0
                ? 'left-[6%] top-[13%] w-[66%] sm:w-[68%]'
                : 'left-[6%] right-[6%] top-[13%]'
            }
          />
          {phones.length > 0 && (
            <PhoneFrame
              src={phones[0]}
              alt={`${company} app screen`}
              className="bottom-[-6%] right-[6%] w-[24%] min-w-[84px] max-w-[150px] sm:w-[22%]"
            />
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-end justify-center gap-[3%] px-[8%] pt-[12%]">
          {phones.map((src, i) => (
            <div
              key={src}
              className={`relative h-[78%] ${
                phones.length === 1 ? 'w-[46%] max-w-[260px]' : 'w-[30%] max-w-[220px]'
              } ${i === 1 && phones.length > 2 ? '-mb-[4%]' : ''} ${
                compact && i > 0 ? 'hidden sm:block' : ''
              }`}
            >
              <PhoneFrame
                src={src}
                alt={`${title}: app screen ${i + 1}`}
                priority={i === 0}
                className="inset-0 !aspect-auto h-full w-full"
              />
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProjectVisual
