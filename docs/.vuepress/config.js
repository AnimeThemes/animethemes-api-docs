module.exports = {
  description: 'AnimeThemes API Documentation',
  theme: 'api',
  themeConfig: {
    sidebar: {
      'home': {
        title: 'Introduction',
        to: '/',
        children: [
          {
            title: 'JSON:API',
            to: '/jsonapi'
          }
        ]
      },
      'anime': {
        title: 'Resource',
        to: '/anime',
        children: [
          {
            title: 'Show',
            to: '/anime/show/',
          },
          {
            title: 'Index',
            to: '/anime/index/'
          }
        ]
      },
      'artist': {
        title: 'Resource',
        to: '/artist',
        children: [
          {
            title: 'Show',
            to: '/artist/show/',
          },
          {
            title: 'Index',
            to: '/artist/index/'
          }
        ]
      },
      'entry': {
        title: 'Resource',
        to: '/entry',
        children: [
          {
            title: 'Show',
            to: '/entry/show/',
          },
          {
            title: 'Index',
            to: '/entry/index/'
          }
        ]
      },
    }
  },
  title: 'AnimeThemes'
}
