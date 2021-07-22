---
title: Image Index
---

<Block>

# Image Index Endpoint

The image index endpoint returns a listing of image resources.

## URL

```sh
GET /api/image/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for image resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the image resources                                |
| page[size]   | No       | The number of image resources to display for the current page                 |
| page[number] | No       | The page of image resources to display                                        |

## Allowed Sort Fields

* image_id
* path
* size
* mimetype
* facet
* created_at
* updated_at
* deleted_at

## Filters

* id
* path
* size
* mimetype
* facet
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    images: [
        {
            id: id,
            path: "path",
            size: size,
            mimetype: "mimetype",
            facet: "facet",
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
curl https://staging.animethemes.moe/api/image/
```
</CURL>

</Example>

</Block>