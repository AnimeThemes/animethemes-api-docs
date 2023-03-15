---
title: Global Search
---

# Global Search Endpoint

The global search endpoint returns a listing of resources that match a given search term.

## URL

```sh
GET /search/
```

## Authentication

None

## Parameters

| Name          | Required | Description                                                                  |
| :----------:  | :------: | :--------------------------------------------------------------------------- |
| fields        | No       | Sparse fieldsets for resource types                                          |
| filter        | No       | Filters for wiki resources & constraining the inclusion of related resources |
| include[type] | No       | Inclusion of related resources by type                                       |
| page[limit]   | No       | The maximum number of wiki resource matches to return                        |
| q             | Yes      | The query to search for matching wiki resources                              |
| sort[type]    | No       | The list of fields to sort the resources                                     |

## Response

```json
{
    search: {
        anime: [
            {
                id: id,
                name: "name",
                slug: "slug",
                year: year,
                season: "season", 
                synopsis: "synopsis",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
        animethemes: [
            {
                id: id,
                type: "type",
                sequence: sequence,
                group: "group",
                slug: "slug",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
        artists: [
            {
                id: id,
                name: "name",
                slug: "slug",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
        playlists: [
            {
                id: id,
                name: "name",
                visibility: "visibility",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
        series: [
            {
                id: id,
                name: "name",
                slug: "slug",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
        songs: [
            {
                id: id,
                title: "title",
                created_at: "created_at",
                updated_at: "updated_at",
                deleted_at: "deleted_at"
            }
        ],
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
            }
        ]
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/search?q=
```
