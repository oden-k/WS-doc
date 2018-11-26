const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')


module.exports = {
  title: 'Preparation World skills',
  description: 'Side de documentation de Simon Renault pour les Olympiades des Métiers 2018',
  configureWebpack: {
    resolve: {
      alias: require('../aliases.config').webpack,
    },
  },
  markdown: {
    config: useMarkdownItVueExample,
  },
  themeConfig: {
    nav: [],
    sidebar: [
      '/',
      ['/pages/main','intro'],
      {
        title: 'Layout',
        collapsable: true,
        children: [
          ['/pages/layout/html','html'],
          ['/pages/layout/css','css'],
        ],
      },
      {
        title: 'Client-Side',
        collapsable: true,
        children: [
          ['/pages/client-side/helpers','helpers'],
          ['/pages/client-side/main','main'],
          ['/pages/client-side/components','components'],
        ],
      },
      {
        title: 'Server-Side',
        collapsable: true,
        children: [
          ['/pages/server-side/main','sujet']
        ],
      },
      
      

  
     
    ],
    searchMaxSuggestions: 25,
    lastUpdated: 'Last Updated', // string | boolean
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      [
        'meta',
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      ],
      [
        'link',
        {
          rel: 'apple-touch-icon',
          href: `/icons/apple-touch-icon-152x152.png`,
        },
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: `/style/main.css`,
        },
      ],
      [
        'link',
        {
          rel: 'mask-icon',
          href: '/icons/safari-pinned-tab.svg',
          color: '#3eaf7c',
        },
      ],
      [
        'meta',
        {
          name: 'msapplication-TileImage',
          content: '/icons/msapplication-icon-144x144.png',
        },
      ],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ],
    serviceWorker: true,
  },
}
