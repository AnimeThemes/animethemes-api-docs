---
title: Artist
---

# Artist

---

An artist API resource represents a musical performer of anime sequences.

For example, Chiwa Saito is the musical performer of the Bakemonogatari OP1 theme, among many others.

### Fields

|    Name    |  Type   | Nullable | Description                                                     |
| :--------: | :-----: | :------: | :-------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                 |
| name       | String  | No       | The primary title of the artist                                 |
| slug       | String  | No       | The URL slug & route key of the resource                        |
| as         | String  | No       | Used to distinguish a performance by alias, character or group  |
| created_at | Date    | No       | The date that the resource was created                          |
| updated_at | Date    | No       | The date that the resource was last modified                    |
| deleted_at | Date    | Yes      | The date that the resource was deleted                          |

### Allowed Include Paths

* songs
* songs.animethemes
* songs.animethemes.anime
* members
* groups
* resources
* images

### Endpoints

**[Artist Show](/artist/show/)**

The artist show endpoint returns an artist resource.

**[Artist Index](/artist/index/)**

The artist index endpoint displays a listing of artist resources.