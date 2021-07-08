---
title: Anime Index
---

<Block>

# Anime Index Endpoint

The anime index endpoint returns a listing of anime resources.

## URL

```sh
GET /api/anime/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for anime resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources.                                     |
| q            | No       | The query to search for matching anime resources                              |
| page[size]   | No       | The number of anime resources to display for the current page                 |
| page[number] | No       | The page of anime resources to display                                        |

## Allowed Sort Fields

* anime_id
* name
* slug
* year
* season
* created_at
* updated_at
* deleted_at

## Filters

* year
* season
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    anime: [
        {
            id: id,
            name: "name",
            slug: "slug",
            year: year,
            season: "season",
            synopsis: "synopsis",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at"
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/anime/
```
</CURL>

</Example>

</Block>