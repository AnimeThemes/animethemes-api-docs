---
title: Theme
---

# Theme

---

A theme API resource represents an OP or ED sequence for an anime.

For example, the anime Bakemonogatari has five OP themes and one ED theme.

### Fields

|    Name    |  Type   | Nullable | Description                                                      |
| :--------: | :-----: | :------: | :--------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                  |
| type       | Enum    | Yes      | The type of the sequence {OP, ED}                                |
| sequence   | Integer | Yes      | The numeric ordering of the theme                                |
| group      | String  | Yes      | Used to distinguish sequence belongs to dubs, rebroadcasts, etc. |
| slug       | String  | No       | The URL slug & route key of the resource                         |
| created_at | Date    | No       | The date that the resource was created                           |
| updated_at | Date    | No       | The date that the resource was last modified                     |
| deleted_at | Date    | Yes      | The date that the resource was deleted                           |

### Allowed Include Paths

* anime
* anime.images
* entries
* entries.videos
* song
* song.artists

### Endpoints

**[Theme Show](/theme/show/)**

The theme show endpoint returns a theme resource.

**[Theme Index](/theme/index/)**

The theme index endpoint displays a listing of theme resources.