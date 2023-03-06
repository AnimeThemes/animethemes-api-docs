---
title: Artist Song Update
---

# Artist Song Update Endpoint

The artist song update endpoint updates an artist song and returns the updated artist song resource.

For example, the `/artistsong/chiwa_saitou/3373?as=updated+label` endpoint will update the association between the Chiwa Saitou artist and the "staple stable" song.

## URL

```sh
PUT|PATCH /artistsong/{artist:slug}/{song:id}
```

## Authentication

**Required Permission**: update artist, update song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| as          | No       | string, max:192 |

## Response

```json
{
    artistsong: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistsong/
```
