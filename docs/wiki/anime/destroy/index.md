---
title: Anime Destroy
---

# Anime Destroy Endpoint

The anime destroy endpoint soft deletes an anime and returns the deleted anime resource.

For example, the `/anime/bakemonogatari` endpoint will soft delete the Bakemonogatari anime and return the deleted Bakemonogatari resource.

## URL

```sh
DELETE /anime/{slug}
```

## Authentication

**Required Permission**: delete anime

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Anime must not be soft deleted

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
        synopsis: "synopsis",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/anime/bakemonogatari
```
