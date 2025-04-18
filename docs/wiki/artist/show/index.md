---
title: Artist Show
---

# Artist Show Endpoint

The artist show endpoint returns an artist resource.

For example, the `/artist/chiwa_saitou` endpoint will return the artist resource for the artist Chiwa Saitou.

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
        information: "information",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl https://api.animethemes.moe/artist/chiwa_saitou
```
