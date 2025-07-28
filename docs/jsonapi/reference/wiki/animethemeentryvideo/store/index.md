---
title: Anime Theme Entry Video Store
---

# Anime Theme Entry Video Store Endpoint

The anime theme entry video store endpoint creates a new anime theme entry video and returns the new anime theme entry video resource.

For example, the `/animethemeentryvideo/3814/Bakemonogatari-OP1.webm` endpoint will create a new association between the Bakemonogatari OP1 anime theme entry and the Bakemonogatari-OP1.webm video.

## URL

```sh
POST /animethemeentryvideo/{animethemeentry:id}/{video:slug}
```

## Authentication

**Required Permission**: create anime theme entry, create video

**Roles with Permission**: Wiki Editor, Encoder, Admin

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentryvideo/3814/Bakemonogatari-OP1.webm
```
