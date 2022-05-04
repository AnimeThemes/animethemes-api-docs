---
title: AnimeSynonym Show
---

<Block>

# AnimeSynonym Show Endpoint

The AnimeSynonym show endpoint returns an AnimeSynonym resource.

For example, the `/api/animesynonym/1523` endpoint will return the AnimeSynonym resource "Monstory" for the anime Bakemonogatari.

## URL

```sh
GET /api/animesynonym/{id}
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
    animesynonym: {
        id: id,
        text: "text",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/animesynonym/1523
```
</CURL>

</Example>

</Block>