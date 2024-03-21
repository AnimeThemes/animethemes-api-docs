---
title: Artist Resource Show
---

# Artist Resource Show Endpoint

The artist resource show endpoint returns an artist resource resource.

For example, the `/artistresource/chiwa_saitou/3361` endpoint will return the artist resource resource for the association between the Chiwa Saitou artist and the external resource of id 3361.

## URL

```sh
GET /artistresource/{artist:slug}/{resource:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    artistresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/artistresource/chiwa_saitou/3361
```
