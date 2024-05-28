---
title: Playlist Update
---

# Playlist Update Endpoint

The playlist update endpoint updates a playlist and returns the updated playlist resource.

For example, the `/playlist/N4hG?visibility=public` endpoint will update the playlist of id N4hG visibility attribute and return the updated playlist resource.

## URL

```sh
PUT|PATCH /playlist/{id}
```

## Authentication

**Required Permission**: update playlist

**Other Requirements**: User must own playlist

**Other Requirements**: User must own playlist & playlist must not be soft deleted

## Parameters

| Name        | Required | Rules                                 |
| :--------:  | :------: | :------------------------------------ |
| name        | No       | string, max:192                       |
| description | No       | string, max:1000                      |
| visibility  | No       | EnumValue [Public, Private, Unlisted] |

## Response

```json
{
    playlist: {
        id: "id",
        name: "name",
        description: "description",
        visibility: "visibility",
        created_at: "created_at",
        updated_at: "updated_at",
        deleted_at: "deleted_at",
        views_count: views_count,
        tracks_exists: tracks_exists,
        tracks_count: tracks_count
    }
}
```

## Example

```bash
curl -X PATCH -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/N4hG
```