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
| sort         | No       | The list of fields to sort the resources                                      |
| q            | No       | The query to search for matching video resources                              |
| page[size]   | No       | The number of video resources to display for the current page                 |
| page[number] | No       | The page of video resources to display                                        |

## Allowed Sort Fields

|    Name    | Description                                                              |
| :--------: | :----------------------------------------------------------------------- |
| id         | Sort resources on the primary key                                        |
| basename   | Sort resources on the basename of the file in storage                    |
| filename   | Sort resources on the filename of the file in storage                    |
| path       | Sort resources on the path of the file in storage                        |
| size       | Sort resources on the size of hte file in storage in Bytes               |
| mimetype   | Sort resources on the media type of the file in storage                  |
| resolution | Sort resources on the frame height of the file in storage                |
| nc         | Sort resources on whether the video is creditless                        |
| subbed     | Sort resources on whether the video includes subtitles of dialogue       |
| lyrics     | Sort resources on whether the video includes subtitles of song lyrics    |
| uncen      | Sort resources on whether the video is an uncensored version             |
| source     | Sort resources on the origin of the video                                |
| overlap    | Sort resources on the degree of overlap between the sequence and episode |
| created_at | Sort resources on the resource creation date                             |
| updated_at | Sort resources on the resource last modified date                        |
| deleted_at | Sort resources on the resource deletion date                             |
| random     | Sort resources randomly. Ignored if other sort fields are provided.      |

## Filters

|    Name    | Description                                                                |
| :--------: | :------------------------------------------------------------------------- |
| id         | Filter resources on the primary key                                        |
| basename   | Filter resources on the basename of the file in storage                    |
| filename   | Filter resources on the filename of the file in storage                    |
| path       | Filter resources on the path of the file in storage                        |
| size       | Filter resources on the size of hte file in storage in Bytes               |
| mimetype   | Filter resources on the media type of the file in storage                  |
| resolution | Filter resources on the frame height of the file in storage                |
| nc         | Filter resources on whether the video is creditless                        |
| subbed     | Filter resources on whether the video includes subtitles of dialogue       |
| lyrics     | Filter resources on whether the video includes subtitles of song lyrics    |
| uncen      | Filter resources on whether the video is an uncensored version             |
| source     | Filter resources on the origin of the video                                |
| overlap    | Filter resources on the degree of overlap between the sequence and episode |
| created_at | Filter resources on the resource creation date                             |
| updated_at | Filter resources on the resource last modified date                        |
| deleted_at | Filter resources on the resource deletion date                             |
| trashed    | Filter resources on trashed (deleted) status {With, Without, Only}         |

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