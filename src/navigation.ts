import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Features',
      href: getPermalink('/#differentiators'),
    },
    {
      text: 'Use Cases',
      href: getPermalink('/#usecases'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Terms',
      href: getPermalink('/terms'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Sitemap', href: '/sitemap-0.xml' },
  ],
  socialLinks: [
  ],
  footNote: `
    Copyright © ${new Date().getFullYear()} Appaxon. All rights reserved.
  `,
};
