---
title: Anime Resource Store
---

# Anime Resource Store Endpoint

The anime resource store endpoint creates a new anime resource and returns the new anime resource resource.

For example, the `/animeresource/bakemonogatari/1083` endpoint will create a new association between the Bakemonogatari anime and the external resource of id 1083.

## URL

```sh
POST /animeresource/{anime:slug}/{resource:id}
```

## Authentication

**Required Permission**: create anime, create external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name | Required | Rules           |
| :--: | :------: | :-------------- |
| as   | No       | string, max:192 |

## Response

```json
{
    animeresource: {
        created_at: "created_at",
        updated_at: "updated_at",
        as: "as"
    }
}
```

## Example

```bash
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeresource/bakemonogatari/1083
```
