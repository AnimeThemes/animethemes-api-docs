---
title: Series Index
---

<Block>

# Series Index Endpoint

The series index endpoint returns a listing of series resources.

## URL

```sh
GET /api/series/
```

## Parameters

| Name         | Required | Description                                                                    |
| :----------: | :------: | :----------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                            |
| include      | No       | Inclusion of related resources                                                 |
| filter       | No       | Filters for series resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources                                       |
| q            | No       | The query to search for matching series resources                              |
| page[size]   | No       | The number of series resources to display for the current page                 |
| page[number] | No       | The page of series resources to display                                        |

## Allowed Sort Fields

* series_id
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
    series: [
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
curl https://staging.animethemes.moe/api/series/
```
</CURL>

</Example>

</Block>