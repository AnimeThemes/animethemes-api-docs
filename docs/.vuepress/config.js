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
            title: 'Destroy',
            to: '/announcement/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/announcement/forceDelete/'
          },
          {
            title: 'Index',
            to: '/announcement/index/'
          },
          {
            title: 'Show',
            to: '/announcement/show/',
          },
          {
            title: 'Store',
            to: '/announcement/store/',
          },
          {
            title: 'Update',
            to: '/announcement/update/',
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
            title: 'Destroy',
            to: '/balance/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/balance/forceDelete/'
          },
          {
            title: 'Index',
            to: '/balance/index/'
          },
          {
            title: 'Show',
            to: '/balance/show/',
          },
          {
            title: 'Store',
            to: '/balance/store/',
          },
          {
            title: 'Update',
            to: '/balance/update/',
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
            title: 'Destroy',
            to: '/page/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/page/forceDelete/'
          },
          {
            title: 'Index',
            to: '/page/index/'
          },
          {
            title: 'Show',
            to: '/page/show/',
          },
          {
            title: 'Store',
            to: '/page/store/',
          },
          {
            title: 'Update',
            to: '/page/update/',
          }
        ]
      },
      'resource': {
        title: 'Resource',
        to: '/resource',
        children: [
          {
            title: 'Destroy',
            to: '/resource/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/resource/forceDelete/'
          },
          {
            title: 'Index',
            to: '/resource/index/'
          },
          {
            title: 'Show',
            to: '/resource/show/',
          },
          {
            title: 'Store',
            to: '/resource/store/',
          },
          {
            title: 'Update',
            to: '/resource/update/',
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
            title: 'Destroy',
            to: '/song/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/song/forceDelete/'
          },
          {
            title: 'Index',
            to: '/song/index/'
          },
          {
            title: 'Show',
            to: '/song/show/',
          },
          {
            title: 'Store',
            to: '/song/store/',
          },
          {
            title: 'Update',
            to: '/song/update/',
          }
        ]
      },
      'studio': {
        title: 'Resource',
        to: '/studio',
        children: [
          {
            title: 'Destroy',
            to: '/studio/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/studio/forceDelete/'
          },
          {
            title: 'Index',
            to: '/studio/index/'
          },
          {
            title: 'Show',
            to: '/studio/show/',
          },
          {
            title: 'Store',
            to: '/studio/store/',
          },
          {
            title: 'Update',
            to: '/studio/update/',
          }
        ]
      },
      'transaction': {
        title: 'Resource',
        to: '/transaction',
        children: [
          {
            title: 'Destroy',
            to: '/transaction/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/transaction/forceDelete/'
          },
          {
            title: 'Index',
            to: '/transaction/index/'
          },
          {
            title: 'Show',
            to: '/transaction/show/',
          },
          {
            title: 'Store',
            to: '/transaction/store/',
          },
          {
            title: 'Update',
            to: '/transaction/update/',
          }
        ]
      },
      'video': {
        title: 'Resource',
        to: '/video',
        children: [
          {
            title: 'Destroy',
            to: '/video/destroy/'
          },
          {
            title: 'Force Delete',
            to: '/video/forceDelete/'
          },
          {
            title: 'Index',
            to: '/video/index/'
          },
          {
            title: 'Show',
            to: '/video/show/',
          },
          {
            title: 'Store',
            to: '/video/store/',
          },
          {
            title: 'Update',
            to: '/video/update/',
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
