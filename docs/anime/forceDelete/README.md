---
title: Anime Force Delete
---

<Block>

# Anime Force Delete Endpoint

The anime force delete endpoint hard deletes an anime and returns a confirmation message.

For example, the `/api/forceDelete/anime/bakemonogatari` endpoint will hard delete the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /api/forceDelete/anime/{slug}
```

## Authentication

**Required Permission**: force delete anime

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Anime 'Bakemonogatari' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://staging.animethemes.moe/api/forceDelete/anime/bakemonogatari
```
</CURL>

</Example>

</Block>