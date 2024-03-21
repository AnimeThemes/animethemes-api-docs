---
title: Anime Restore
---

# Anime Restore Endpoint

The anime restore endpoint restores a soft deleted anime and returns the restored anime resource.

For example, the `/restore/anime/bakemonogatari` endpoint will restore the soft deleted Bakemonogatari anime and return the restored Bakemonogatari resource.

## URL

```sh
PATCH /restore/anime/{slug}
```

## Authentication

**Required Permission**: restore anime

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Anime must be soft deleted

## Parameters

None

## Response

```json
{
    anime: {
        id: id,
        name: "name",
        slug: "slug",
        year: year,
        season: "season",
        media_format: "media_format",
        synopsis: "synopsis",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/anime/bakemonogatari
```
