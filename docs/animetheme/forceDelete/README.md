---
title: Anime Theme Force Delete
---

<Block>

# Anime Theme Force Delete Endpoint

The anime theme force delete endpoint hard deletes an anime theme and returns a confirmation message.

For example, the `/api/forceDelete/animetheme/3373` endpoint will hard delete the OP1 theme for the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /api/forceDelete/animetheme/{id}
```

## Authentication

**Required Permission**: force delete anime theme

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The AnimeTheme 'OP1' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/animetheme/3373
```
</CURL>

</Example>

</Block>