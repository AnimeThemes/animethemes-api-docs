---
title: Anime Theme Entry Destroy
---

<Block>

# Anime Theme Entry Destroy Endpoint 

The anime theme entry destroy endpoint soft deletes an anime theme entry and returns the deleted anime theme entry resource.

For example, the `/animethemeentry/3822` endpoint will soft delete the V2 entry for the ED1 theme of the Bakemonogatari anime and return the deleted anime theme entry resource.

## URL

```sh
DELETE /animethemeentry/{id}
```

## Authentication

**Required Permission**: delete anime theme entry

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    animethemeentry: {
        id: id,
        version: version,
        episodes: "episodes",
        nsfw: nsfw,
        spoiler: spoiler,
        notes: "notes",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/animethemeentry/3822
```
</CURL>

</Example>

</Block>