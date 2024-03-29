---
title: Anime Theme Entry Force Delete
---

# Anime Theme Entry Force Delete Endpoint

The anime theme entry force delete endpoint hard deletes an anime theme entry and returns a confirmation message.

For example, the `/forceDelete/animethemeentry/3822` endpoint will hard delete the V2 entry for the ED theme of the Bakemonogatari anime and return a confirmation message.

## URL

```sh
DELETE /forceDelete/animethemeentry/{id}
```

## Authentication

**Required Permission**: force delete anime theme entry

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    message: "The AnimeThemeEntry 'Bakemonogatari ED V2' was deleted.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/forceDelete/animethemeentry/3822
```
