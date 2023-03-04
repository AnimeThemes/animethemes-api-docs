---
title: Artist Image Show
---

# Artist Image Show Endpoint

The artist image show endpoint returns an artist image resource.

For example, the `/artistimage/chiwa_saitou/6703` endpoint will return the artist image resource for the association between the Chiwa Saitou artist and the large cover image of id 6703.

## URL

```sh
GET /artistimage/{artist:slug}/{image:id}
```

## Authentication

None

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
curl https://api.artistthemes.moe/artistimage/chiwa_saitou/6703
```
