---
title: Anime Resource Destroy
---

# Anime Resource Destroy Endpoint

The anime resource destroy endpoint deletes an anime resource and returns the deleted anime resource resource.

For example, the `/animeresource/bakemonogatari/1083` endpoint will delete the association between the Bakemonogatari anime and the external resource of id 1083.

## URL

```sh
DELETE /animeresource/{anime:slug}/{resource:id}
```

## Authentication

**Required Permission**: delete anime, delete external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

None

## Response

```json
{
    message: "Resource 'https://myanimelist.net/anime/5081' has been detached from Anime 'Bakemonogatari'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeresource/bakemonogatari/1083
```
