---
title: Artist Image Store
---

# Artist Image Store Endpoint

The artist image store endpoint creates a new artist image and returns the new artist image resource.

For example, the `/artistimage/chiwa_saitou/6703` endpoint will create a new association between the Chiwa Saitou artist and the large cover image of id 6703.

## URL

```sh
POST /artistimage/{artist:slug}/{image:id}
```

## Authentication

**Required Permission**: create artist, create image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistimage/chiwa_saitou/6703
```
