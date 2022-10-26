import 'dotenv/config';

export default {
    base: process.env.VITEPRESS_BASE,
    lang: 'en-US',
    lastUpdated: true,
    title: 'AnimeThemes',
    titleTemplate: 'AnimeThemes API Documentation',
    description: 'AnimeThemes API Documentation',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/AnimeThemes/animethemes-api-docs/edit/main/docs/:path'
        },
        logo: {
            light: '/logo.svg',
            dark: '/logo-dark.svg',
            alt: 'Logo'
        },
        siteTitle: 'AnimeThemes API Documentation',
        socialLinks: [
            { icon: 'discord', link: 'https://discordapp.com/invite/m9zbVyQ' },
            { icon: 'github', link: 'https://github.com/AnimeThemes' },
            { icon: 'twitter', link: 'https://twitter.com/AnimeThemesMoe' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © AnimeThemes'
        },
        nav: [
            {
                text: 'Intro',
                items: [
                    { text: 'Index', link: '/intro/' },
                    { text: 'JSON:API', link: '/intro/jsonapi/' },
                    { text: 'Rate Limiting', link: '/intro/ratelimiting/' },
                    { text: 'Authentication', link: '/intro/authentication/' },
                    { text: 'Validation', link: '/intro/validation/' }
                ],
            },
            {
                text: 'Admin',
                items: [
                    { text: 'Index', link: '/admin/' },
                    { text: 'Announcement', link: '/admin/announcement/' },
                    { text: 'Dump', link: '/admin/dump/' }
                ],
            },
            {
                text: 'Billing',
                items: [
                    { text: 'Index', link: '/billing/' },
                    { text: 'Balance', link: '/billing/balance/' },
                    { text: 'Transaction', link: '/billing/transaction/' }
                ]
            },
            {
                text: 'Config',
                items: [
                    { text: 'Index', link: '/config/' },
                    { text: 'Flags', link: '/config/flags/' },
                    { text: 'Wiki', link: '/config/wiki/' }
                ]
            },
            {
                text: 'Document',
                items: [
                    { text: 'Index', link: '/document/' },
                    { text: 'Page', link: '/document/page/' }
                ]
            },
            {
                text: 'List',
                items: [
                    { text: 'Index', link: '/list/' },
                    { text: 'Playlist', link: '/list/playlist/' },
                    { text: 'Playlist Track', link: '/list/playlisttrack/' }
                ]
            },
            {
                text: 'Wiki',
                items: [
                    { text: 'Index', link: '/wiki/' },
                    { text: 'Anime', link: '/wiki/anime/' },
                    { text: 'Anime Image', link: '/wiki/animeimage/' },
                    { text: 'Anime Synonym', link: '/wiki/animesynonym/' },
                    { text: 'Anime Theme', link: '/wiki/animetheme/' },
                    { text: 'Anime Theme Entry', link: '/wiki/animethemeentry/' },
                    { text: 'Artist', link: '/wiki/artist/' },
                    { text: 'Audio', link: '/wiki/audio/' },
                    { text: 'Image', link: '/wiki/image/' },
                    { text: 'Resource', link: '/wiki/resource/' },
                    { text: 'Series', link: '/wiki/series/' },
                    { text: 'Song', link: '/wiki/song/' },
                    { text: 'Studio', link: '/wiki/studio/' },
                    { text: 'Video', link: '/wiki/video/' },
                    { text: 'Video Script', link: '/wiki/videoscript/' }
                ]
            }
        ],
        sidebar: {
            '/admin/': [
                {
                    text: 'Announcement',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/admin/announcement/' },
                        { text: 'Destroy', link: '/admin/announcement/destroy/' },
                        { text: 'Force Delete', link: '/admin/announcement/forceDelete/' },
                        { text: 'Index', link: '/admin/announcement/index/' },
                        { text: 'Show', link: '/admin/announcement/show/' },
                        { text: 'Store', link: '/admin/announcement/store/' },
                        { text: 'Update', link: '/admin/announcement/update/' }
                    ]
                },
                {
                    text: 'Dump',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/admin/dump/' },
                        { text: 'Destroy', link: '/admin/dump/destroy/' },
                        { text: 'Force Delete', link: '/admin/dump/forceDelete/' },
                        { text: 'Index', link: '/admin/dump/index/' },
                        { text: 'Show', link: '/admin/dump/show/' },
                        { text: 'Store', link: '/admin/dump/store/' },
                        { text: 'Update', link: '/admin/dump/update/' }
                    ]
                }
            ],
            '/billing/': [
                {
                    text: 'Balance',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/billing/balance/' },
                        { text: 'Destroy', link: '/billing/balance/destroy/' },
                        { text: 'Force Delete', link: '/billing/balance/forceDelete/' },
                        { text: 'Index', link: '/billing/balance/index/' },
                        { text: 'Show', link: '/billing/balance/show/' },
                        { text: 'Store', link: '/billing/balance/store/' },
                        { text: 'Update', link: '/billing/balance/update/' }
                    ]
                },
                {
                    text: 'Transaction',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/billing/transaction/' },
                        { text: 'Destroy', link: '/billing/transaction/destroy/' },
                        { text: 'Force Delete', link: '/billing/transaction/forceDelete/' },
                        { text: 'Index', link: '/billing/transaction/index/' },
                        { text: 'Show', link: '/billing/transaction/show/' },
                        { text: 'Store', link: '/billing/transaction/store/' },
                        { text: 'Update', link: '/billing/transaction/update/' }
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Feature Flags',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/config/flags/' },
                        { text: 'Show', link: '/config/flags/show/' }
                    ]
                },
                {
                    text: 'Wiki Config',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/config/wiki/' },
                        { text: 'Show', link: '/config/wiki/show/' }
                    ]
                }
            ],
            '/document/': [
                {
                    text: 'Page',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/document/page/' },
                        { text: 'Destroy', link: '/document/page/destroy/' },
                        { text: 'Force Delete', link: '/document/page/forceDelete/' },
                        { text: 'Index', link: '/document/page/index/' },
                        { text: 'Show', link: '/document/page/show/' },
                        { text: 'Store', link: '/document/page/store/' },
                        { text: 'Update', link: '/document/page/update/' }
                    ]
                }
            ],
            '/intro/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    items: [
                        { text: 'JSON:API', link: '/intro/jsonapi/' },
                        { text: 'Rate Limiting', link: '/intro/ratelimiting/' },
                        { text: 'Authentication', link: '/intro/authentication/' },
                        { text: 'Validation', link: '/intro/validation/' }
                    ]
                }
            ],
            '/list/': [
                {
                    text: 'Playlist',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/list/playlist/' },
                        { text: 'Destroy', link: '/list/playlist/destroy/' },
                        { text: 'Force Delete', link: '/list/playlist/forceDelete/' },
                        { text: 'Index', link: '/list/playlist/index/' },
                        { text: 'Show', link: '/list/playlist/show/' },
                        { text: 'Store', link: '/list/playlist/store/' },
                        { text: 'Update', link: '/list/playlist/update/' }
                    ]
                },
                {
                    text: 'Playlist Track',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/list/playlisttrack/' },
                        { text: 'Destroy', link: '/list/playlisttrack/destroy/' },
                        { text: 'Force Delete', link: '/list/playlisttrack/forceDelete/' },
                        { text: 'Index', link: '/list/playlisttrack/index/' },
                        { text: 'Show', link: '/list/playlisttrack/show/' },
                        { text: 'Store', link: '/list/playlisttrack/store/' },
                        { text: 'Update', link: '/list/playlisttrack/update/' }
                    ]
                }
            ],
            '/wiki/': [
                {
                    text: 'Anime',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/anime/' },
                        { text: 'Destroy', link: '/wiki/anime/destroy/' },
                        { text: 'Force Delete', link: '/wiki/anime/forceDelete/' },
                        { text: 'Index', link: '/wiki/anime/index/' },
                        { text: 'Show', link: '/wiki/anime/show/' },
                        { text: 'Store', link: '/wiki/anime/store/' },
                        { text: 'Update', link: '/wiki/anime/update/' },
                        { text: 'Year Index', link: '/wiki/animeyear/index/' },
                        { text: 'Year Show', link: '/wiki/animeyear/show/' }
                    ]
                },
                {
                    text: 'Anime Image',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/animeimage/' },
                        { text: 'Destroy', link: '/wiki/animeimage/destroy/' },
                        { text: 'Index', link: '/wiki/animeimage/index/' },
                        { text: 'Show', link: '/wiki/animeimage/show/' },
                        { text: 'Store', link: '/wiki/animeimage/store/' }
                    ]
                },
                {
                    text: 'Anime Synonym',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/animesynonym/' },
                        { text: 'Destroy', link: '/wiki/animesynonym/destroy/' },
                        { text: 'Force Delete', link: '/wiki/animesynonym/forceDelete/' },
                        { text: 'Index', link: '/wiki/animesynonym/index/' },
                        { text: 'Show', link: '/wiki/animesynonym/show/' },
                        { text: 'Store', link: '/wiki/animesynonym/store/' },
                        { text: 'Update', link: '/wiki/animesynonym/update/' }
                    ]
                },
                {
                    text: 'Anime Theme',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/animetheme/' },
                        { text: 'Destroy', link: '/wiki/animetheme/destroy/' },
                        { text: 'Force Delete', link: '/wiki/animetheme/forceDelete/' },
                        { text: 'Index', link: '/wiki/animetheme/index/' },
                        { text: 'Show', link: '/wiki/animetheme/show/' },
                        { text: 'Store', link: '/wiki/animetheme/store/' },
                        { text: 'Update', link: '/wiki/animetheme/update/' }
                    ]
                },
                {
                    text: 'Anime Theme Entry',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/animethemeentry/' },
                        { text: 'Destroy', link: '/wiki/animethemeentry/destroy/' },
                        { text: 'Force Delete', link: '/wiki/animethemeentry/forceDelete/' },
                        { text: 'Index', link: '/wiki/animethemeentry/index/' },
                        { text: 'Show', link: '/wiki/animethemeentry/show/' },
                        { text: 'Store', link: '/wiki/animethemeentry/store/' },
                        { text: 'Update', link: '/wiki/animethemeentry/update/' }
                    ]
                },
                {
                    text: 'Artist',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/artist/' },
                        { text: 'Destroy', link: '/wiki/artist/destroy/' },
                        { text: 'Force Delete', link: '/wiki/artist/forceDelete/' },
                        { text: 'Index', link: '/wiki/artist/index/' },
                        { text: 'Show', link: '/wiki/artist/show/' },
                        { text: 'Store', link: '/wiki/artist/store/' },
                        { text: 'Update', link: '/wiki/artist/update/' }
                    ]
                },
                {
                    text: 'Audio',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/audio/' },
                        { text: 'Destroy', link: '/wiki/audio/destroy/' },
                        { text: 'Force Delete', link: '/wiki/audio/forceDelete/' },
                        { text: 'Index', link: '/wiki/audio/index/' },
                        { text: 'Show', link: '/wiki/audio/show/' },
                        { text: 'Store', link: '/wiki/audio/store/' },
                        { text: 'Update', link: '/wiki/audio/update/' }
                    ]
                },
                {
                    text: 'Global Search',
                    collapsible: true,
                    items: [
                        { text: 'Search', link: '/wiki/search/' }
                    ]
                },
                {
                    text: 'Image',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/image/' },
                        { text: 'Destroy', link: '/wiki/image/destroy/' },
                        { text: 'Force Delete', link: '/wiki/image/forceDelete/' },
                        { text: 'Index', link: '/wiki/image/index/' },
                        { text: 'Show', link: '/wiki/image/show/' },
                        { text: 'Store', link: '/wiki/image/store/' },
                        { text: 'Update', link: '/wiki/image/update/' }
                    ]
                },
                {
                    text: 'Resource',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/resource/' },
                        { text: 'Destroy', link: '/wiki/resource/destroy/' },
                        { text: 'Force Delete', link: '/wiki/resource/forceDelete/' },
                        { text: 'Index', link: '/wiki/resource/index/' },
                        { text: 'Show', link: '/wiki/resource/show/' },
                        { text: 'Store', link: '/wiki/resource/store/' },
                        { text: 'Update', link: '/wiki/resource/update/' }
                    ]
                },
                {
                    text: 'Series',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/series/' },
                        { text: 'Destroy', link: '/wiki/series/destroy/' },
                        { text: 'Force Delete', link: '/wiki/series/forceDelete/' },
                        { text: 'Index', link: '/wiki/series/index/' },
                        { text: 'Show', link: '/wiki/series/show/' },
                        { text: 'Store', link: '/wiki/series/store/' },
                        { text: 'Update', link: '/wiki/series/update/' }
                    ]
                },
                {
                    text: 'Song',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/song/' },
                        { text: 'Destroy', link: '/wiki/song/destroy/' },
                        { text: 'Force Delete', link: '/wiki/song/forceDelete/' },
                        { text: 'Index', link: '/wiki/song/index/' },
                        { text: 'Show', link: '/wiki/song/show/' },
                        { text: 'Store', link: '/wiki/song/store/' },
                        { text: 'Update', link: '/wiki/song/update/' }
                    ]
                },
                {
                    text: 'Studio',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/studio/' },
                        { text: 'Destroy', link: '/wiki/studio/destroy/' },
                        { text: 'Force Delete', link: '/wiki/studio/forceDelete/' },
                        { text: 'Index', link: '/wiki/studio/index/' },
                        { text: 'Show', link: '/wiki/studio/show/' },
                        { text: 'Store', link: '/wiki/studio/store/' },
                        { text: 'Update', link: '/wiki/studio/update/' }
                    ]
                },
                {
                    text: 'Video',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/video/' },
                        { text: 'Destroy', link: '/wiki/video/destroy/' },
                        { text: 'Force Delete', link: '/wiki/video/forceDelete/' },
                        { text: 'Index', link: '/wiki/video/index/' },
                        { text: 'Show', link: '/wiki/video/show/' },
                        { text: 'Store', link: '/wiki/video/store/' },
                        { text: 'Update', link: '/wiki/video/update/' }
                    ]
                },
                {
                    text: 'Video Script',
                    collapsible: true,
                    items: [
                        { text: 'Resource', link: '/wiki/videoscript/' },
                        { text: 'Destroy', link: '/wiki/videoscript/destroy/' },
                        { text: 'Force Delete', link: '/wiki/videoscript/forceDelete/' },
                        { text: 'Index', link: '/wiki/videoscript/index/' },
                        { text: 'Show', link: '/wiki/videoscript/show/' },
                        { text: 'Store', link: '/wiki/videoscript/store/' },
                        { text: 'Update', link: '/wiki/videoscript/update/' }
                    ]
                }
            ]
        }
    }
}
