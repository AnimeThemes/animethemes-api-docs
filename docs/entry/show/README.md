---
title: Entry Show
---

<Block>

# Entry Show Endpoint

The entry show endpoint returns an entry resource.

For example, the `/api/entry/3822` endpoint will return the second version of the Bakemonogatari ED theme.

## URL

```sh
GET /api/entry/{id}
```00

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

## Response

```json
{
    entry: {
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
curl https://staging.animethemes.moe/api/entry/3822
```
</CURL>

</Example>

</Block>