---
title: Artist Show
---

<Block>

# Artist Show Endpoint

The artist show endpoint returns an artist resource.

For example, the `/artist/chiwa_saito` endpoint will return the artist resource for the artist Chiwa Saito.

## URL

```sh
GET /artist/{slug}
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
curl https://api.animethemes.moe/artist/chiwa_saito
```
</CURL>

</Example>

</Block>