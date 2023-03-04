---
title: Artist Image Destroy
---

# Artist Image Destroy Endpoint

The artist image destroy endpoint deletes an artist image and returns the deleted artist image resource.

For example, the `/artistimage/chiwa_saitou/6703` endpoint will delete the association between the Chiwa Saitou artist and the large cover image of id 6703.

## URL

```sh
DELETE /artistimage/{artist:slug}/{image:id}
```

## Authentication

**Required Permission**: delete artist, delete image

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.artistthemes.moe/artistimage/chiwa_saitou/6703
```
