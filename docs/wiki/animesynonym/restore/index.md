---
title: Anime Synonym Restore
---

# Anime Synonym Restore Endpoint 

The anime synonym restore endpoint restores a soft deleted anime synonym and returns the restored anime synonym resource.

For example, the `/restore/animesynonym/1523` endpoint will restore the soft deleted Monstory synonym for the Bakemonogatari anime and return the restored anime synonym resource.

## URL

```sh
PATCH /restore/animesynonym/{id}
```

## Authentication

**Required Permission**: restore anime synonym

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    animesynonym: {
        id: id,
        text: "text",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/animesynonym/1523
```
