---
title: Anime Store
---

<Block>

# Anime Store Endpoint

The anime store endpoint creates a new anime and returns the new anime resource.

For example, the `/api/anime?name=Bakemonogatari&slug=bakemonogatari&year=2009&season=summer` endpoint will create a new Bakemonogatari anime and return the new Bakemonogatari resource.

## URL

```sh
POST /api/anime
```

## Authentication

**Required Permission**: create anime

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                                                  |
| :------: | :------: | :----------------------------------------------------- |
| name     | Yes      | string, max:192                                        |
| season   | Yes      | EnumValue {Winter, Spring, Summer, Fall}               |
| slug     | Yes      | string, max:192, alpha_dash, unique                    |
| synopsis | No       | string, max:65535                                      |
| year     | Yes      | integer, digits:4, min:1960, max:{current year + 1}    |

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
curl -X POST -H "Authorization: Bearer {token}" https://staging.animethemes.moe/api/anime/
```
</CURL>

</Example>

</Block>