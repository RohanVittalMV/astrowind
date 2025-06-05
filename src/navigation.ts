import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
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
  ],
  socialLinks: [
  ],
  footNote: `
    Copyright © ${new Date().getFullYear()} Appaxon. All rights reserved.
  `,
};
