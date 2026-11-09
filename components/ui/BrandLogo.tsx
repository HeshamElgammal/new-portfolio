import { brand } from '@/lib/brand'

type BrandLogoProps = {
  compact?: boolean
  href?: string
  onClick?: () => void
  onNavigate?: () => void
}

const BrandLogo = ({
  compact = false,
  href,
  onClick,
  onNavigate,
}: BrandLogoProps) => {
  const [firstName, ...rest] = brand.name.split(' ')
  const lastName = rest.join(' ')

  const className = `flex items-center gap-3 text-left ${
    href || onClick ? 'cursor-pointer' : ''
  }`

  const content = (
    <>
      <div className="relative flex justify-center items-center bg-gradient-to-br from-primary-400 to-primary-600 shadow-glow-sm rounded-xl w-10 h-10 shrink-0">
        <span className="font-black text-white text-xs tracking-tighter">HE</span>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_50%)] rounded-xl" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
            <span className="gradient-text">{firstName}</span>
            {lastName ? ` ${lastName}` : ''}
          </p>
          <p className="font-medium text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs uppercase tracking-[0.15em]">
            {brand.studioName}
          </p>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        className={`${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-lg`}
      >
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-lg`}
      >
        {content}
      </button>
    )
  }

  return <div className={className}>{content}</div>
}

export default BrandLogo
