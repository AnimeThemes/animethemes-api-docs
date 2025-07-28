---
title: Image Restore
---

# Image Restore Endpoint

The image restore endpoint restores a soft deleted image and returns the restored image resource.

For example, the `/restore/image/435` endpoint will restore the soft deleted large cover image for the Bakemonogatari anime and return the restored image resource.

## URL

```sh
PATCH /restore/image/{id}
```

## Authentication

**Required Permission**: restore image

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Image must be soft deleted

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/image/435
```
