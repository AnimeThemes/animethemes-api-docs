---
title: Image Update
---

# Image Update Endpoint

The image update endpoint updates an image and returns the updated image resource.

For example, the `/image?facet=large+cover` endpoint will update the image facet attribute and return the updated image resource.

## URL

```sh
PUT|PATCH /image/{id}
```

## Authentication

**Required Permission**: update image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name  | Required | Rules                                       |
| :---: | :------: | :------------------------------------------ |
| facet | No       | EnumValue [Small Cover, Large Cover, Grill] |

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

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/image/435
```
