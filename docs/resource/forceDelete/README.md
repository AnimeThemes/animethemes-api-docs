---
title: Resource Force Delete
---

<Block>

# Resource Force Delete Endpoint

The resource force delete endpoint hard deletes an external resource and returns a confirmation message.

For example, the `/forceDelete/resource/1083` endpoint will hard delete the MyAnimeList resource for the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /forceDelete/resource/{id}
```

## Authentication

**Required Permission**: force delete external resource

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The ExternalResource 'https://myanimelist.net/anime/5081/' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/resource/1083
```
</CURL>

</Example>

</Block>