---
title: Studio Image Show
---

# Studio Image Show Endpoint

The studio image show endpoint returns a studio image resource.

For example, the `/studioimage/shaft/9292` endpoint will return the studio image resource for the association between the Shaft studio and the large cover image of id 9292.

## URL

```sh
GET /studioimage/{studio:slug}/{image:id}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    studioimage: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/studioimage/shaft/9292
```
