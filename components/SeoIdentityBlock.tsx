import { brand } from '@/lib/brand'
import { profileSeo } from '@/lib/profile-seo'
import { siteCopy } from '@/lib/site-copy'

/**
 * Server-rendered, crawlable summary of professional data (visible, compact).
 */
const SeoIdentityBlock = () => {
  return (
    <section
      aria-label="Professional profile summary"
      className="border-slate-200 dark:border-slate-800 border-t"
    >
      <div className="section-container py-10">
        <div className="mx-auto max-w-4xl text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          <h2 className="sr-only">{brand.name} — professional profile</h2>
          <p className="mb-4">
            <strong className="text-slate-800 dark:text-slate-200">
              {brand.name}
            </strong>{' '}
            is a {brand.jobTitle} based in {profileSeo.addressLocality},{' '}
            {profileSeo.addressCountry}. {siteCopy.intro} Contact:{' '}
            <a
              href={`mailto:${brand.email}`}
              className="text-primary-600 dark:text-primary-400 underline-offset-2 hover:underline"
            >
              {brand.email}
            </a>
            , phone{' '}
            <a
              href={brand.phoneTel}
              className="text-primary-600 dark:text-primary-400 underline-offset-2 hover:underline"
            >
              {brand.phone}
            </a>
            , WhatsApp{' '}
            <a
              href={brand.whatsapp}
              className="text-primary-600 dark:text-primary-400 underline-offset-2 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {brand.whatsappDisplay}
            </a>
            . Profiles:{' '}
            <a
              href={brand.linkedin}
              rel="me noopener noreferrer"
              target="_blank"
              className="text-primary-600 dark:text-primary-400 underline-offset-2 hover:underline"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href={brand.github}
              rel="me noopener noreferrer"
              target="_blank"
              className="text-primary-600 dark:text-primary-400 underline-offset-2 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <p className="mb-2 font-medium text-slate-700 dark:text-slate-300">
            Experience
          </p>
          <ul className="mb-4 space-y-1 list-disc pl-5">
            {profileSeo.workHistory.map((job) => (
              <li key={`${job.company}-${job.role}`}>
                {job.role} at {job.company}
                {'project' in job && job.project ? ` (${job.project})` : ''} —{' '}
                {job.startDate}
                {job.endDate ? ` to ${job.endDate}` : ' to present'} ·{' '}
                {job.location}
              </li>
            ))}
          </ul>
          <p className="mb-2 font-medium text-slate-700 dark:text-slate-300">
            Education
          </p>
          <p className="mb-4">
            {profileSeo.education.degree}, {profileSeo.education.institution} (
            {profileSeo.education.startDate} – {profileSeo.education.endDate}),
            grade: {profileSeo.education.grade}.
          </p>
          <p className="mb-2 font-medium text-slate-700 dark:text-slate-300">
            Skills
          </p>
          <p>{profileSeo.skills.join(', ')}.</p>
        </div>
      </div>
    </section>
  )
}

export default SeoIdentityBlock
