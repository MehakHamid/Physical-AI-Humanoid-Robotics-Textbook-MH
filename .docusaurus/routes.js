import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a9a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '18f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a7b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '8a0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '449'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f71'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '146'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a45'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6e0'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '708'),
            routes: [
              {
                path: '/hardware',
                component: ComponentCreator('/hardware', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '283'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/module01',
                component: ComponentCreator('/module01', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/module02',
                component: ComponentCreator('/module02', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/module03',
                component: ComponentCreator('/module03', 'c1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/module04',
                component: ComponentCreator('/module04', '43f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '134'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
