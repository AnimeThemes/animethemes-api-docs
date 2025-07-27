---
title: Image Store
---

# Image Store Endpoint

The image store endpoint creates a new image and returns the new image resource.

For example, the `/image?facet=large+cover` endpoint will create a new large cover image for the Bakemonogatari anime and return the new image resource.

## URL

```sh
POST /image
```

## Authentication

**Required Permission**: create image

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name  | Required | Rules                                       |
| :---: | :------: | :------------------------------------------ |
| file  | Yes      | image                                       |
| facet | Yes      | EnumValue [Small Cover, Large Cover, Grill] |

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
curl -X POST -H "Authorization: Bearer {token}" -F "file=@lorem_ipsum.jpg" https://api.animethemes.moe/image/
```
