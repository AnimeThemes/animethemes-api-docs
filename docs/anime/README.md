---
title: Anime
---

# Anime

---

An anime API resource represents a production with at least one opening or ending sequence.

For example, Bakemonogatari is an anime production with five opening sequences and one ending sequence.

### Fields

|    Name    |  Type   | Nullable | Description                                                     |
| :--------: | :-----: | :------: | :-------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                 |
| name       | String  | No       | The primary title of the anime                                  |
| slug       | String  | No       | The URL slug & route key of the resource                        |
| year       | Integer | Yes      | The premiere year of the anime                                  |
| season     | Enum    | Yes      | The premiere season of the anime {Winter, Spring, Summer, Fall} |
| synopsis   | String  | Yes      | The brief summary of the anime                                  |
| created_at | Date    | No       | The date that the resource was created                          |
| updated_at | Date    | No       | The date that the resource was last modified                    |
| deleted_at | Date    | Yes      | The date that the resource was deleted                          |

### Allowed Include Paths

* animesynonyms
* animethemes
* animethemes.animethemeentries
* animethemes.animethemeentries.videos
* animethemes.song
* animethemes.song.artists
* images
* resources
* series
* studios

### Endpoints

**[Anime Destroy](/anime/destroy/)**

The anime destroy endpoint soft deletes an anime and returns the deleted anime resource.

**[Anime Force Delete](/anime/forceDelete/)**

The anime force delete endpoint hard deletes an anime and returns a confirmation message.

**[Anime Index](/anime/index/)**

The anime index endpoint displays a listing of anime resources.

**[Anime Show](/anime/show/)**

The anime show endpoint returns an anime resource.

**[Anime Store](/anime/store/)**

The anime store endpoints create a new anime and returns the new anime resource.

**[Anime Update](/anime/update/)**

The anime update endpoint updates an anime and returns the updated anime resource.

**[Year Show](/year/show/)**

The year show endpoint return a listing of anime resources for a given year grouped by season and ordered by name.

**[Year Index](/year/index/)**

The year index endpoint returns a list of unique years from all anime resources.