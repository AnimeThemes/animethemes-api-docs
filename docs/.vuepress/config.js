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
          },
          {
            title: 'Authentication',
            to: '/authentication'
          },
          {
            title: 'Validation',
            to: '/validation'
          }
        ]
      },
      'anime': {
        title: 'Resource',
        to: '/anime',
        children: [
          {
            title: 'Destroy',
            to: '/anime/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/anime/forceDelete/'
          },
          {
            title: 'Index',
            to: '/anime/index/'
          },
          {
            title: 'Show',
            to: '/anime/show/',
          },
          {
            title: 'Store',
            to: '/anime/store/',
          },
          {
            title: 'Update',
            to: '/anime/update/',
          },
          {
            title: 'Year Index',
            to: '/animeyear/index/'
          },
          {
            title: 'Year Show',
            to: '/animeyear/show/'
          },
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
            title: 'Destroy',
            to: '/artist/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/artist/forceDelete/'
          },
          {
            title: 'Index',
            to: '/artist/index/'
          },
          {
            title: 'Show',
            to: '/artist/show/',
          },
          {
            title: 'Store',
            to: '/artist/store/',
          },
          {
            title: 'Update',
            to: '/artist/update/',
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
      'page': {
        title: 'Resource',
        to: '/page',
        children: [
          {
            title: 'Show',
            to: '/page/show/',
          },
          {
            title: 'Index',
            to: '/page/index/'
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
            title: 'Destroy',
            to: '/series/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/series/forceDelete/'
          },
          {
            title: 'Index',
            to: '/series/index/'
          },
          {
            title: 'Show',
            to: '/series/show/',
          },
          {
            title: 'Store',
            to: '/series/store/',
          },
          {
            title: 'Update',
            to: '/series/update/',
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
