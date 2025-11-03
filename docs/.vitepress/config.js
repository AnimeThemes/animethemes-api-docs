import 'dotenv/config';
import graphqlWarnPlugin from './theme/graphql-warn-plugin';

const referenceSidebarItems = [
    {
        text: 'Wiki',
        collapsed: true,
        items: [
            {
                text: 'Anime',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/anime/' },
                    { text: 'Destroy', link: '/wiki/anime/destroy/' },
                    { text: 'Force Delete', link: '/wiki/anime/forceDelete/' },
                    { text: 'Index', link: '/wiki/anime/index/' },
                    { text: 'Restore', link: '/wiki/anime/restore/' },
                    { text: 'Show', link: '/wiki/anime/show/' },
                    { text: 'Store', link: '/wiki/anime/store/' },
                    { text: 'Update', link: '/wiki/anime/update/' },
                    { text: 'Year Index', link: '/wiki/animeyear/index/' },
                    { text: 'Year Show', link: '/wiki/animeyear/show/' }
                ]
            },
            {
                text: 'Anime Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animeimage/' }
                ]
            },
            {
                text: 'Anime Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animeresource/' }
                ]
            },
            {
                text: 'Anime Series',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animeseries/' },
                    { text: 'Destroy', link: '/wiki/animeseries/destroy/' },
                    { text: 'Index', link: '/wiki/animeseries/index/' },
                    { text: 'Show', link: '/wiki/animeseries/show/' },
                    { text: 'Store', link: '/wiki/animeseries/store/' }
                ]
            },
            {
                text: 'Anime Studio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animestudio/' },
                    { text: 'Destroy', link: '/wiki/animestudio/destroy/' },
                    { text: 'Index', link: '/wiki/animestudio/index/' },
                    { text: 'Show', link: '/wiki/animestudio/show/' },
                    { text: 'Store', link: '/wiki/animestudio/store/' }
                ]
            },
            {
                text: 'Anime Synonym',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animesynonym/' },
                    { text: 'Destroy', link: '/wiki/animesynonym/destroy/' },
                    { text: 'Force Delete', link: '/wiki/animesynonym/forceDelete/' },
                    { text: 'Index', link: '/wiki/animesynonym/index/' },
                    { text: 'Restore', link: '/wiki/animesynonym/restore/' },
                    { text: 'Show', link: '/wiki/animesynonym/show/' },
                    { text: 'Store', link: '/wiki/animesynonym/store/' },
                    { text: 'Update', link: '/wiki/animesynonym/update/' }
                ]
            },
            {
                text: 'Anime Theme',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animetheme/' },
                    { text: 'Destroy', link: '/wiki/animetheme/destroy/' },
                    { text: 'Force Delete', link: '/wiki/animetheme/forceDelete/' },
                    { text: 'Index', link: '/wiki/animetheme/index/' },
                    { text: 'Restore', link: '/wiki/animetheme/restore/' },
                    { text: 'Show', link: '/wiki/animetheme/show/' },
                    { text: 'Store', link: '/wiki/animetheme/store/' },
                    { text: 'Update', link: '/wiki/animetheme/update/' }
                ]
            },
            {
                text: 'Anime Theme Entry',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animethemeentry/' },
                    { text: 'Destroy', link: '/wiki/animethemeentry/destroy/' },
                    { text: 'Force Delete', link: '/wiki/animethemeentry/forceDelete/' },
                    { text: 'Index', link: '/wiki/animethemeentry/index/' },
                    { text: 'Restore', link: '/wiki/animethemeentry/restore/' },
                    { text: 'Show', link: '/wiki/animethemeentry/show/' },
                    { text: 'Store', link: '/wiki/animethemeentry/store/' },
                    { text: 'Update', link: '/wiki/animethemeentry/update/' }
                ]
            },
            {
                text: 'Anime Theme Entry Video',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/animethemeentryvideo/' },
                    { text: 'Destroy', link: '/wiki/animethemeentryvideo/destroy/' },
                    { text: 'Index', link: '/wiki/animethemeentryvideo/index/' },
                    { text: 'Show', link: '/wiki/animethemeentryvideo/show/' },
                    { text: 'Store', link: '/wiki/animethemeentryvideo/store/' }
                ]
            },
            {
                text: 'Artist',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/artist/' },
                    { text: 'Destroy', link: '/wiki/artist/destroy/' },
                    { text: 'Force Delete', link: '/wiki/artist/forceDelete/' },
                    { text: 'Index', link: '/wiki/artist/index/' },
                    { text: 'Restore', link: '/wiki/artist/restore/' },
                    { text: 'Show', link: '/wiki/artist/show/' },
                    { text: 'Store', link: '/wiki/artist/store/' },
                    { text: 'Update', link: '/wiki/artist/update/' }
                ]
            },
            {
                text: 'Artist Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/artistimage/' }
                ]
            },
            {
                text: 'Artist Member',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/artistmember/' },
                    { text: 'Destroy', link: '/wiki/artistmember/destroy/' },
                    { text: 'Index', link: '/wiki/artistmember/index/' },
                    { text: 'Show', link: '/wiki/artistmember/show/' },
                    { text: 'Store', link: '/wiki/artistmember/store/' },
                    { text: 'Update', link: '/wiki/artistmember/update/' }
                ]
            },
            {
                text: 'Artist Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/artistresource/' }
                ]
            },
            {
                text: 'Artist Song',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/artistsong/' },
                    { text: 'Destroy', link: '/wiki/artistsong/destroy/' },
                    { text: 'Index', link: '/wiki/artistsong/index/' },
                    { text: 'Show', link: '/wiki/artistsong/show/' },
                    { text: 'Store', link: '/wiki/artistsong/store/' },
                    { text: 'Update', link: '/wiki/artistsong/update/' }
                ]
            },
            {
                text: 'Audio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/audio/' },
                    { text: 'Destroy', link: '/wiki/audio/destroy/' },
                    { text: 'Force Delete', link: '/wiki/audio/forceDelete/' },
                    { text: 'Index', link: '/wiki/audio/index/' },
                    { text: 'Restore', link: '/wiki/audio/restore/' },
                    { text: 'Show', link: '/wiki/audio/show/' },
                    { text: 'Store', link: '/wiki/audio/store/' },
                    { text: 'Update', link: '/wiki/audio/update/' }
                ]
            },
            {
                text: 'Group',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/group/' },
                    { text: 'Destroy', link: '/wiki/group/destroy/' },
                    { text: 'Force Delete', link: '/wiki/group/forceDelete/' },
                    { text: 'Index', link: '/wiki/group/index/' },
                    { text: 'Restore', link: '/wiki/group/restore/' },
                    { text: 'Show', link: '/wiki/group/show/' },
                    { text: 'Store', link: '/wiki/group/store/' },
                    { text: 'Update', link: '/wiki/group/update/' }
                ]
            },
            {
                text: 'Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/image/' },
                    { text: 'Destroy', link: '/wiki/image/destroy/' },
                    { text: 'Force Delete', link: '/wiki/image/forceDelete/' },
                    { text: 'Index', link: '/wiki/image/index/' },
                    { text: 'Restore', link: '/wiki/image/restore/' },
                    { text: 'Show', link: '/wiki/image/show/' },
                    { text: 'Store', link: '/wiki/image/store/' },
                    { text: 'Update', link: '/wiki/image/update/' }
                ]
            },
            {
                text: 'Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/resource/' },
                    { text: 'Destroy', link: '/wiki/resource/destroy/' },
                    { text: 'Force Delete', link: '/wiki/resource/forceDelete/' },
                    { text: 'Index', link: '/wiki/resource/index/' },
                    { text: 'Restore', link: '/wiki/resource/restore/' },
                    { text: 'Show', link: '/wiki/resource/show/' },
                    { text: 'Store', link: '/wiki/resource/store/' },
                    { text: 'Update', link: '/wiki/resource/update/' }
                ]
            },
            {
                text: 'Series',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/series/' },
                    { text: 'Destroy', link: '/wiki/series/destroy/' },
                    { text: 'Force Delete', link: '/wiki/series/forceDelete/' },
                    { text: 'Index', link: '/wiki/series/index/' },
                    { text: 'Restore', link: '/wiki/series/restore/' },
                    { text: 'Show', link: '/wiki/series/show/' },
                    { text: 'Store', link: '/wiki/series/store/' },
                    { text: 'Update', link: '/wiki/series/update/' }
                ]
            },
            {
                text: 'Song',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/song/' },
                    { text: 'Destroy', link: '/wiki/song/destroy/' },
                    { text: 'Force Delete', link: '/wiki/song/forceDelete/' },
                    { text: 'Index', link: '/wiki/song/index/' },
                    { text: 'Restore', link: '/wiki/song/restore/' },
                    { text: 'Show', link: '/wiki/song/show/' },
                    { text: 'Store', link: '/wiki/song/store/' },
                    { text: 'Update', link: '/wiki/song/update/' }
                ]
            },
            {
                text: 'Song Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/songresource/' }
                ]
            },
            {
                text: 'Studio',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/studio/' },
                    { text: 'Destroy', link: '/wiki/studio/destroy/' },
                    { text: 'Force Delete', link: '/wiki/studio/forceDelete/' },
                    { text: 'Index', link: '/wiki/studio/index/' },
                    { text: 'Restore', link: '/wiki/studio/restore/' },
                    { text: 'Show', link: '/wiki/studio/show/' },
                    { text: 'Store', link: '/wiki/studio/store/' },
                    { text: 'Update', link: '/wiki/studio/update/' }
                ]
            },
            {
                text: 'Studio Image',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/studioimage/' }
                ]
            },
            {
                text: 'Studio Resource',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/studioresource/' }
                ]
            },
            {
                text: 'Video',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/video/' },
                    { text: 'Destroy', link: '/wiki/video/destroy/' },
                    { text: 'Force Delete', link: '/wiki/video/forceDelete/' },
                    { text: 'Index', link: '/wiki/video/index/' },
                    { text: 'Restore', link: '/wiki/video/restore/' },
                    { text: 'Show', link: '/wiki/video/show/' },
                    { text: 'Store', link: '/wiki/video/store/' },
                    { text: 'Update', link: '/wiki/video/update/' }
                ]
            },
            {
                text: 'Video Script',
                collapsed: true,
                items: [
                    { text: 'Resource', link: '/wiki/videoscript/' },
                    { text: 'Destroy', link: '/wiki/videoscript/destroy/' },
                    { text: 'Force Delete', link: '/wiki/videoscript/forceDelete/' },
                    { text: 'Index', link: '/wiki/videoscript/index/' },
                    { text: 'Restore', link: '/wiki/videoscript/restore/' },
                    { text: 'Show', link: '/wiki/videoscript/show/' },
                    { text: 'Store', link: '/wiki/videoscript/store/' },
                    { text: 'Update', link: '/wiki/videoscript/update/' }
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
            '/wiki/': referenceSidebarItems,
        }
    },
    rewrites: {
        'jsonapi/intro/:path*': 'intro/:path*',
        'jsonapi/reference/:path*': ':path*',
    }
}
