---
title: Series Force Delete
---

<Block>

# Series Force Delete Endpoint

The series force delete endpoint hard deletes a series and returns a confirmation message.

For example, the `/forceDelete/series/monogatari` endpoint will hard delete the Monogatari series and return a confirmation message.

## URL

```sh
DELETE /forceDelete/series/{slug}
```

## Authentication

**Required Permission**: force delete series

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The Series 'Monogatari' was deleted.",
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/series/monogatari
```
</CURL>

</Example>

</Block>