---
title: Anime Show
---

<Block>

# Anime Show Endpoint

The anime show endpoint returns an anime resource.

For example, the `/api/anime/bakemonogatari` endpoint will return the Bakemonogatari resource for the Bakemonogatari anime.

## URL

```sh
GET /api/anime/{slug}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

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
curl https://staging.animethemes.moe/api/anime/bakemonogatari
```
</CURL>

</Example>

</Block>