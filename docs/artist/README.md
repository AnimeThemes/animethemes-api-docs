---
title: Artist
---

# Artist

---

An Artist API Resource represents a musical performer of Anime sequences.

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| name       | String  | The primary title of the artist                                 |
| slug       | String  | The URL slug & route key of the resource                        |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

* songs
* songs.themes
* songs.themes.anime
* members
* groups
* resources
* images

### Endpoints

**[Artist Show](/artist/show/)**

The Artist Show endpoint returns an Artist Resource.

**[Artist Index](/artist/index/)**

The Artist Index endpoint displays a listing of Artist Resources.