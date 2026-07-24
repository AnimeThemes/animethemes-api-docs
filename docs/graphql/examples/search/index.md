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
            title {
                romaji
            }
        }
        artists {
            name {
                main
            }
        }
        animethemes {
            type
        }
        playlists {
            name
        }
        series {
            title {
                romaji
            }
        }
        songs {
            title {
                romaji
            }
        }
        studios {
            name
        }
        videos {
            basename
        }
    }
}
```

## Authentication

None

## Parameters

| Name         | Type     | Description                    |
| :----------: | :------: | :----------------------------- |
| page         | Int      | Index of the current page      |
| first        | Int!     | Number of items per page       |
| search       | String!  | The term used for the search   |

## Response

```json
{
    "search": {
        "anime": [
            {
                "title": {
                    "romaji": "romaji"
                }
            }
        ],
        "animethemes": [
            {
                "type": "type"
            }
        ],
        "artists": [
            {
                "name": {
                    "main": "main"
                }
            }
        ],
        "playlists": [
            {
                "name": "name"
            }
        ],
        "series": [
            {
                "title": {
                    "romaji": "romaji"
                }
            }
        ],
        "songs": [
            {
                "title": {
                    "romaji": "romaji"
                }
            }
        ],
        "videos": [
            {
                "basename": "basename"
            }
        ]
    }
}
```