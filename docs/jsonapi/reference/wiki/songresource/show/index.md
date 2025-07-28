---
title: Song Resource Show
---

# Song Resource Show Endpoint

The song resource show endpoint returns an song resource resource.

For example, the `/songresource/10535/30212` endpoint will return the song resource resource for the association between the Mijuku DREAMER song and the external resource of id 30212.

## URL

```sh
GET /songresource/{song:id}/{resource:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    songresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/songresource/10535/30212
```
