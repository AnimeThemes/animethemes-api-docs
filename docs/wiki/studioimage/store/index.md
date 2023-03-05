---
title: Studio Image Store
---

# Studio Image Store Endpoint

The studio image store endpoint creates a new studio image and returns the new studio image resource.

For example, the `/studioimage?studio_id=11&image_id=9292` endpoint will create a new association between the Shaft studio and the large cover image of id 9292.

## URL

```sh
POST /studioimage
```

## Authentication

**Required Permission**: create studio, create image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name      | Required | Rules                     |
| :-------: | :------: | :------------------------ |
| studio_id | Yes      | integer, Studio ID exists |
| image_id  | Yes      | integer, Image ID exists  |

## Response

```json
{
    studioimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioimage/
```
