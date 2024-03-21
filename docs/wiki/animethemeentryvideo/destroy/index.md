---
title: Anime Theme Entry Video Destroy
---

# Anime Theme Entry Video Destroy Endpoint

The anime theme entry video destroy endpoint deletes an anime theme entry video and returns the deleted anime theme entry video resource.

For example, the `/animethemeentryvideo/3814/Bakemonogatari-OP1.webm` endpoint will delete the association between the Bakemonogatari OP1 anime theme entry and the Bakemonogatari-OP1.webm video.

## URL

```sh
DELETE /animethemeentryvideo/{animethemeentry:id}/{video:slug}
```

## Authentication

**Required Permission**: delete anime theme entry, delete video

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Video 'Bakemonogatari-OP1.webm' has been detached from Entry 'Bakemonogatari OP1'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentryvideo/bakemonogatari/monogatari
```
