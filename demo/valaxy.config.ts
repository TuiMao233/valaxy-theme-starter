import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-starter'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  lang: 'zh-CN',
  title: 'Valaxy Theme Starter',
  url: 'https://starter.valaxy.site/',
  author: {
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
    name: '云游君',
  },
  description: 'Valaxy Theme Starter Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 1050458482',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/YunYouJun',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/jizhideyunyoujun',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/yunyoujun/',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/yunyoujun/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信公众号',
      link: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/YunYouJun',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/elpsycn',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@yunyoujun.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  markdownIt: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: '注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: '警告',
      },
      info: {
        text: 'información',
      },
    },
  },

  comment: {
    enable: true,
    waline: {
      enable: true,
      serverURL: 'https://waline.yunyoujun.cn',
    },
    twikoo: {
      // enable: true,
      envId: 'https://twikoo.vercel.app',
    },
  },

  theme: 'starter',

  themeConfig: {
    // colors: {
    //   primary: 'red',
    // },

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/YunYouJun/valaxy-theme-starter',
      },
      {
        text: 'RSS',
        link: '/atom.xml',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/sGe4U4p4CK',
      },
      {
        text: 'Valaxy →',
        link: 'https://github.com/YunYouJun/valaxy',
      },
    ],

    footer: {
      since: 2016,
    },
  },
})
