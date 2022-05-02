---
title: AnimeThemeEntry Show
---

<Block>

# AnimeThemeEntry Show Endpoint

The AnimeThemeEntry show endpoint returns an AnimeThemeEntry resource.

For example, the `/api/animethemeentry/3822` endpoint will return the second version of the Bakemonogatari ED AnimeTheme.

## URL

```sh
GET /api/animethemeentry/{id}
```

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
    animethemeentry: {
        id: id,
        version: version,
        episodes: "episodes",
        nsfw: nsfw,
        spoiler: spoiler,
        notes: "notes",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/animethemeentry/3822
```
</CURL>

</Example>

</Block>