import 'dotenv/config';
import graphqlWarnPlugin from './theme/graphql-warn-plugin';

const referenceSidebarItems = [
    {
        text: 'Content',
        collapsed: true,
        items: [
            {
                text: 'Anime',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/anime/' },
                    { text: 'Destroy', link: '/content/anime/destroy/' },
                    { text: 'Force Delete', link: '/content/anime/forceDelete/' },
                    { text: 'Index', link: '/content/anime/index/' },
                    { text: 'Restore', link: '/content/anime/restore/' },
                    { text: 'Show', link: '/content/anime/show/' },
                    { text: 'Store', link: '/content/anime/store/' },
                    { text: 'Update', link: '/content/anime/update/' },
                    { text: 'Year Index', link: '/content/animeyear/index/' },
                    { text: 'Year Show', link: '/content/animeyear/show/' }
                ]
            },
            {
                text: 'Anime Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animeimage/' }
                ]
            },
            {
                text: 'Anime Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animeresource/' }
                ]
            },
            {
                text: 'Anime Series',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animeseries/' },
                    { text: 'Destroy', link: '/content/animeseries/destroy/' },
                    { text: 'Index', link: '/content/animeseries/index/' },
                    { text: 'Show', link: '/content/animeseries/show/' },
                    { text: 'Store', link: '/content/animeseries/store/' }
                ]
            },
            {
                text: 'Anime Studio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animestudio/' },
                    { text: 'Destroy', link: '/content/animestudio/destroy/' },
                    { text: 'Index', link: '/content/animestudio/index/' },
                    { text: 'Show', link: '/content/animestudio/show/' },
                    { text: 'Store', link: '/content/animestudio/store/' }
                ]
            },
            {
                text: 'Anime Synonym',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animesynonym/' },
                    { text: 'Destroy', link: '/content/animesynonym/destroy/' },
                    { text: 'Force Delete', link: '/content/animesynonym/forceDelete/' },
                    { text: 'Index', link: '/content/animesynonym/index/' },
                    { text: 'Restore', link: '/content/animesynonym/restore/' },
                    { text: 'Show', link: '/content/animesynonym/show/' },
                    { text: 'Store', link: '/content/animesynonym/store/' },
                    { text: 'Update', link: '/content/animesynonym/update/' }
                ]
            },
            {
                text: 'Anime Theme',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animetheme/' },
                    { text: 'Destroy', link: '/content/animetheme/destroy/' },
                    { text: 'Force Delete', link: '/content/animetheme/forceDelete/' },
                    { text: 'Index', link: '/content/animetheme/index/' },
                    { text: 'Restore', link: '/content/animetheme/restore/' },
                    { text: 'Show', link: '/content/animetheme/show/' },
                    { text: 'Store', link: '/content/animetheme/store/' },
                    { text: 'Update', link: '/content/animetheme/update/' }
                ]
            },
            {
                text: 'Anime Theme Entry',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animethemeentry/' },
                    { text: 'Destroy', link: '/content/animethemeentry/destroy/' },
                    { text: 'Force Delete', link: '/content/animethemeentry/forceDelete/' },
                    { text: 'Index', link: '/content/animethemeentry/index/' },
                    { text: 'Restore', link: '/content/animethemeentry/restore/' },
                    { text: 'Show', link: '/content/animethemeentry/show/' },
                    { text: 'Store', link: '/content/animethemeentry/store/' },
                    { text: 'Update', link: '/content/animethemeentry/update/' }
                ]
            },
            {
                text: 'Anime Theme Entry Video',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/animethemeentryvideo/' },
                    { text: 'Destroy', link: '/content/animethemeentryvideo/destroy/' },
                    { text: 'Index', link: '/content/animethemeentryvideo/index/' },
                    { text: 'Show', link: '/content/animethemeentryvideo/show/' },
                    { text: 'Store', link: '/content/animethemeentryvideo/store/' }
                ]
            },
            {
                text: 'Artist',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/artist/' },
                    { text: 'Destroy', link: '/content/artist/destroy/' },
                    { text: 'Force Delete', link: '/content/artist/forceDelete/' },
                    { text: 'Index', link: '/content/artist/index/' },
                    { text: 'Restore', link: '/content/artist/restore/' },
                    { text: 'Show', link: '/content/artist/show/' },
                    { text: 'Store', link: '/content/artist/store/' },
                    { text: 'Update', link: '/content/artist/update/' }
                ]
            },
            {
                text: 'Artist Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/artistimage/' }
                ]
            },
            {
                text: 'Artist Member',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/artistmember/' },
                    { text: 'Destroy', link: '/content/artistmember/destroy/' },
                    { text: 'Index', link: '/content/artistmember/index/' },
                    { text: 'Show', link: '/content/artistmember/show/' },
                    { text: 'Store', link: '/content/artistmember/store/' },
                    { text: 'Update', link: '/content/artistmember/update/' }
                ]
            },
            {
                text: 'Artist Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/artistresource/' }
                ]
            },
            {
                text: 'Artist Song',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/artistsong/' },
                    { text: 'Destroy', link: '/content/artistsong/destroy/' },
                    { text: 'Index', link: '/content/artistsong/index/' },
                    { text: 'Show', link: '/content/artistsong/show/' },
                    { text: 'Store', link: '/content/artistsong/store/' },
                    { text: 'Update', link: '/content/artistsong/update/' }
                ]
            },
            {
                text: 'Audio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/audio/' },
                    { text: 'Destroy', link: '/content/audio/destroy/' },
                    { text: 'Force Delete', link: '/content/audio/forceDelete/' },
                    { text: 'Index', link: '/content/audio/index/' },
                    { text: 'Restore', link: '/content/audio/restore/' },
                    { text: 'Show', link: '/content/audio/show/' },
                    { text: 'Store', link: '/content/audio/store/' },
                    { text: 'Update', link: '/content/audio/update/' }
                ]
            },
            {
                text: 'Group',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/group/' },
                    { text: 'Destroy', link: '/content/group/destroy/' },
                    { text: 'Force Delete', link: '/content/group/forceDelete/' },
                    { text: 'Index', link: '/content/group/index/' },
                    { text: 'Restore', link: '/content/group/restore/' },
                    { text: 'Show', link: '/content/group/show/' },
                    { text: 'Store', link: '/content/group/store/' },
                    { text: 'Update', link: '/content/group/update/' }
                ]
            },
            {
                text: 'Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/image/' },
                    { text: 'Destroy', link: '/content/image/destroy/' },
                    { text: 'Force Delete', link: '/content/image/forceDelete/' },
                    { text: 'Index', link: '/content/image/index/' },
                    { text: 'Restore', link: '/content/image/restore/' },
                    { text: 'Show', link: '/content/image/show/' },
                    { text: 'Store', link: '/content/image/store/' },
                    { text: 'Update', link: '/content/image/update/' }
                ]
            },
            {
                text: 'Performance',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/performance/' },
                    { text: 'Index', link: '/content/performance/index/' },
                    { text: 'Show', link: '/content/performance/show/' },
                ]
            },
            {
                text: 'Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/resource/' },
                    { text: 'Destroy', link: '/content/resource/destroy/' },
                    { text: 'Force Delete', link: '/content/resource/forceDelete/' },
                    { text: 'Index', link: '/content/resource/index/' },
                    { text: 'Restore', link: '/content/resource/restore/' },
                    { text: 'Show', link: '/content/resource/show/' },
                    { text: 'Store', link: '/content/resource/store/' },
                    { text: 'Update', link: '/content/resource/update/' }
                ]
            },
            {
                text: 'Series',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/series/' },
                    { text: 'Destroy', link: '/content/series/destroy/' },
                    { text: 'Force Delete', link: '/content/series/forceDelete/' },
                    { text: 'Index', link: '/content/series/index/' },
                    { text: 'Restore', link: '/content/series/restore/' },
                    { text: 'Show', link: '/content/series/show/' },
                    { text: 'Store', link: '/content/series/store/' },
                    { text: 'Update', link: '/content/series/update/' }
                ]
            },
            {
                text: 'Song',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/song/' },
                    { text: 'Destroy', link: '/content/song/destroy/' },
                    { text: 'Force Delete', link: '/content/song/forceDelete/' },
                    { text: 'Index', link: '/content/song/index/' },
                    { text: 'Restore', link: '/content/song/restore/' },
                    { text: 'Show', link: '/content/song/show/' },
                    { text: 'Store', link: '/content/song/store/' },
                    { text: 'Update', link: '/content/song/update/' }
                ]
            },
            {
                text: 'Song Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/songresource/' }
                ]
            },
            {
                text: 'Studio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/studio/' },
                    { text: 'Destroy', link: '/content/studio/destroy/' },
                    { text: 'Force Delete', link: '/content/studio/forceDelete/' },
                    { text: 'Index', link: '/content/studio/index/' },
                    { text: 'Restore', link: '/content/studio/restore/' },
                    { text: 'Show', link: '/content/studio/show/' },
                    { text: 'Store', link: '/content/studio/store/' },
                    { text: 'Update', link: '/content/studio/update/' }
                ]
            },
            {
                text: 'Studio Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/studioimage/' }
                ]
            },
            {
                text: 'Studio Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/studioresource/' }
                ]
            },
            {
                text: 'Video',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/video/' },
                    { text: 'Destroy', link: '/content/video/destroy/' },
                    { text: 'Force Delete', link: '/content/video/forceDelete/' },
                    { text: 'Index', link: '/content/video/index/' },
                    { text: 'Restore', link: '/content/video/restore/' },
                    { text: 'Show', link: '/content/video/show/' },
                    { text: 'Store', link: '/content/video/store/' },
                    { text: 'Update', link: '/content/video/update/' }
                ]
            },
            {
                text: 'Video Script',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/content/videoscript/' },
                    { text: 'Destroy', link: '/content/videoscript/destroy/' },
                    { text: 'Force Delete', link: '/content/videoscript/forceDelete/' },
                    { text: 'Index', link: '/content/videoscript/index/' },
                    { text: 'Restore', link: '/content/videoscript/restore/' },
                    { text: 'Show', link: '/content/videoscript/show/' },
                    { text: 'Store', link: '/content/videoscript/store/' },
                    { text: 'Update', link: '/content/videoscript/update/' }
                ]
            }
        ]
    },
    {
        text: 'Search',
        collapsed: true,
        items: [
            {
                text: 'Index',
                link: '/search/',
            }
        ]
    },
    {
        text: 'Admin',
        collapsed: true,
        items: [
            {
                text: 'Announcement',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/admin/announcement/' },
                    { text: 'Destroy', link: '/admin/announcement/destroy/' },
                    { text: 'Index', link: '/admin/announcement/index/' },
                    { text: 'Show', link: '/admin/announcement/show/' },
                    { text: 'Store', link: '/admin/announcement/store/' },
                    { text: 'Update', link: '/admin/announcement/update/' }
                ]
            },
            {
                text: 'Dump',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/admin/dump/' },
                    { text: 'Destroy', link: '/admin/dump/destroy/' },
                    { text: 'Index', link: '/admin/dump/index/' },
                    { text: 'Show', link: '/admin/dump/show/' },
                    { text: 'Store', link: '/admin/dump/store/' },
                    { text: 'Update', link: '/admin/dump/update/' }
                ]
            },
            {
                text: 'Feature',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/admin/feature/' },
                    { text: 'Index', link: '/admin/feature/index/' },
                    { text: 'Show', link: '/admin/feature/show/' },
                    { text: 'Update', link: '/admin/feature/update/' }
                ]
            },
            {
                text: 'Featured Theme',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/admin/featuredtheme/' },
                    { text: 'Current', link: '/admin/featuredtheme/current/' },
                    { text: 'Destroy', link: '/admin/featuredtheme/destroy/' },
                    { text: 'Index', link: '/admin/featuredtheme/index/' },
                    { text: 'Show', link: '/admin/featuredtheme/show/' },
                    { text: 'Store', link: '/admin/featuredtheme/store/' },
                    { text: 'Update', link: '/admin/featuredtheme/update/' }
                ]
            },
        ]
    },
    {
        text: 'Auth',
        collapsed: true,
        items: [
            {
                text: 'Me',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/auth/user/me/' },
                    { text: 'Show', link: '/auth/user/me/show/' },
                    { text: 'Playlists', link: '/auth/user/me/playlist/' }
                ]
            },
            {
                text: 'Permission',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/auth/permission/' }
                ]
            },
            {
                text: 'Role',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/auth/role/' }
                ]
            },
            {
                text: 'User',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/auth/user/' }
                ]
            },
        ]
    },
    {
        text: 'Document',
        collapsed: true,
        items: [
            {
                text: 'Page',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/document/page/' },
                    { text: 'Destroy', link: '/document/page/destroy/' },
                    { text: 'Force Delete', link: '/document/page/forceDelete/' },
                    { text: 'Index', link: '/document/page/index/' },
                    { text: 'Restore', link: '/document/page/restore/' },
                    { text: 'Show', link: '/document/page/show/' },
                    { text: 'Store', link: '/document/page/store/' },
                    { text: 'Update', link: '/document/page/update/' }
                ]
            },
        ]
    },
    {
        text: 'List',
        collapsed: true,
        items: [
            {
                text: 'Playlist',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/list/playlist/' },
                    { text: 'Destroy', link: '/list/playlist/destroy/' },
                    { text: 'Index', link: '/list/playlist/index/' },
                    { text: 'Show', link: '/list/playlist/show/' },
                    { text: 'Store', link: '/list/playlist/store/' },
                    { text: 'Update', link: '/list/playlist/update/' },
                    { text: 'Forward Index', link: '/list/playlist/forward/' },
                    { text: 'Backward Index', link: '/list/playlist/backward/' }
                ]
            },
            {
                text: 'Playlist Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/list/playlistimage/' }
                ]
            },
            {
                text: 'Playlist Track',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/list/playlist/track/' },
                    { text: 'Destroy', link: '/list/playlist/track/destroy/' },
                    { text: 'Index', link: '/list/playlist/track/index/' },
                    { text: 'Show', link: '/list/playlist/track/show/' },
                    { text: 'Store', link: '/list/playlist/track/store/' },
                    { text: 'Update', link: '/list/playlist/track/update/' },
                    { text: 'Forward Index', link: '/list/playlist/track/forward/' },
                    { text: 'Backward Index', link: '/list/playlist/track/backward/' }
                ]
            },
        ]
    },
];

