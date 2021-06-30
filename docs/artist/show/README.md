---
title: Artist Show
---

<Block>

# Artist Show Endpoint

The artist show endpoint returns an artist resource.

For example, the `/api/artist/chiwa_saito` endpoint will return the artist resource for the artist Chiwa Saito.

## URL

```sh
GET /api/artist/{slug}
```

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

## Response

```json
{
    artist: {
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
curl https://staging.animethemes.moe/api/artist/chiwa_saito
```
</CURL>

</Example>

</Block>