import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    //children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    children: '玖读',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '书城', href: '/page2' } },
      { name: 'item2', a: { children: '书架', href: '/page3' } },
      { name: 'item3', a: { children: '登录', href: '/session' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'logo.svg',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>玖读</p>
        <p>epub电子书阅读平台</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '综合阅读体验' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { children: '书城浏览' },
          content: { children: '每本书都有动画场景' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: { children: '加入书架' },
          content: { children: '用户看到感兴趣的书在登录后可以加入书架' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { children: '支持epub' },
          content: { children: '在每日的阅读中积累知识' },
        },
      },
    ],
  },
};

export const Content130DataSource = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '开始你的阅读之旅吧', className: 'title-h1' },
      {
        name: 'content',
        children:
          '在书城查找你感兴趣的书，感受svg动画体验',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '登录后即可加入书架开始阅读',
        className: 'title-content',
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '特别鸣谢', className: 'title-h1' }],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2019 同济大学软件学院web课程项目 made by 白皓月
      </span>
    ),
  },
};
