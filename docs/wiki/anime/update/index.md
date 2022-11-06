---
title: Anime Update
---

# Anime Update Endpoint

The anime update endpoint updates an anime and returns the updated anime resource.

For example, the `/anime/bakemonogatari?synopsis=updated+text` endpoint will update the Bakemonogatari anime synopsis attribute and return the updated Bakemonogatari resource.

## URL

```sh
PUT|PATCH /anime/{slug}
```

## Authentication

**Required Permission**: update anime

**Roles with Permission**: Wiki Editor, Admin

**Other Requirements**: Anime must not be soft deleted

## Parameters

| Name     | Required | Rules                                                  |
| :------: | :------: | :----------------------------------------------------- |
| name     | No       | string, max:192                                        |
| season   | No       | EnumValue [Winter, Spring, Summer, Fall]               |
| slug     | No       | string, max:192, alpha_dash, unique                    |
| synopsis | No       | string, max:65535                                      |
| year     | No       | integer, digits:4, min:1960, max:[current year + 1]    |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/anime/bakemonogatari
```