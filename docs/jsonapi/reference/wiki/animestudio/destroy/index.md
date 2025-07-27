---
title: Anime Studio Destroy
---

# Anime Studio Destroy Endpoint

The anime studio destroy endpoint deletes an anime studio and returns the deleted anime studio resource.

For example, the `/animestudio/bakemonogatari/shaft` endpoint will delete the association between the Bakemonogatari anime and the Shaft studio.

## URL

```sh
DELETE /animestudio/{anime:slug}/{studio:slug}
```

## Authentication

**Required Permission**: delete anime, delete studio

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

None

## Response

```json
{
    message: "Anime 'Bakemonogatari' has been detached from Studio 'Shaft'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animestudio/bakemonogatari/shaft
```
