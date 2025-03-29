import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];
export const socialLinks = [
  // {
  //   label: 'Bluesky',
  //   url: `https://bsky.app/profile/${config.bluesky}`,
  //   icon: 'bluesky',
  // },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin', // Ensure your icon library has this
  },
  {
    label: 'Phone',
    url: `tel:${config.phone}`,
    icon: 'phone', // Use a phone icon from your icon library
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'envelope', // Some libraries use 'envelope' instead of 'gmail'
  },
];

