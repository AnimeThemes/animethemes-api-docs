---
title: Artist
---

# Artist

---

An artist API resource represents a musical performer of anime sequences.

For example, Chiwa Saitou is the musical performer of the Bakemonogatari OP1 theme, among many others.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                                    |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource                                |
| name       | String  | No       | Yes     | The primary title of the artist                                |
| slug       | String  | No       | Yes     | The URL slug & route key of the resource                       |
| as         | String  | No       | Yes     | Used to distinguish a performance by alias, character or group |
| created_at | Date    | No       | No      | The date that the resource was created                         |
| updated_at | Date    | No       | No      | The date that the resource was last modified                   |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted                         |

## Allowed Include Paths

* groups
* images
* members
* resources
* songs
* songs.animethemes
* songs.animethemes.anime

## Endpoints

**[Artist Destroy](/wiki/artist/destroy/)**

The artist destroy endpoint soft deletes an artist and returns the deleted artist resource.

**[Artist Force Delete](/wiki/artist/forceDelete/)**

The artist force delete endpoint hard deletes an artist and returns a confirmation message.

**[Artist Index](/wiki/artist/index/)**

The artist index endpoint displays a listing of artist resources.

**[Artist Restore](/wiki/artist/restore/)**

The artist restore endpoint restores a soft deletesd artist and returns the restored artist resource.

**[Artist Show](/wiki/artist/show/)**

The artist show endpoint returns an artist resource.

**[Artist Store](/wiki/artist/store/)**

The artist store endpoint creates a new artist and returns the new artist resource.

**[Artist Update](/wiki/artist/update/)**

The artist update endpoint updates an artist and returns the updated artist resource.