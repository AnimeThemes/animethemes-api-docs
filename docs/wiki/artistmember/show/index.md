---
title: Artist Member Show
---

# Artist Member Show Endpoint

The artist member show endpoint returns an artist member resource.

For example, the `/artistmember/ms/pile` endpoint will return the artist member resource for the association between the association between the μ's group and the Pile member.

## URL

```sh
GET /artistmember/{artist:slug}/{artist:slug}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    artistmember: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/artistmember/ms/pile
```
