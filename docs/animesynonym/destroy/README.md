---
title: Anime Synonym Destroy
---

<Block>

# Anime Synonym Destroy Endpoint 

The anime synonym destroy endpoint soft deletes an anime synonym and returns the deleted anime synonym resource.

For example, the `/api/animesynonym/1523` endpoint will soft delete the Monstory synonym for the Bakemonogatari anime and return the deleted anime synonym resource.

## URL

```sh
DELETE /api/animesynonym/{id}
```

## Authentication

**Required Permission**: delete anime synonym

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

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animesynonym/1523
```
</CURL>

</Example>

</Block>