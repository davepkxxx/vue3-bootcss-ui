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
          text: 'Forms',
          children: [
            { text: 'Form Control', link: '/components/input' },
            { text: 'Checks', link: '/components/check' },
          ],
        },
        {
          text: 'Components',
          children: [
            { text: 'Accordion', link: '/components/accordion' },
            { text: 'List Group', link: '/components/list' },
            { text: 'Navbar', link: '/components/nav' },
          ],
        },
      ],
    },
  },
});
