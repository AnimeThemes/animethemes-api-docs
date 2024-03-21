---
title: Playlist
---

# Playlist

---

A playlist API resource represents a list of ordered tracks intended for continuous playback.

For example, a "/r/anime's Best OPs and EDs of 2022" playlist may contain a collection of tracks allowing the continuous playback of Best OP and ED nominations for the /r/anime Awards.

## Fields

|    Name       |  Type   | Nullable | Default | Description                                                       |
| :-----------: | :-----: | :------: | :-----: | :---------------------------------------------------------------- |
| id            | String  | No       | Yes     | The primary key of the resource                                   |
| name          | String  | No       | Yes     | The title of the playlist                                         |
| visibility    | Enum    | Yes      | Yes     | The state of who can see the playlist [Private, Unlisted, Public] |
| created_at    | Date    | No       | No      | The date that the resource was created                            |
| updated_at    | Date    | No       | No      | The date that the resource was last modified                      |
| deleted_at    | Date    | Yes      | No      | The date that the resource was deleted                            |
| views_count   | Integer | No       | No      | The number of views recorded for the resource                     |
| tracks_exists | Boolean | No       | No      | The existence of tracks belonging to the resource                 |
| tracks_count  | Integer | No       | No      | The number of tracks belonging to the resource                    |

## Allowed Include Paths

* first
* images
* last
* tracks
* user

## Endpoints

**[Playlist Destroy](/list/playlist/destroy/)**

The playlist destroy endpoint soft deletes a playlist and returns the deleted playlist resource.

**[Playlist Force Delete](/list/playlist/forceDelete/)**

The playlist force delete endpoint hard deletes a playlist and returns a confirmation message.

**[Playlist Index](/list/playlist/index/)**

The playlist index endpoint displays a listing of playlist resources.

**[Playlist Restore](/list/playlist/restore/)**

The playlist restore endpoint restores a soft deleted playlist and returns the restored playlist resource.

**[Playlist Show](/list/playlist/show/)**

The playlist show endpoint returns a playlist resource.

**[Playlist Store](/list/playlist/store/)**

The playlist store endpoint creates a new playlist and returns the new playlist resource.

**[Playlist Update](/list/playlist/update/)**

The playlist update endpoint updates a playlist and returns the updated playlist resource.

**[Playlist Forward Index](/list/playlist/forward/)**

The playlist forward index endpoint returns a listing of tracks for the playlist in forward order.

**[Playlist Backward Index](/list/playlist/backward/)**

The playlist backward index endpoint returns a listing of tracks for the playlist in backward order.