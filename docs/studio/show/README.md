---
title: Studio Show
---

<Block>

# Studio Show Endpoint

The studio show endpoint returns a studio resource.

For example, the `/studio/shaft` endpoint will return the studio resource for the production company Shaft.

## URL

```sh
GET /studio/{slug}
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
    studio: {
        id: id,
        name: "name",
        slug: "slug",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://api.animethemes.moe/studio/shaft
```
</CURL>

</Example>

</Block>