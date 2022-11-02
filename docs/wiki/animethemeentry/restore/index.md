---
title: Anime Theme Entry Restore
---

# Anime Theme Entry Restore Endpoint 

The anime theme entry restore endpoint restores a soft deleted anime theme entry and returns the restored anime theme entry resource.

For example, the `/restore/animethemeentry/3822` endpoint will restore the soft deleted V2 entry for the ED1 theme of the Bakemonogatari anime and return the restored anime theme entry resource.

## URL

```sh
PATCH /restore/animethemeentry/{id}
```

## Authentication

**Required Permission**: restore anime theme entry

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

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/animethemeentry/3822
```
