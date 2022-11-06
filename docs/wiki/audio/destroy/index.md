---
title: Audio Destroy
---

# Audio Destroy Endpoint

The audio destroy endpoint soft deletes an audio and returns the deleted audio resource.

For example, the `/audio/Bakemonogatari-OP1.ogg` endpoint will soft delete the Bakemonogatari-OP1.ogg audio and return the deleted Bakemonogatari-OP1.ogg resource.

## URL

```sh
DELETE /audio/{basename}
```

## Authentication

**Required Permission**: delete audio

**Roles with Permission**: Admin

**Other Requirements**: Audio must not be soft deleted

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
        link: "link"
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/audio/Bakemonogatari-OP1.ogg
```
