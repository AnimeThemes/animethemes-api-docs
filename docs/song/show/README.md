---
title: Song Show
---

<Block>

# Song Show Endpoint

The song show endpoint returns a song resource.

For example, the `/api/song/3373` endpoint will return the song resource for the Staple Stable song.

## URL

```sh
GET /api/song/{id}
```

## Parameters

| Name    | Required | Description                                             |
| :-----: | :------: | :------------------------------------------------------ |
| fields  | No       | Sparse fieldsets for resource types                     |
| include | No       | Inclusion of related resources                          |
| filter  | No       | Filters to constrain the inclusion of related resources |

## Response

```json
Status: 200

{
    song: {
        id: id,
        title: "title",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

<Example>

<CURL>
```bash
curl https://staging.animethemes.moe/api/song/3373
```
</CURL>

</Example>

</Block>