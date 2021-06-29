---
title: Anime
---

# Anime

---

An Anime API Resource represents a production with at least one opening or ending sequence.

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| name       | String  | The primary title of the anime                                  |
| slug       | String  | The URL slug & route key of the resource                        |
| year       | Integer | The premiere year of the anime                                  |
| season     | Enum    | The premiere season of the anime {Winter, Spring, Summer, Fall} |
| synopsis   | String  | The brief summary of the anime                                  |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

* synonyms
* series
* themes
* themes.entries.videos
* themes.song
* themes.song.artists
* resources
* images

### Endpoints

**[Anime Show](/anime/show/)**

The Anime Show endpoint returns an Anime Resource.

**[Anime Index](/anime/index/)**

The Anime Index endpoint displays a listing of Anime Resources.

**Year Show**

The Year Show endpoint

**Year Index**

The Year Index endpoint