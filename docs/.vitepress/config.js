import 'dotenv/config';

export default {
    base: process.env.VITEPRESS_BASE,
    lang: 'en-US',
    lastUpdated: true,
    title: 'AnimeThemes',
    titleTemplate: 'AnimeThemes GraphQL API Documentation',
    description: 'AnimeThemes GraphQL API Documentation',
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
                text: 'Guide',
                link: '/guide/intro/',
            },
            {
                text: 'GraphiQL',
                link: 'https://graphql.animethemes.moe/graphiql',
            },
            {
                text: 'AnimeThemes',
                link: 'https://animethemes.moe',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        { text: 'Rate Limiting', link: '/guide/intro/ratelimiting/' },
                        { text: 'Authentication', link: '/guide/intro/authentication/' },
                        { text: 'Validation', link: '/guide/intro/validation/' },
                    ]
                },
                {
                    text: 'GraphQL',
                    collapsed: false,
                    items: [
                        { text: 'Getting Started', link: '/guide/graphql/getting-started/' },
                        { text: 'Pagination', link: '/guide/graphql/pagination/' },
                        { text: 'Filtering', link: '/guide/graphql/filtering/' },
                        { text: 'Ordering', link: '/guide/graphql/ordering/' },
                        { text: 'Relationships', link: '/guide/graphql/relationships/' },
                    ],
                },
                {
                    text: 'Examples',
                    collapsed: false,
                    items: [
                        { text: 'Search', link: '/guide/examples/search/' },
                        { text: 'Filter by External Site', link: '/guide/examples/filter-by-external-site/' },
                    ],
                },
                {
                    text: 'Migrating',
                    collapsed: false,
                    items: [
                        { text: 'Migrating from REST API', link: '/guide/migrating/' },
                    ],
                }
            ],
        }
    }
}
