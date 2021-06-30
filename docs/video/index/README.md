---
title: Video Index
---

<Block>

# Video Index Endpoint

The video index endpoint returns a listing of video resources.

## URL

```sh
GET /api/video/
```

## Parameters

| Name         | Required | Description                                                                   |
| :----------: | :------: | :---------------------------------------------------------------------------- |
| fields       | No       | Sparse fieldsets for resource types                                           |
| include      | No       | Inclusion of related resources                                                |
| filter       | No       | Filters for video resources & constraining the inclusion of related resources |
| sort         | No       | The list of fields to sort the resources. Ignored if search query is present. |
| q            | No       | The query to search for matching video resources                              |
| page[size]   | No       | The number of video resources to display for the current page                 |
| page[number] | No       | The page of video resources to display                                        |

## Allowed Sort Fields

* video_id
* basename
* filename
* path
* size
* mimetype
* resolution
* nc
* subbed
* lyrics
* uncen
* source
* overlap
* created_at
* updated_at
* deleted_at

## Filters

* resolution
* nc
* subbed
* lyrics
* uncen
* source
* overlap
* created_at
* updated_at
* deleted_at
* trashed status

## Response

```json
{
    videos: [
        {
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
        },
        ...
    ],
    links: {
        first: "first",
        last: "last",
        prev: "prev",
        next: "next"
    },
    meta: {
        current_page: current_page,
        from: from,
        path: "path",
        per_page: per_page,
        to: to
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/video/
```
</CURL>

</Example>

</Block>