export default {
    vite: {
        plugins: [graphqlWarnPlugin()],
    },
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
        siteTitle: 'AnimeThemes',
        socialLinks: [
            { icon: 'discord', link: 'https://discordapp.com/invite/m9zbVyQ' },
            { icon: 'github', link: 'https://github.com/AnimeThemes' },
            { icon: 'twitter', link: 'https://x.com/AnimeThemesMoe' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © AnimeThemes'
        },
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'JSON:API',
                items: [
                    {
                        text: 'Getting Started',
                        link: '/intro',
                    },
                    {
                        text: 'API Reference',
                        link: '/reference',
                    }
                ]
            },
            {
                text: 'GraphQL',
                items: [
                    {
                        text: 'Getting Started',
                        link: '/graphql/intro',
                    },
                    {
                        text: 'GraphiQL',
                        link: 'https://graphql.animethemes.moe/graphiql',
                    },
                    {
                        text: 'Sandbox',
                        link: 'https://graphql.animethemes.moe/sandbox',
                    },
                ]
            },
            {
                text: 'AnimeThemes',
                link: 'https://animethemes.moe',
            },
        ],
        sidebar: {
            '/graphql/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        { text: 'Rate Limiting', link: '/graphql/intro/ratelimiting/' },
                    ]
                },
                {
                    text: 'Guide',
                    collapsed: false,
                    items: [
                        { text: 'Getting Started', link: '/graphql/guide/getting-started/' },
                        { text: 'Pagination', link: '/graphql/guide/pagination/' },
                        { text: 'Filtering', link: '/graphql/guide/filtering/' },
                        { text: 'Sorting', link: '/graphql/guide/sorting/' },
                        { text: 'Relationships', link: '/graphql/guide/relationships/' },
                    ],
                },
                {
                    text: 'Examples',
                    collapsed: false,
                    items: [
                        { text: 'Search', link: '/graphql/examples/search/' },
                        { text: 'Filter by External Site', link: '/graphql/examples/filter-by-external-site/' },
                    ],
                },
                {
                    text: 'Migrating',
                    collapsed: false,
                    items: [
                        { text: 'Migrating from REST API', link: '/graphql/migrating/' },
                    ],
                }
            ],
            '/intro/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'JSON:API', link: '/intro/jsonapi/' },
                        { text: 'Rate Limiting', link: '/intro/ratelimiting/' },
                        { text: 'Authentication', link: '/intro/authentication/' },
                        { text: 'Validation', link: '/intro/validation/' }
                    ]
                },
            ],
            '/reference': referenceSidebarItems,
            '/admin/': referenceSidebarItems,
            '/auth/': referenceSidebarItems,
            '/document/': referenceSidebarItems,
            '/list/': referenceSidebarItems,
            '/search/': referenceSidebarItems,
            '/content/': referenceSidebarItems,
        }
    },
    rewrites: {
        'jsonapi/intro/:path*': 'intro/:path*',
        'jsonapi/reference/:path*': ':path*',
    }
}
