---
title: Audio Store
---

<Block>

# Audio Store Endpoint

The audio store endpoint creates a new audio and returns the new audio resource.

For example, the `/audio?basename=Bakemonogatari-OP1.ogg&filename=Bakemonogatari-OP1&mimetype=audio/ogg&path=2009/Summer/Bakemonogatari-OP1.ogg&size=3610633` endpoint will create a new Bakemonogatari-OP1.ogg audio and return the new Bakemonogatari-OP1.ogg resource.

## URL

```sh
POST /audio
```

## Authentication

**Required Permission**: create audio

**Roles with Permission**: Admin

## Parameters

| Name       | Required | Rules           |
| :--------: | :------: | :-------------- |
| basename   | Yes      | string, max:192 |
| filename   | Yes      | string, max:192 |
| path       | Yes      | string, max:192 |
| size       | Yes      | integer, min:0  |
| mimetype   | Yes      | string, max:192 |

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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/audio/
```
</CURL>

</Example>

</Block>