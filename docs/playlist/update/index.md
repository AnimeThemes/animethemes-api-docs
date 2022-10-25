---
title: Playlist Update
---

# Playlist Update Endpoint

The playlist update endpoint updates a playlist and returns the updated playlist resource.

For example, the `/playlist/1?visibility=public` endpoint will update the playlist of id `1` visibility attribute and return the updated playlist resource.

## URL

```sh
PUT|PATCH /playlist/{id}
```

## Authentication

**Required Permission**: update playlist

**Other Requirements**: User must own playlist

## Parameters

| Name       | Required | Rules                                       |
| :--------: | :------: | :------------------------------------------ |
| first_id   | No       | Track ID exists & Track Playlist ID matches |
| last_id    | No       | Track ID exists & Track Playlist ID matches |
| name       | No       | string, max:192                             |
| visibility | No       | EnumValue [Public, Private, Unlisted]       |

## Response

```json
{
    playlist: {
        id: id,
        name: "name",
        visibility: "visibility",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at"
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/1
```