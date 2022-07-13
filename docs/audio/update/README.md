---
title: Audio Update
---

<Block>

# Audio Update Endpoint

The audio update endpoint updates an audio and returns the updated audio resource.

For example, the `/audio/Bakemonogatari-OP1.ogg?` endpoint will update the Bakemonogatari-OP1.ogg audio and return the updated Bakemonogatari-OP1.ogg resource.

## URL

```sh
PUT|PATCH /audio/{basename}
```

## Authentication

**Required Permission**: update audio

**Roles with Permission**: Wiki Editor, Admin

## Parameters

| Name       | Required | Rules                                  |
| :--------: | :------: | :------------------------------------- |

## Response

```json
{
    audio: {
        id: id,
        basename: "basename",
        filename: "filename",
        path: "path",
        size: size,
        mimetype: "mimetype",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/audio/Bakemonogatari-OP1.ogg
```
</CURL>

</Example>

</Block>