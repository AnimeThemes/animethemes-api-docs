---
title: Anime Store
---

# Anime Store Endpoint

The anime store endpoint creates a new anime and returns the new anime resource.

For example, the `/anime?name=Bakemonogatari&slug=bakemonogatari&year=2009&season=summer&media_format=tv` endpoint will create a new Bakemonogatari anime and return the new Bakemonogatari resource.

## URL

```sh
POST /anime
```

## Authentication

**Required Permission**: create anime

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name         | Required | Rules                                                       |
| :----------: | :------: | :---------------------------------------------------------- |
| name         | Yes      | string, max:192                                             |
| season       | Yes      | EnumValue [Winter, Spring, Summer, Fall]                    |
| media_format | Yes      | EnumValue [Unknown, TV, TV Short, OVA, Movie, Special, ONA] |
| slug         | Yes      | string, max:192, alpha_dash, unique                         |
| synopsis     | No       | string, max:65535                                           |
| year         | Yes      | integer, digits:4, min:1960, max:[current year + 1]         |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/anime/
```