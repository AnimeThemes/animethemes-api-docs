---
title: Video Restore
---

# Video Restore Endpoint

The video restore endpoint restores a soft deleted video and returns the restored video resource.

For example, the `/restore/video/Bakemonogatari-OP1.webm` endpoint will restore the soft deleted Bakemonogatari-OP1.webm video and return the restored Bakemonogatari-OP1.webm resource.

## URL

```sh
PATCH /restore/video/{basename}
```

## Authentication

**Required Permission**: restore video

**Roles with Permission**: Admin

## Parameters

None

## Response

```json
{
    video: {
        id: id,
        basename: "basename",
        filename: "filename",
        path: "path",
        size: size,
        mimetype: "mimetype",
        resolution: resolution,
        nc: nc,
        subbed: subbed,
        lyrics: lyrics,
        uncen: uncen,
        source: "source",
        overlap: "overlap",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        tags: "tags",
        link: "link"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/restore/video/Bakemonogatari-OP1.webm
```
