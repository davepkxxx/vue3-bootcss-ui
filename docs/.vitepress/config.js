import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Bootstrap UI',
  themeConfig: {
    logo: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Data',
          children: [
            { text: 'List', link: '/components/list' },
          ],
        },
        {
          text: 'Navigation',
          children: [
            { text: 'Accordion', link: '/components/accordion' },
            { text: 'Navbar', link: '/components/nav' },
          ],
        },
      ],
    },
  },
});
