---
title: Anime Force Delete
---

<Block>

# Anime Force Delete Endpoint

The anime force delete endpoint hard deletes an anime and returns a confirmation message.

For example, the `/forceDelete/anime/bakemonogatari` endpoint will hard delete the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /forceDelete/anime/{slug}
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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/anime/bakemonogatari
```
</CURL>

</Example>

</Block>