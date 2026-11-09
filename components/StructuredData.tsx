import { brand } from '@/lib/brand'
import { profileSeo } from '@/lib/profile-seo'

const personId = `${brand.siteUrl}/#person`

const StructuredData = () => {
  const workExperienceSchema = profileSeo.workHistory.map((job, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'OrganizationRole',
      roleName: job.role,
      description: job.description,
      startDate: job.startDate,
      ...(job.endDate ? { endDate: job.endDate } : {}),
      location: {
        '@type': 'Place',
        name: job.location,
      },
      worksFor: {
        '@type': 'Organization',
        name: job.company,
      },
    },
  }))

  const graph = [
    {
      '@type': 'ProfilePage',
      '@id': `${brand.siteUrl}/#profilepage`,
      url: brand.siteUrl,
      name: `${brand.name} — ${brand.jobTitle}`,
      description: brand.description,
      inLanguage: 'en',
      mainEntity: { '@id': personId },
      isPartOf: { '@id': `${brand.siteUrl}/#website` },
    },
    {
      '@type': 'WebSite',
      '@id': `${brand.siteUrl}/#website`,
      name: `${brand.name} — ${brand.studioName}`,
      url: brand.siteUrl,
      description: brand.description,
      inLanguage: 'en',
      author: { '@id': personId },
      publisher: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: brand.name,
      givenName: profileSeo.givenName,
      familyName: profileSeo.familyName,
      jobTitle: brand.jobTitle,
      description: brand.description,
      email: `mailto:${brand.email}`,
      telephone: brand.phone,
      url: brand.siteUrl,
      image: {
        '@type': 'ImageObject',
        url: `${brand.siteUrl}${brand.profileImage}`,
        contentUrl: `${brand.siteUrl}${brand.profileImage}`,
        caption: brand.profileImageAlt,
        name: `${brand.name} professional photo`,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: profileSeo.addressLocality,
        addressCountry: profileSeo.addressCountry,
      },
      nationality: {
        '@type': 'Country',
        name: profileSeo.nationality,
      },
      sameAs: [brand.linkedin, brand.github],
      knowsAbout: profileSeo.skills,
      knowsLanguage: profileSeo.languages.map((lang) => ({
        '@type': 'Language',
        name: lang.name,
        alternateName: lang.proficiency,
      })),
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: profileSeo.education.institution,
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: brand.jobTitle,
        occupationLocation: {
          '@type': 'City',
          name: profileSeo.addressLocality,
        },
        skills: profileSeo.skills.join(', '),
      },
      worksFor: [
        {
          '@type': 'Organization',
          name: profileSeo.workHistory[0].company,
        },
        {
          '@type': 'Organization',
          name: brand.studioName,
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${brand.siteUrl}/#selected-work`,
      name: `${brand.name} professional experience`,
      itemListElement: workExperienceSchema,
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: profileSeo.education.degree,
      educationalLevel: 'Bachelor',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: profileSeo.education.institution,
      },
      dateCreated: profileSeo.education.endDate,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${brand.siteUrl}/#studio`,
      name: brand.studioName,
      url: brand.siteUrl,
      image: `${brand.siteUrl}${brand.ogImage}`,
      description: brand.description,
      email: brand.email,
      telephone: brand.phone,
      areaServed: 'Worldwide',
      founder: { '@id': personId },
      employee: { '@id': personId },
      address: {
        '@type': 'PostalAddress',
        addressLocality: profileSeo.addressLocality,
        addressCountry: profileSeo.addressCountry,
      },
      knowsAbout: profileSeo.skills,
      serviceType: [
        'Mobile App Development',
        'Web Development',
        'Full-Stack Development',
        'Freelance Software Engineering',
      ],
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default StructuredData
