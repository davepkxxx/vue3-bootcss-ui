import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Bootstrap UI',
  themeConfig: {
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
            { text: 'Buttons', link: '/components/button' },
            { text: 'Dropdowns', link: '/components/dropdown' },
            { text: 'List Group', link: '/components/list' },
            { text: 'Navbar', link: '/components/nav' },
          ],
        },
      ],
    },
  },
});
