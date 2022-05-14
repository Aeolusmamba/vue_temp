export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      description: '开始导航',
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: 'Body of the popover',
      position: 'bottom'
    }
  },
  {
    element: '#screenFul',
    popover: {
      title: i18n('driver.fullScreen'),
      description: '点击可以切换至全屏',
      position: 'left'
    }
  },
  {
    element: '#lang',
    popover: {
      title: i18n('driver.lang'),
      description: '点击切换语言',
      position: 'left'
    }
  },
  {
    element: '#avatar',
    popover: {
      title: i18n('driver.avatar'),
      description: '点击退出登录',
      position: 'left'
    }
  }
]
