require('dotenv').config()

module.exports = {
  base: process.env.VUEPRESS_BASE,
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
          },
          {
            title: 'Rate Limiting',
            to: '/ratelimiting'
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
            to: '/animeyear/index/'
          },
          {
            title: 'Year Show',
            to: '/animeyear/show/'
          }
        ]
      },
      'animesynonym': {
        title: 'Resource',
        to: '/animesynonym',
        children: [
          {
            title: 'Show',
            to: '/animesynonym/show/',
          },
          {
            title: 'Index',
            to: '/animesynonym/index/'
          }
        ]
      },
      'animetheme': {
        title: 'Resource',
        to: '/animetheme',
        children: [
          {
            title: 'Show',
            to: '/animetheme/show/',
          },
          {
            title: 'Index',
            to: '/animetheme/index/'
          }
        ]
      },
      'animethemeentry': {
        title: 'Resource',
        to: '/animethemeentry',
        children: [
          {
            title: 'Show',
            to: '/animethemeentry/show/',
          },
          {
            title: 'Index',
            to: '/animethemeentry/index/'
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
      'configflags': {
        title: 'Resource',
        to: '/config/flags',
        children: [
          {
            title: 'Show',
            to: '/config/flags/show/',
          }
        ]
      },
      'configwiki': {
        title: 'Resource',
        to: '/config/wiki',
        children: [
          {
            title: 'Show',
            to: '/config/wiki/show/',
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
      'studio': {
        title: 'Resource',
        to: '/studio',
        children: [
          {
            title: 'Show',
            to: '/studio/show/',
          },
          {
            title: 'Index',
            to: '/studio/index/'
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
