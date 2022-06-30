---
title: Song Destroy
---

<Block>

# Song Destroy Endpoint

The song destroy endpoint soft deletes a song and returns the deleted song resource.

For example, the `/song/3373` endpoint will soft delete the "staple stable" song and return the deleted "staple stable" resource.

## URL

```sh
DELETE /song/{id}
```

## Authentication

**Required Permission**: delete song

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

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
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/song/3373
```
</CURL>

</Example>

</Block>