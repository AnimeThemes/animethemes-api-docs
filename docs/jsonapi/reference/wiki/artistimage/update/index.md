---
title: Artist Image Update
---

# Artist Image Update Endpoint

The artist image update endpoint updates an artist image and returns the updated artist image resource.

For example, the `/artistimage/claris/5?depth=2` endpoint will update the association between the claris and the image of id 5.

## URL

```sh
PUT|PATCH /artistimage/{artist:slug}/{image:id}
```

## Authentication

**Required Permission**: update artist, update image

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| depth       | No       | integer, min:1  |

## Response

```json
{
    artistimage: {
        created_at: "created_at",
        updated_at: "updated_at",
        depth: depth
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistimage/
```
