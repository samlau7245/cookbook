const { defaultTheme } = require('vuepress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  lang: 'zh-CN',
  title: 'Sam\'s 私人食谱',
  port: '8086',
  base: "/cookbook/",

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    nprogressPlugin(),
    // docsearchPlugin(),
  ],

  markdown: {
    lineNumbers: true,
  },

  theme: defaultTheme({
    logo: '/favicon.png',
    navbar: navbarFun(),
    sidebar: sidebarFun(),
  }),
}

function navbarFun() {
  return [
    { text: '首页', link: '/' },
    {
      text: '米面干腌', children: [
        {
          text: '米面类', children: [
            { text: '米类', link: '/principals/rices/' },
            { text: '面类', link: '/principals/wheaten/' },
          ]
        }
      ]
    },
  ];
}

function sidebarFun() {
  return {
    '/principals/rices/': [{
      text: '米类', collapsible: true,
      children: [
        '/principals/rices/rice.md',
      ],
    }],
    '/principals/wheaten/': [{
      text: '面类', collapsible: true,
      children: [
        '/principals/wheaten/wheaten.md',
      ],
    }],
  };
}

/*
module.exports = {
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),
}
*/