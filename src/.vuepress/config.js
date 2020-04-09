module.exports = {
  title: 'vNerve Docs',
  description: 'Docs for vNerve.',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'Inside', link: '/inside/' },
      { text: 'GitHub', link: '/github' }
    ],
    sidebar: {
      '/guide/': [''],
      '/github': ['/github'],
      '/inside/processor/supervisor/': [
        '',
        'communication',
        'income',
        'load-balance'
      ],
      '/inside/processor/worker/': [''],
      '/inside/processor/cns/': [''],
      '/inside/processor/effector/': ['']
    },
    displayAllHeaders: true,
    lastUpdated: '最后更新',
    docsRepo: 'vNerve/vNerve-Docs',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  }
}
