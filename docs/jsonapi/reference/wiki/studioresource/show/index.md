---
title: Studio Resource Show
---

# Studio Resource Show Endpoint

The studio resource show endpoint returns a studio resource resource.

For example, the `/studioresource/shaft/14891` endpoint will return the studio resource resource for the association between the Shaft studio and the external resource of id 14891.

## URL

```sh
GET /studioresource/{studio:slug}/{resource:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    studioresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/studioresource/shaft/14891
```
