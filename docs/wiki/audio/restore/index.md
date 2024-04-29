---
title: Audio Restore
---

# Audio Restore Endpoint

The audio restore endpoint restores a soft deleted audio and returns the restored audio resource.

For example, the `/restore/audio/Bakemonogatari-OP1.ogg` endpoint will restore the soft deleted Bakemonogatari-OP1.ogg audio and return the restored Bakemonogatari-OP1.ogg resource.

## URL

```sh
PATCH /restore/audio/{basename}
```

## Authentication

**Required Permission**: restore audio

**Roles with Permission**: Encoder, Admin

**Other Requirements**: Audio must be soft deleted

## Parameters

None

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
        deleted_at: "deleted_at",
        link: "link",
        views_count: views_count
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/audio/Bakemonogatari-OP1.ogg
```
