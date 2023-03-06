---
title: Artist Song Store
---

# Artist Song Store Endpoint

The artist song store endpoint creates a new artist song and returns the new artist song resource.

For example, the `/artistsong?artist_id=53&song_id=3373` endpoint will create a new association between the Chiwa Saitou artist and the "staple stable" song.

## URL

```sh
POST /artistsong
```

## Authentication

**Required Permission**: create artist, create song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name      | Required | Rules                     |
| :-------: | :------: | :------------------------ |
| artist_id | Yes      | integer, Artist ID exists |
| song_id   | Yes      | integer, Song ID exists   |
| as        | No       | string, max:192           |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistsong/
```
