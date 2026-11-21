// ─────────────────────────────────────────────────────────────
// All resume content lives here. Edit this file; components just render it.
// Set any list to [] (e.g. testimonials) to hide that section.
// ─────────────────────────────────────────────────────────────

import pattern1 from '../assets/images/background-1.png'
import pattern2 from '../assets/images/background-2.png'
// Other shots are in src/assets/images/photos (photo-1..5.jpg) if you want to swap.
// photo-4 is the bow tie shot, already cropped to remove other people at the edge.
import headshot from '../assets/images/photos/photo-4.jpg'

const resume = {
  name: 'Eduardo Ocampo',
  title: 'Junior Full-Stack Developer',
  copyrightYear: new Date().getFullYear(),

  // Hero photo (set `banner` to null for no photo).
  images: { banner: headshot, pattern1, pattern2 },

  contact: {
    email: 'eocampo52@gmail.com',
    phone: '773-368-3584',
    address: 'Chicago, IL',
  },

  // `icon` must be one of: facebook, instagram, twitter, skype, linkedin, dribbble, github
  // TODO: add a LinkedIn entry here if you want one.
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/soberDevEddie' },
  ],

  hero: {
    headline: 'Full-stack developer building real apps with React and Node',
    blurb:
      'Hands-on experience building production applications using React, Next.js, Node.js, and MongoDB. Currently studying Computer Science at Triton Community College. Proven ability to deliver both frontend-focused marketing sites and complex full-stack applications. Seeking freelance and contract development work.',
  },

  skills: [
    { group: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'TMDB API', 'GitHub API'] },
  ],

  availableFor: {
    heading: 'Available for',
    items: ['Freelance', 'Contract', 'Full-Stack'],
  },

  expertise: ['Frontend Development', 'Full-Stack Applications', 'Business Websites'],

  works: {
    eyebrow: 'Featured projects',
    heading: 'Things I’ve built',
    blurb: 'A mix of full-stack apps and client-facing sites, all deployed and live.',
    // `image` is optional — import a screenshot and add `image: shot` to show it.
    items: [
      {
        title: 'FlashStudy',
        description:
          'Study app where users create and organize flashcards by subject, track progress, and authenticate.',
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
        links: [{ label: 'Live site', href: 'https://flash-cards-orcin-nine.vercel.app/login' }],
      },
      {
        title: 'Nobleck Auto Repair',
        description:
          'Website for a Chicago auto repair shop with service details, customer reviews, tap-to-call and text actions, and a step-by-step appointment request form.',
        tech: ['Next.js', 'React'],
        links: [{ label: 'Live site', href: 'https://solo-mechanic.vercel.app/' }],
      },
      {
        title: 'GitHub Finder',
        description:
          'Search tool that displays GitHub user profiles and repositories using real-time GitHub API integration.',
        tech: ['React', 'GitHub API'],
        links: [{ label: 'Live site', href: 'https://github-finder-v2-nine.vercel.app/' }],
      },
      {
        title: 'Netflix Clone',
        description:
          'Streaming UI that fetches and displays movies and shows from the TMDB API in a Netflix-style layout.',
        tech: ['React', 'TMDB API'],
        links: [{ label: 'Live site', href: 'https://reelreact.netlify.app/' }],
      },
      {
        title: 'Alexa Flower Shop & Alex’s Hair Studio',
        description:
          'React landing and brochure sites for two local businesses, with service listings and booking information.',
        tech: ['React'],
        links: [
          { label: 'Flower Shop', href: 'https://alexa-website-silk.vercel.app/' },
          { label: 'Hair Studio', href: 'https://alexhairstudio-beta.vercel.app/' },
        ],
      },
    ],
  },

  testimonials: [],

  education: [
    {
      period: '2025 - present',
      title: 'Computer Science (in progress, part-time)',
      place: 'Triton Community College, Chicago, IL',
    },
    {
      period: '2024',
      title: 'Web Development Bootcamp',
      place: 'North Carolina State University',
    },
    {
      period: '2023',
      title: 'Associate’s Degree',
      place: 'Harold Washington College, Chicago, IL',
    },
  ],

  experience: [
    {
      period: '2023 - present',
      title: 'Service Porter',
      place: 'Alliance Service Group, Chicago, IL',
      bullets: [
        'Communicated with coworkers and managers on completed tasks and technical issues',
        'Kept operations seamless during high-volume periods',
        'Collaborated across departments to resolve customer issues and minimize downtime',
      ],
    },
    {
      period: '2021 - 2023',
      title: 'Sales Stylist',
      place: 'Levi’s, Chicago, IL',
      bullets: [
        'Met and exceeded individual sales goals through product knowledge and customer engagement',
      ],
    },
    {
      period: '2018 - 2021',
      title: 'Sales Associate',
      place: 'Honda City Chicago, Chicago, IL',
      bullets: [
        'Generated new business through relationship-building, marketing, and strategic follow-up',
        'Built communication and sales discipline through face-to-face interactions and lead nurturing',
      ],
    },
  ],

  contactSection: {
    heading: 'Available for freelance and contract full-stack work.',
    cta: 'Let’s talk.',
    blurb: 'Send me a message here or email me directly.',
  },
}

export default resume
