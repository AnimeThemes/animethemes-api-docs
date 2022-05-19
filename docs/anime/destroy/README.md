---
title: Anime Destroy
---

<Block>

# Anime Destroy Endpoint

The anime destroy endpoint soft deletes an anime and returns the deleted anime resource.

For example, the `/api/anime/bakemonogatari` endpoint will soft delete the Bakemonogatari anime and return the deleted Bakemonogatari resource.

## URL

```sh
DELETE /api/anime/{slug}
```

## Authentication

**Required Permission**: delete anime

**Roles with Permission**: Wiki Editor, Admin

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

<Example>

<CURL>
```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://staging.animethemes.moe/api/anime/bakemonogatari
```
</CURL>

</Example>

</Block>