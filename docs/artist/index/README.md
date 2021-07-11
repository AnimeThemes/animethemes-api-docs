0---
title: Artist Index
---

<Block>

# Artist Index Endpoint

The artist index endpoint returns a listing of artist resources.

## URL

```sh
GET /api/artist/
```

## Parameters

| Name         | Required | Description                                                                    |
| :----------: | :------: | :----------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                            |
| include      | No       | Inclusion of related resources                                                 |
| filter       | No       | Filters for artist resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                       |
| q            | No       | The query to search for matching artist resources                              |
| page[size]   | No       | The number of artist resources to display for the current page                 |
| page[number] | No       | The page of artist resources to display                                        |

## Allowed Sort Fields

* artist_id
* name
* slug
* created_at
* updated_at
* deleted_at

## Filters

* name
* slug
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    artists: [
        {
            id: id,
            name: "name",
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
curl https://staging.animethemes.moe/api/artist/
```
</CURL>

</Example>

</Block>