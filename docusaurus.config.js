// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MLOps Network',
  tagline: 'Building Future of AI/ML, One Pipeline at a Time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mlops.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MLOpsNetwork', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MLOpsNetwork/site/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MLOpsNetwork/site/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Buildcamp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'About MLOps Network', position: 'left'},
          {
            href: 'https://www.reddit.com/r/devopsbuilders/',
            label: 'Reddit',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Projects',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Get Started',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/devopsbuilders/',
              },
              {
                label: 'Newsletter',
                href: 'https://mlops.tv',
              },
              {
                label: 'Youtube Livestream',
                href: 'https://www.youtube.com/c/MLOpsTV',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Updates',
                to: '/blog',
              },
              {
                label: 'School of Devops',
                href: 'https://schoolofdevops.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devops Buildcamp by School of Devops.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
