---
title: Video Show
---

<Block>

# Video Show Endpoint

The video show endpoint returns a video resource.

For example, `/video/Bakemonogatari-OP1.webm` endpoint will return the Bakemonogatari-OP1.webm video.

## URL

```sh
GET /video/{basename}
```

## Authentication

None

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

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

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/video/Bakemonogatari-OP1.webm
```
</CURL>

</Example>

</Block>