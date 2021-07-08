---
title: Synonym Index
---

<Block>

# Synonym Index Endpoint

The synonym index endpoint returns a listing of synonym resources.

## URL

```sh
GET /api/synonym/
```

## Parameters

| Name         | Required | Description                                                                     |
| :----------: | :------: | :------------------------------------------------------------------------------ |
| fields       | No       | Sparse fieldsets for resource types                                             |
| include      | No       | Inclusion of related resources                                                  |
| filter       | No       | Filters for synonym resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources.                                       |
| q            | No       | The query to search for matching synonym resources                              |
| page[size]   | No       | The number of synonym resources to display for the current page                 |
| page[number] | No       | The page of synonym resources to display                                        |

## Allowed Sort Fields

* synonym_id
* text
* created_at
* updated_at
* deleted_at
* anime_id

## Filters

* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    synonyms: [
        {
            id: id,
            text: "text",
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
curl https://staging.animethemes.moe/api/synonym/
```
</CURL>

</Example>

</Block>