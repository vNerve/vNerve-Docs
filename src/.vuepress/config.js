module.exports = {
  title: 'vNerve Docs',
  description: 'Docs for vNerve.',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'Inside', link: '/inside/' }
    ],
    sidebar: {
      '/guide/': [''],
      '/inside/processor/supervisor/': [''],
      '/inside/processor/worker/': [''],
      '/inside/processor/cns/': [''],
      '/inside/processor/effector/': ['']
    },
    displayAllHeaders: true,
    lastUpdated: '最后更新',
    repo: 'dd-center/vNerveBiLiveReceptor',
    repoLabel: 'GitHub',
    docsRepo: 'dd-center/vNerve-Docs',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  }
}
