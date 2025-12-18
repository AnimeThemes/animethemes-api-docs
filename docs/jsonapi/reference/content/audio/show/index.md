---
title: Audio Show
---

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

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| filter  | No       | Filters to constrain the inclusion of related resources |
| include | No       | Inclusion of related resources                          |
| sort    | No       | Sort related resources                                  |

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
curl https://api.animethemes.moe/audio/Bakemonogatari-OP1.ogg
```
