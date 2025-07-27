---
title: Playlist Track
---

# Playlist Track

---

A playlist track API resource represents an entry in a playlist.

For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | String  | No       | Yes     | The primary key of the resource              |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* next
* playlist
* previous
* video
* animethemeentry.animetheme.group
* animethemeentry.animetheme.anime.images
* animethemeentry.animetheme.song.artists
* video.audio

## Endpoints

**[Playlist Track Destroy](/list/playlist/track/destroy/)**

The playlist track destroy endpoint soft deletes a playlist track and returns the deleted playlist track resource.

**[Playlist Track Force Delete](/list/playlist/track/forceDelete/)**

The playlist track force delete endpoint hard deletes a playlist track and returns a confirmation message.

**[Playlist Track Index](/list/playlist/track/index/)**

The playlist track index endpoint displays a listing of playlist track resources.

**[Playlist Track Restore](/list/playlist/track/restore/)**

The playlist track restore endpoint restores a soft deleted playlist track and returns the restored playlist track resource.

**[Playlist Track Show](/list/playlist/track/show/)**

The playlist track show endpoint returns a playlist track resource.

**[Playlist Track Store](/list/playlist/track/store/)**

The playlist track store endpoint creates a new playlist track and returns the new playlist track resource.

**[Playlist Track Update](/list/playlist/track/update/)**

The playlist track update endpoint updates a playlist track and returns the updated playlist track resource.

**[Track Forward Index](/list/playlist/track/forward/)**

The track forward index endpoint returns a listing of tracks for the playlist in forward order after the specified track.

**[Track Backward Index](/list/playlist/track/backward/)**

The track backward index endpoint returns a listing of tracks for the playlist in backward order before the specified track.