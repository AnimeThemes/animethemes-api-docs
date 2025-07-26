---
title: Filter by External Site
---

# Filter by External Site

---

The AnimeThemes API provides an exclusive query for one of its most common use cases.
The `findAnimesByExternalSite` query accepts three arguments to filter animes by external resources.
An external resource may be linked to multiple animes.

## Query Example

```graphql
query ($id: Int!) {
    {
        findAnimesByExternalSite(site: ANILIST, id: $id) {
            name
            mediaFormat
            season
            year
        }
    }
}
```

## Authentication

None

## Parameters

| Name  | Type          | Description                                                       |
| :---: | :-----------: | :---------------------------------------------------------------- |
| site  | ResourceSite! | The site enum used to filter                                      |
| id    | Int           | The id of the anime in the external site                          |
| link  | String        | The URL of the external resource. Required if no `id` provided.   |

## Response

```json
{
    "data": {
        "findAnimesByExternalSite": [
            {
                "name": "Hibike! Euphonium 3",
                "mediaFormat": "TV",
                "season": "SPRING",
                "year": 2024
            }
        ]
    }
}
```