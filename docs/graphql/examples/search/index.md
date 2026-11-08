---
title: Global Search
---

# Global Search Query

---

The global search query returns a listing of resources that match a given search term.

## Query Example

```graphql
query ($search: String!) {
    search(search: $search) {
        anime {
            data {
                title {
                    romaji
                }
            }
        }
        artists {
            data {
                name {
                    main
                }
            }
        }
        themes {
            data {
                type
            }
        }
        playlists {
            data {
                name
            }
        }
        series {
            data {
                title {
                    romaji
                }
            }
        }
        songs {
            data {
                title {
                    romaji
                }
            }
        }
        studios {
            data {
                name
            }
        }
        videos {
            data {
                basename
            }
        }
    }
}
```

## Authentication

None

## Parameters

| Name         | Type     | Description                    |
| :----------: | :------: | :----------------------------- |
| page         | Int!     | Index of the current page      |
| first        | Int!     | Number of items per page       |
| search       | String!  | The term used for the search   |

## Response

```json
{
    "search": {
        "anime": {
            "data": [
                {
                    "title": {
                        "romaji": "romaji"
                    }
                }
            ]
        },
        "artists": {
            "data": [
                {
                    "name": {
                        "main": "main"
                    }
                }
            ]
        },
        "themes": {
            "data": [
                {
                    "type": "type"
                }
            ]
        },
        "playlists": {
            "data": [
                {
                    "name": "name"
                }
            ]
        },
        "songs": {
            "data": [
                {
                    "title": {
                        "romaji": "romaji"
                    }
                }
            ]
        },
        "videos": {
            "data": [
                {
                    "basename": "basename"
                }
            ]
        }
    }
}
```