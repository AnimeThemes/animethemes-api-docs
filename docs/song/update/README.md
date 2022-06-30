---
title: Song Update
---

<Block>

# Song Update Endpoint

The song update endpoint updates a song and returns the updated song resource.

For example, the `/song/song?title=staple+stable` endpoint will update the "staple stable" song title attribute and return the updated "staple stable" resource.

## URL

```sh
PUT|PATCH /song/{id}
```

## Authentication

**Required Permission**: update song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name     | Required | Rules                               |
| :------: | :------: | :---------------------------------- |
| title    | No       | string, max:192                     |

## Response

```json
{
    song: {
        id: id,
        title: "title",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/song/3373
```
</CURL>

</Example>

</Block>