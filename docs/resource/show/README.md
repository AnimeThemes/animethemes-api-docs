---
title: Resource Show
---

<Block>

# Resource Show Endpoint

The resource show endpoint returns an external resource.

For example, the `/api/resource/1083` will return the MyAnimeList resource for the Bakemonogatari anime.

## URL

```sh
GET /api/resource/{id}
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
    resource: {
        id: id,
        link: "link",
        external_id: external_id,
        site: "site",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        link: "link"
    }
}
```

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/resource/1083
```
</CURL>

</Example>

</Block>