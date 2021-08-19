---
title: Global Search
---

<Block>

# Global Search Endpoint

The global search endpoint returns a listing of wiki resources that match a given search term.

## URL

```sh
GET /api/search/
```

## Parameters

| Name          | Required | Description                                                                  |
| :----------:  | :------: | :--------------------------------------------------------------------------- |
| fields        | No       | Sparse fieldsets for resource types                                          |
| include[type] | No       | Inclusion of related resources by type                                       |
| filter        | No       | Filters for wiki resources & constraining the inclusion of related resources |
| q             | Yes      | The query to search for matching wiki resources                              |
| limit         | No       | The maximum number of wiki resource matches to return                        |

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

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/search?q=
```
</CURL>

</Example>

</Block>