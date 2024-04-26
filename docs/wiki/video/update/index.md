---
title: Video Update
---

# Video Update Endpoint

The video update endpoint updates a video and returns the updated video resource.

For example, the `/video/Bakemonogatari-OP1.webm?resolution=1080` endpoint will update the Bakemonogatari-OP1.webm video resolution attribute and return the updated Bakemonogatari-OP1.webm resource.

## URL

```sh
PUT|PATCH /video/{basename}
```

## Authentication

**Required Permission**: update video

**Roles with Permission**: Wiki Editor, Encoder, Admin

**Other Requirements**: Video must not be soft deleted

## Parameters

| Name       | Required | Rules                                  |
| :--------: | :------: | :------------------------------------- |
| resolution | No       | integer, min:360, max:1080             |
| nc         | No       | boolean                                |
| subbed     | No       | boolean                                |
| lyrics     | No       | boolean                                |
| uncen      | No       | boolean                                |
| overlap    | No       | EnumValue [None, Trans, Over]          |
| source     | No       | EnumValue [Web, RAW, BD, DVD, VHS, LD] |
| audio_id   | No       | integer, Audio ID exists               |

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
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/video/Bakemonogatari-OP1.webm
```
