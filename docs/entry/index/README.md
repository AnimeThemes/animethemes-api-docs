---
title: Entry Index
---

<Block>

# Entry Index Endpoint

The entry index endpoint returns a listing of entry resources.

## URL

```sh
GET /api/entry/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for entry resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources. Ignored if search query is present. |
| q            | No       | The query to search for matching entry resources                              |
| page[size]   | No       | The number of entry resources to display for the current page                 |
| page[number] | No       | The page of entry resources to display                                        |

## Allowed Sort Fields

* entry_id
* theme_id
* version
* nsfw
* spoiler
* created_at
* updated_at
* deleted_at

## Filters

* version
* nsfw
* spoiler
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    entries: [
        {
            id: id,
            version: version,
            episodes: "episodes",
            nsfw: nsfw,
            spoiler: spoiler,
            notes: "notes",
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
curl https://staging.animethemes.moe/api/entry/
```
</CURL>

</Example>

</Block>