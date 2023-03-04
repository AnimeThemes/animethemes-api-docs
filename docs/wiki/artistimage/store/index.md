---
title: Artist Image Store
---

# Artist Image Store Endpoint

The artist image store endpoint creates a new artist image and returns the new artist image resource.

For example, the `/artistimage?artist_id=53&image_id=6703` endpoint will create a new association between the Chiwa Saitou artist and the large cover image of id 6703.

## URL

```sh
POST /artistimage
```

## Authentication

**Required Permission**: create artist, create image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name      | Required | Rules                     |
| :-------: | :------: | :------------------------ |
| artist_id | Yes      | integer, Artist ID exists |
| image_id  | Yes      | integer, Image ID exists  |

## Response

```json
{
    artistimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.artistthemes.moe/artistimage/
```
