---
title: Announcement Index
---

<Block>

# Announcement Index Endpoint

The announcement index endpoint returns a listing of announcement resources.

## URL

```sh
GET /api/announcement/
```

## Parameters

| Name         | Required | Description                                                                          |
| :----------: | :------: | :----------------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                                  |
| include      | No       | Inclusion of related resources                                                       |
| filter       | No       | Filters for announcement resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the announcement resources                                |
| page[size]   | No       | The number of announcement resources to display for the current page                 |
| page[number] | No       | The page of announcement resources to display                                        |

## Allowed Sort Fields

* announcement_id
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
Status: 200

{
    announcements: [
        {
            id: id,
            content: "content",
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
curl https://staging.animethemes.moe/api/announcement/
```
</CURL>

</Example>

</Block>