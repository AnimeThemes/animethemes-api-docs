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
          },
          {
            title: 'Year Index',
            to: '/year/index/'
          },
          {
            title: 'Year Show',
            to: '/year/show/'
          }
        ]
      },
      'announcement': {
        title: 'Resource',
        to: '/announcement',
        children: [
          {
            title: 'Show',
            to: '/announcement/show/',
          },
          {
            title: 'Index',
            to: '/announcement/index/'
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
      'balance': {
        title: 'Resource',
        to: '/balance',
        children: [
          {
            title: 'Show',
            to: '/balance/show/',
          },
          {
            title: 'Index',
            to: '/balance/index/'
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
      'image': {
        title: 'Resource',
        to: '/image',
        children: [
          {
            title: 'Show',
            to: '/image/show/',
          },
          {
            title: 'Index',
            to: '/image/index/'
          }
        ]
      },
      'resource': {
        title: 'Resource',
        to: '/resource',
        children: [
          {
            title: 'Show',
            to: '/resource/show/',
          },
          {
            title: 'Index',
            to: '/resource/index/'
          }
        ]
      },
      'series': {
        title: 'Resource',
        to: '/series',
        children: [
          {
            title: 'Show',
            to: '/series/show/',
          },
          {
            title: 'Index',
            to: '/series/index/'
          }
        ]
      },
      'song': {
        title: 'Resource',
        to: '/song',
        children: [
          {
            title: 'Show',
            to: '/song/show/',
          },
          {
            title: 'Index',
            to: '/song/index/'
          }
        ]
      },
      'synonym': {
        title: 'Resource',
        to: '/synonym',
        children: [
          {
            title: 'Show',
            to: '/synonym/show/',
          },
          {
            title: 'Index',
            to: '/synonym/index/'
          }
        ]
      },
      'theme': {
        title: 'Resource',
        to: '/theme',
        children: [
          {
            title: 'Show',
            to: '/theme/show/',
          },
          {
            title: 'Index',
            to: '/theme/index/'
          }
        ]
      },
      'transaction': {
        title: 'Resource',
        to: '/transaction',
        children: [
          {
            title: 'Show',
            to: '/transaction/show/',
          },
          {
            title: 'Index',
            to: '/transaction/index/'
          }
        ]
      },
      'video': {
        title: 'Resource',
        to: '/video',
        children: [
          {
            title: 'Show',
            to: '/video/show/',
          },
          {
            title: 'Index',
            to: '/video/index/'
          }
        ]
      },
      'wiki': {
        title: 'Global Search',
        to: '/search'
      }
    }
  },
  title: 'AnimeThemes'
}
