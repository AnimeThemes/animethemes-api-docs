---
title: Audio Show
---

<Block>

# Audio Show Endpoint

The audio show endpoint returns an audio resource.

For example, `/audio/Bakemonogatari-OP1.ogg` endpoint will return the Bakemonogatari-OP1.ogg audio.

## URL

```sh
GET /audio/{basename}
```

## Authentication

None

## Parameters

| Name    | Required | Description                         |
| :-----: | :------: | :---------------------------------- |
| fields  | No       | Sparse fieldsets for resource types |

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
curl https://api.animethemes.moe/audio/Bakemonogatari-OP1.ogg
```
</CURL>

</Example>

</Block>