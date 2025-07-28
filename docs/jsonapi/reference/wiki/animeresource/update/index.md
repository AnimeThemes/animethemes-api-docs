---
title: Anime Resource Update
---

# Anime Resource Update Endpoint

The anime resource store endpoint updates an anime resource and returns the updated anime resource resource.

For example, the `/animeresource/bakemonogatari/1083?as=updated+label` endpoint will update the association between the Bakemonogatari anime and the external resource of id 1083.

## URL

```sh
PUT|PATCH /animeresource/{anime:slug}/{resource:id}
```

## Authentication

**Required Permission**: update anime, update external resource

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

| Name        | Required | Rules           |
| :---------: | :------: | :-------------- |
| as          | No       | string, max:192 |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/animeresource/
```
