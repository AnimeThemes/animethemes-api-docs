---
title: Anime Theme
---

# Anime Theme

---

An anime theme API resource represents an OP or ED sequence for an anime.

For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.

### Fields

|    Name    |  Type   | Nullable | Description                                                      |
| :--------: | :-----: | :------: | :--------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                  |
| type       | Enum    | Yes      | The type of the sequence [OP, ED]                                |
| sequence   | Integer | Yes      | The numeric ordering of the theme                                |
| group      | String  | Yes      | Used to distinguish sequence belongs to dubs, rebroadcasts, etc. |
| slug       | String  | No       | The URL slug & route key of the resource                         |
| created_at | Date    | No       | The date that the resource was created                           |
| updated_at | Date    | No       | The date that the resource was last modified                     |
| deleted_at | Date    | Yes      | The date that the resource was deleted                           |

### Allowed Include Paths

* anime
* anime.images
* animethemeentries
* animethemeentries.videos
* song
* song.artists

### Endpoints

**[Anime Theme Destroy](/wiki/animetheme/destroy/)**

The anime theme destroy endpoint soft deletes an anime theme and returns the deleted anime theme resource.

**[Anime Theme Force Delete](/wiki/animetheme/forceDelete/)**

The anime theme force delete endpoint hard deletes an anime theme and returns a confirmation message.

**[Anime Theme Index](/wiki/animetheme/index/)**

The anime theme index endpoint displays a listing of anime theme resources.

**[Anime Theme Restore](/wiki/animetheme/restore/)**

The anime theme restore endpoint restores a soft deleted anime theme and returns the restored anime theme resource.

**[Anime Theme Show](/wiki/animetheme/show/)**

The anime theme show endpoint returns an anime theme resource.

**[Anime Theme Store](/wiki/animetheme/store/)**

The anime theme store endpoint creates a new anime theme and returns the new anime theme resource.

**[Anime Theme Update](/wiki/animetheme/update/)**

The anime theme update endpoint updates an anime theme and returns the updated anime theme resource.