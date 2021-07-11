---
title: Theme Index
---

<Block>

# Theme Index Endpoint

The theme index endpoint returns a listing of theme resources.

## URL

```sh
GET /api/theme/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for theme resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                      |
| q            | No       | The query to search for matching theme resources                              |
| page[size]   | No       | The number of theme resources to display for the current page                 |
| page[number] | No       | The page of theme resources to display                                        |

## Allowed Sort Fields

* theme_id
* type
* sequence
* group
* slug
* created_at
* updated_at
* deleted_at
* anime_id
* song_id

## Filters

* type
* sequence
* group
* slug
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    themes: [
        {
            id: id,
            type: "type",
            sequence: sequence,
            group: "group",
            slug: "slug",
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
curl https://staging.animethemes.moe/api/theme/
```
</CURL>

</Example>

</Block>