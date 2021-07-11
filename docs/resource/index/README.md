---
title: Resource Index
---

<Block>

# Resource Index Endpoint

The resource index endpoint returns a listing of external resources.

## URL

```sh
GET /api/resource/
```

## Parameters

| Name         | Required | Description                                                                      |
| :----------: | :------: | :------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                              |
| include      | No       | Inclusion of related resources                                                   |
| filter       | No       | Filters for external resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the external resources                                |
| page[size]   | No       | The number of external resources to display for the current page                 |
| page[number] | No       | The page of external resources to display                                        |

## Allowed Sort Fields

* resource_id
* link
* external_id
* site
* created_at
* updated_at
* deleted_at

## Filters

* link
* external_id
* site
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    resources: [
        {
            id: id,
            link: "link",
            external_id: external_id,
            site: "site",
            created_at: "created_at",
            updated_at: "updated_at",
            deleted_at: "deleted_at",
            link: "link"
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
curl https://staging.animethemes.moe/api/resource/
```
</CURL>

</Example>

</Block>