---
title: Global Search
---

# Global Search Query

The global search query returns a listing of resources that match a given search term.

## Query Example

```graphql
query ($search: String!) {
    search(search: $search) {
        anime {
            name
        }
        artists {
            name
        }
        animethemes {
            type
        }
        playlists {
            name
        }
        series {
            name
        }
        songs {
            title
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
| perPage      | Int      | Number of items per page       |
| search       | String!  | The term used for the search   |

## Response

```json
{
    search: {
        anime: [
            {
                name: "name"
            }
        ],
        animethemes: [
            {
                type: "type"
            }
        ],
        artists: [
            {
                name: "name"
            }
        ],
        playlists: [
            {
                name: "name"
            }
        ],
        series: [
            {
                name: "name"
            }
        ],
        songs: [
            {
                title: "title"
            }
        ],
        videos: [
            {
                basename: "basename"
            }
        ]
    }
}
```