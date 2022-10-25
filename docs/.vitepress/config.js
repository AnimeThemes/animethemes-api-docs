import 'dotenv/config';

export default {
    base: process.env.VITEPRESS_BASE,
    lang: 'en-US',
    lastUpdated: true,
    title: 'AnimeThemes',
    description: 'AnimeThemes API Documentation',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/AnimeThemes/animethemes-api-docs/edit/main/docs/:path'
        },
        logo: {
            light: '/logo.svg',
            dark: '/logo-dark.svg',
        },
        siteTitle: 'AnimeThemes API Documentation',
        socialLinks: [
            { icon: 'discord', link: 'https://discordapp.com/invite/m9zbVyQ' },
            { icon: 'github', link: 'https://github.com/AnimeThemes' },
            { icon: 'twitter', link: 'https://twitter.com/AnimeThemesMoe' }
        ],
        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [
                    { text: 'JSON:API', link: '/jsonapi/' },
                    { text: 'Rate Limiting', link: '/ratelimiting/' },
                    { text: 'Authentication', link: '/authentication/' },
                    { text: 'Validation', link: '/validation/' },
                ]
            },
            {
                text: 'Anime',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/anime/' },
                    { text: 'Destroy', link: '/anime/destroy/' },
                    { text: 'Force Delete', link: '/anime/forceDelete/' },
                    { text: 'Index', link: '/anime/index/' },
                    { text: 'Show', link: '/anime/show/' },
                    { text: 'Store', link: '/anime/store/' },
                    { text: 'Update', link: '/anime/update/' },
                    { text: 'Year Index', link: '/animeyear/index/' },
                    { text: 'Year Show', link: '/animeyear/show/' },
                ]
            },
            {
                text: 'Anime Image',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/animeimage/' },
                    { text: 'Destroy', link: '/animeimage/destroy/' },
                    { text: 'Index', link: '/animeimage/index/' },
                    { text: 'Show', link: '/animeimage/show/' },
                    { text: 'Store', link: '/animeimage/store/' },
                ]
            },
            {
                text: 'Anime Synonym',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/animesynonym/' },
                    { text: 'Destroy', link: '/animesynonym/destroy/' },
                    { text: 'Force Delete', link: '/animesynonym/forceDelete/' },
                    { text: 'Index', link: '/animesynonym/index/' },
                    { text: 'Show', link: '/animesynonym/show/' },
                    { text: 'Store', link: '/animesynonym/store/' },
                    { text: 'Update', link: '/animesynonym/update/' },
                ]
            },
            {
                text: 'Anime Theme',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/animetheme/' },
                    { text: 'Destroy', link: '/animetheme/destroy/' },
                    { text: 'Force Delete', link: '/animetheme/forceDelete/' },
                    { text: 'Index', link: '/animetheme/index/' },
                    { text: 'Show', link: '/animetheme/show/' },
                    { text: 'Store', link: '/animetheme/store/' },
                    { text: 'Update', link: '/animetheme/update/' },
                ]
            },
            {
                text: 'Anime Theme Entry',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/animethemeentry/' },
                    { text: 'Destroy', link: '/animethemeentry/destroy/' },
                    { text: 'Force Delete', link: '/animethemeentry/forceDelete/' },
                    { text: 'Index', link: '/animethemeentry/index/' },
                    { text: 'Show', link: '/animethemeentry/show/' },
                    { text: 'Store', link: '/animethemeentry/store/' },
                    { text: 'Update', link: '/animethemeentry/update/' },
                ]
            },
            {
                text: 'Announcement',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/announcement/' },
                    { text: 'Destroy', link: '/announcement/destroy/' },
                    { text: 'Force Delete', link: '/announcement/forceDelete/' },
                    { text: 'Index', link: '/announcement/index/' },
                    { text: 'Show', link: '/announcement/show/' },
                    { text: 'Store', link: '/announcement/store/' },
                    { text: 'Update', link: '/announcement/update/' },
                ]
            },
            {
                text: 'Artist',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/artist/' },
                    { text: 'Destroy', link: '/artist/destroy/' },
                    { text: 'Force Delete', link: '/artist/forceDelete/' },
                    { text: 'Index', link: '/artist/index/' },
                    { text: 'Show', link: '/artist/show/' },
                    { text: 'Store', link: '/artist/store/' },
                    { text: 'Update', link: '/artist/update/' },
                ]
            },
            {
                text: 'Audio',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/audio/' },
                    { text: 'Destroy', link: '/audio/destroy/' },
                    { text: 'Force Delete', link: '/audio/forceDelete/' },
                    { text: 'Index', link: '/audio/index/' },
                    { text: 'Show', link: '/audio/show/' },
                    { text: 'Store', link: '/audio/store/' },
                    { text: 'Update', link: '/audio/update/' },
                ]
            },
            {
                text: 'Balance',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/balance/' },
                    { text: 'Destroy', link: '/balance/destroy/' },
                    { text: 'Force Delete', link: '/balance/forceDelete/' },
                    { text: 'Index', link: '/balance/index/' },
                    { text: 'Show', link: '/balance/show/' },
                    { text: 'Store', link: '/balance/store/' },
                    { text: 'Update', link: '/balance/update/' },
                ]
            },
            {
                text: 'Dump',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/dump/' },
                    { text: 'Destroy', link: '/dump/destroy/' },
                    { text: 'Force Delete', link: '/dump/forceDelete/' },
                    { text: 'Index', link: '/dump/index/' },
                    { text: 'Show', link: '/dump/show/' },
                    { text: 'Store', link: '/dump/store/' },
                    { text: 'Update', link: '/dump/update/' },
                ]
            },
            {
                text: 'Feature Flags',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/config/flags/' },
                    { text: 'Show', link: '/config/flags/show/' },
                ]
            },
            {
                text: 'Global Search',
                collapsible: true,
                items: [
                    { text: 'Search', link: '/search/' },
                ]
            },
            {
                text: 'Image',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/image/' },
                    { text: 'Destroy', link: '/image/destroy/' },
                    { text: 'Force Delete', link: '/image/forceDelete/' },
                    { text: 'Index', link: '/image/index/' },
                    { text: 'Show', link: '/image/show/' },
                    { text: 'Store', link: '/image/store/' },
                    { text: 'Update', link: '/image/update/' },
                ]
            },
            {
                text: 'Page',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/page/' },
                    { text: 'Destroy', link: '/page/destroy/' },
                    { text: 'Force Delete', link: '/page/forceDelete/' },
                    { text: 'Index', link: '/page/index/' },
                    { text: 'Show', link: '/page/show/' },
                    { text: 'Store', link: '/page/store/' },
                    { text: 'Update', link: '/page/update/' },
                ]
            },
            {
                text: 'Playlist',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/playlist/' },
                    { text: 'Destroy', link: '/playlist/destroy/' },
                    { text: 'Force Delete', link: '/playlist/forceDelete/' },
                    { text: 'Index', link: '/playlist/index/' },
                    { text: 'Show', link: '/playlist/show/' },
                    { text: 'Store', link: '/playlist/store/' },
                    { text: 'Update', link: '/playlist/update/' },
                ]
            },
            {
                text: 'Playlist Track',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/playlisttrack/' },
                    { text: 'Destroy', link: '/playlisttrack/destroy/' },
                    { text: 'Force Delete', link: '/playlisttrack/forceDelete/' },
                    { text: 'Index', link: '/playlisttrack/index/' },
                    { text: 'Show', link: '/playlisttrack/show/' },
                    { text: 'Store', link: '/playlisttrack/store/' },
                    { text: 'Update', link: '/playlisttrack/update/' },
                ]
            },
            {
                text: 'Resource',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/resource/' },
                    { text: 'Destroy', link: '/resource/destroy/' },
                    { text: 'Force Delete', link: '/resource/forceDelete/' },
                    { text: 'Index', link: '/resource/index/' },
                    { text: 'Show', link: '/resource/show/' },
                    { text: 'Store', link: '/resource/store/' },
                    { text: 'Update', link: '/resource/update/' },
                ]
            },
            {
                text: 'Series',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/series/' },
                    { text: 'Destroy', link: '/series/destroy/' },
                    { text: 'Force Delete', link: '/series/forceDelete/' },
                    { text: 'Index', link: '/series/index/' },
                    { text: 'Show', link: '/series/show/' },
                    { text: 'Store', link: '/series/store/' },
                    { text: 'Update', link: '/series/update/' },
                ]
            },
            {
                text: 'Song',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/song/' },
                    { text: 'Destroy', link: '/song/destroy/' },
                    { text: 'Force Delete', link: '/song/forceDelete/' },
                    { text: 'Index', link: '/song/index/' },
                    { text: 'Show', link: '/song/show/' },
                    { text: 'Store', link: '/song/store/' },
                    { text: 'Update', link: '/song/update/' },
                ]
            },
            {
                text: 'Studio',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/studio/' },
                    { text: 'Destroy', link: '/studio/destroy/' },
                    { text: 'Force Delete', link: '/studio/forceDelete/' },
                    { text: 'Index', link: '/studio/index/' },
                    { text: 'Show', link: '/studio/show/' },
                    { text: 'Store', link: '/studio/store/' },
                    { text: 'Update', link: '/studio/update/' },
                ]
            },
            {
                text: 'Transaction',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/transaction/' },
                    { text: 'Destroy', link: '/transaction/destroy/' },
                    { text: 'Force Delete', link: '/transaction/forceDelete/' },
                    { text: 'Index', link: '/transaction/index/' },
                    { text: 'Show', link: '/transaction/show/' },
                    { text: 'Store', link: '/transaction/store/' },
                    { text: 'Update', link: '/transaction/update/' },
                ]
            },
            {
                text: 'Wiki Config',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/config/wiki/' },
                    { text: 'Show', link: '/config/wiki/show/' },
                ]
            },
            {
                text: 'Video',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/video/' },
                    { text: 'Destroy', link: '/video/destroy/' },
                    { text: 'Force Delete', link: '/video/forceDelete/' },
                    { text: 'Index', link: '/video/index/' },
                    { text: 'Show', link: '/video/show/' },
                    { text: 'Store', link: '/video/store/' },
                    { text: 'Update', link: '/video/update/' },
                ]
            },
            {
                text: 'Video Script',
                collapsible: true,
                items: [
                    { text: 'Resource', link: '/videoscript/' },
                    { text: 'Destroy', link: '/videoscript/destroy/' },
                    { text: 'Force Delete', link: '/videoscript/forceDelete/' },
                    { text: 'Index', link: '/videoscript/index/' },
                    { text: 'Show', link: '/videoscript/show/' },
                    { text: 'Store', link: '/videoscript/store/' },
                    { text: 'Update', link: '/videoscript/update/' },
                ]
            },
        ]
    }
}
