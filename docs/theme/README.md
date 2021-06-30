---
title: Theme
---

# Theme

---

A theme API resource represents an OP or ED sequence for an anime.

For example, the anime Bakemonogatari has five OP themes and one ED theme.

### Fields

|    Name    |  Type   | Description                                                      |
| :--------: | :-----: | :--------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                  |
| type       | Enum    | The type of the sequence {OP, ED}                                |
| sequence   | Integer | The numeric ordering of the theme                                |
| group      | String  | Used to distinguish sequence belongs to dubs, rebroadcasts, etc. |
| slug       | String  | The URL slug & route key of the resource                         |
| created_at | Date    | The date that the resource was created                           |
| updated_at | Date    | The date that the resource was last modified                     |
| deleted_at | Date    | The date that the resource was deleted                           |

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