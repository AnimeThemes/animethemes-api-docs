---
title: Video Store
---

# Video Store Endpoint

The video store endpoint creates a new video and returns the new video resource.

For example, the `/video?basename=Bakemonogatari-OP1.webm&filename=Bakemonogatari-OP1&mimetype=video/webm&path=2009/Summer/Bakemonogatari-OP1.webm&size=50602649` endpoint will create a new Bakemonogatari-OP1.webm video and return the new Bakemonogatari-OP1.webm resource.

## URL

```sh
POST /video
```

## Authentication

**Required Permission**: create video

**Roles with Permission**: Admin

## Parameters

| Name       | Required | Rules                                  |
| :--------: | :------: | :------------------------------------- |
| basename   | Yes      | string, max:192                        |
| filename   | Yes      | string, max:192                        |
| path       | Yes      | string, max:192                        |
| size       | Yes      | integer, min:0                         |
| mimetype   | Yes      | string, max:192                        |
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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/video/
```
