---
title: Artist Song Show
---

# Artist Song Show Endpoint

The artist song show endpoint returns an artist song resource.

For example, the `/artistsong/chiwa_saitou/3373` endpoint will return the artist song resource for the association between the Chiwa Saitou artist and the "staple stable" song.

## URL

```sh
GET /artistsong/{artist:slug}/{song:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    artistsong: {
        created_at: "created_at",
        updated_at: "updated_at",
        alias: "alias",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/artistsong/chiwa_saitou/3373
```
