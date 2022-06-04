---
title: Song Store
---

<Block>

# Song Store Endpoint

The song store endpoint creates a new song and returns the new song resource.

For example, the `/api/song?title=staple+stable` endpoint will create a new "staple stable" song and return the new "staple stable" resource.

## URL

```sh
POST /api/song
```

## Authentication

**Required Permission**: create song

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/song/
```
</CURL>

</Example>

</Block>