---
title: Artist Song Store
---

# Artist Song Store Endpoint

The artist song store endpoint creates a new artist song and returns the new artist song resource.

For example, the `/artistsong/chiwa_saitou/3373` endpoint will create a new association between the Chiwa Saitou artist and the "staple stable" song.

## URL

```sh
POST /artistsong/{artist:slug}/{song:id}
```

## Authentication

**Required Permission**: create artist, create song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name | Required | Rules           |
| :--: | :------: | :-------------- |
| as   | No       | string, max:192 |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistsong/chiwa_saitou/3373
```
