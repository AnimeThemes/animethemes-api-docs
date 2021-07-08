---
title: Song Index
---

<Block>

# Song Index Endpoint

The song index endpoint returns a listing of song resources.

## URL

```sh
GET /api/song/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for song resources & constraining the inclusion of related resources  |
| sort         | No       | The list of fields to sort the resources.                                     |
| q            | No       | The query to search for matching song resources                               |
| page[size]   | No       | The number of song resources to display for the current page                  |
| page[number] | No       | The page of song resources to display                                         |

## Allowed Sort Fields

* song_id
* title
* created_at
* updated_at
* deleted_at

## Filters

* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    songs: [
        {
            id: id,
            title: "title",
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
curl https://staging.animethemes.moe/api/song/
```
</CURL>

</Example>

</Block>