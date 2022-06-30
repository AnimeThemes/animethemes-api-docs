---
title: Anime Synonym Force Delete
---

<Block>

# Anime Synonym Force Delete Endpoint

The anime synonym force delete endpoint hard deletes an anime synonym and returns a confirmation message.

For example, the `/forceDelete/animesynonym/1523` endpoint will hard delete the Monstory synonym for the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /forceDelete/animesynonym/{id}
```

## Authentication

**Required Permission**: force delete anime synonym

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The AnimeSynonym 'Monstory' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/animesynonym/1523
```
</CURL>

</Example>

</Block>