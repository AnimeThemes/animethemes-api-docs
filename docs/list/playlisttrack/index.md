---
title: Playlist Track
---

# Playlist Track

---

A playlist track API resource represents an entry in a playlist.

For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a track for the ParipiKoumei-OP1.webm video.

## Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

## Allowed Include Paths

* next
* playlist
* previous
* video

## Endpoints

**[Playlist Track Destroy](/list/playlisttrack/destroy/)**

The playlist track destroy endpoint soft deletes a playlist track and returns the deleted playlist track resource.

**[Playlist Track Force Delete](/list/playlisttrack/forceDelete/)**

The playlist track force delete endpoint hard deletes a playlist track and returns a confirmation message.

**[Playlist Track Index](/list/playlisttrack/index/)**

The playlist track index endpoint displays a listing of playlist track resources.

**[Playlist Track Restore](/list/playlisttrack/restore/)**

The playlist track restore endpoint restores a soft deleted playlist track and returns the restored playlist track resource.

**[Playlist Track Show](/list/playlisttrack/show/)**

The playlist track show endpoint returns a playlist track resource.

**[Playlist Track Store](/list/playlisttrack/store/)**

The playlist track store endpoint creates a new playlist track and returns the new playlist track resource.

**[Playlist Track Update](/list/playlisttrack/update/)**

The playlist track update endpoint updates a playlist track and returns the updated playlist track resource.