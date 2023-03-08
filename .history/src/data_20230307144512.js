import { getPermalink, getBlogPermalink } from './utils/permalinks';
// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About us',
      href: '#',
    },
    {
      text: 'Contact',
      href: '../src/pages/Contactus.jsx',
    },
    // {
    //   text: 'COC',
    //   href: getPermalink('/code-of-conduct'),
    // },
    // {
    //   text: 'Privacy policy',
    //   href: getPermalink('/privacy'),
    // },
  ],
  // actions: [
  //   { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  // ],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [{ text: 'Team', href: '#' }],
    // },
  ],
  secondaryLinks: [
    { text: 'Code of Conduct', href: getPermalink('/code-of-conduct') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Team', href: getPermalink('/Contactus') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/devhackiub' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/devhackiub' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/mfaeezshabbir/" target="_blank"> M Faeez Shabbir</a> · All rights reserved.
  `,
};
