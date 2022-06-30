---
title: Image Show
---

<Block>

# Image Show Endpoint

The image show endpoint returns an image resource.

For example, `/image/435` endpoint will return the large cover image for the Bakemonogatari anime.

## URL

```sh
GET /image/{id}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

## Response

```json
{
    image: {
        id: id,
        path: "path",
        size: size,
        mimetype: "mimetype",
        facet: "facet",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/image/435
```
</CURL>

</Example>

</Block>