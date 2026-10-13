export const profile = {
  name: 'Hashim Aziz',
  title: 'Project Manager & Scrum Master',
  summary:
    'Project Manager with a Software Engineering background and 5+ years in the software industry. ' +
    'I turn complex requirements into predictable delivery, leading distributed teams of up to 60 people ' +
    'and running projects from solution design through to handover.',
  email: 'hashimaziz46@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hashim-aziz',
  github: 'https://github.com/hashimaziz46',
  // Served from public/, so it respects the GitHub Pages base path
  resume: `${import.meta.env.BASE_URL}Hashim-Aziz-Resume.pdf`,
};

export const highlights = [
  { value: '5+', label: 'Years of industry experience' },
  { value: '50+', label: 'Clients & projects managed' },
  // Featured projects: $1.2M + $840K + $660K, plus one quarter each of SOMOS ($3.7M) and Toyota FS ($4.15M)
  { value: '$10M+', label: 'Revenue delivered' },
  { value: '60', label: 'Person team led' },
];

// Single source of truth for page sections, used by the floating nav and keyboard navigation
export const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'education', name: 'Education' },
  { id: 'resume', name: 'Resume' },
  { id: 'contact', name: 'Contact' },
];
