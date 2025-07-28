---
title: Anime Theme Entry Video Show
---

# Anime Theme Entry Video Show Endpoint

The anime theme entry video show endpoint returns an anime theme entry video resource.

For example, the `/animethemeentryvideo/3814/Bakemonogatari-OP1.webm` endpoint will return the anime theme entry video resource for the association between the Bakemonogatari OP1 anime theme entry and the Bakemonogatari-OP1.webm video.

## URL

```sh
GET /animethemeentryvideo/{animethemeentry:id}/{video:slug}
```

## Authentication

None

## Parameters

None

## Response

```json
{
    animethemeentryvideo: {
        created_at: "created_at",
        updated_at: "updated_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/animethemeentryvideo/3814/Bakemonogatari-OP1.webm
```
