---
title: Video Destroy
---

# Video Destroy Endpoint

The video destroy endpoint soft deletes a video and returns the deleted video resource.

For example, the `/video/Bakemonogatari-OP1.webm` endpoint will soft delete the Bakemonogatari-OP1.webm video and return the deleted Bakemonogatari-OP1.webm resource.

## URL

```sh
DELETE /video/{basename}
```

## Authentication

**Required Permission**: delete video

**Roles with Permission**: Encoder, Admin

**Other Requirements**: Video must not be soft deleted

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
        link: "link",
        views_count: views_count
    }
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/video/Bakemonogatari-OP1.webm
```
