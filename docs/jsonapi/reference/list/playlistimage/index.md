---
title: Playlist Image
---

# Playlist Image

---

A playlist image API resource represents the association between a playlist and an image.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

* playlist
* image

## Endpoints

**[Playlist Image Destroy](/list/playlistimage/destroy/)**

The playlist image destroy endpoint deletes a playlist image and returns a confirmation message.

**[Playlist Image Index](/list/playlistimage/index/)**

The playlist image index endpoint displays a listing of playlist image resources.

**[Playlist Image Show](/list/playlistimage/show/)**

The playlist image show endpoint returns a playlist image resource.

**[Playlist Image Store](/list/playlistimage/store/)**

The playlist image store endpoint creates a new playlist image and returns the new playlist image resource.