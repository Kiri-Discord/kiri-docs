
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/faq',
    component: ComponentCreator('/faq','a88'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy','a99'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','0d0'),
    routes: [
      {
        path: '/docs/basics/inviting',
        component: ComponentCreator('/docs/basics/inviting','993'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/basics/setup-moderation-logs',
        component: ComponentCreator('/docs/basics/setup-moderation-logs','b04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/basics/setup-permission',
        component: ComponentCreator('/docs/basics/setup-permission','c9c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/basics/setup-prefix',
        component: ComponentCreator('/docs/basics/setup-prefix','4d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contributing',
        component: ComponentCreator('/docs/contributing','ff2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/popular-guide/karaoke/introduction',
        component: ComponentCreator('/docs/popular-guide/karaoke/introduction','ea2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/popular-guide/karaoke/setting-up',
        component: ComponentCreator('/docs/popular-guide/karaoke/setting-up','504'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','5f1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
