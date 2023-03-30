---
title: Playlist Store
---

# Playlist Store Endpoint

The playlist store endpoint creates a new playlist and returns the new playlist resource.

For example, the `/playlist?name=Best+OPs` endpoint will create a new playlist and return the new playlist resource.

## URL

```sh
POST /playlist
```

## Authentication

**Required Permission**: create playlist

## Parameters

| Name       | Required | Rules                                 |
| :--------: | :------: | :------------------------------------ |
| name       | Yes      | string, max:192                       |
| visibility | Yes      | EnumValue [Public, Private, Unlisted] |

## Response

```json
{
    playlist: {
        id: "id",
        name: "name",
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
curl -X POST -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlist/
```
