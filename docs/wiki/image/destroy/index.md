---
title: Image Destroy
---

# Image Destroy Endpoint

The image destroy endpoint soft deletes an image and returns the deleted image resource.

For example, the `/image/435` endpoint will soft delete the large cover image for the Bakemonogatari anime and return the deleted image resource.

## URL

```sh
DELETE /image/{id}
```

## Authentication

**Required Permission**: delete image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/image/435
```
