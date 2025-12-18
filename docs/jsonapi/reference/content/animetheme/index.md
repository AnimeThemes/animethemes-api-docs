---
title: Anime Theme
---

# Anime Theme

---

An anime theme API resource represents an OP or ED sequence for an anime.

For example, the anime Bakemonogatari has five OP anime themes and one ED anime theme.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                                      |
| :--------: | :-----: | :------: | :-----: | :--------------------------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource                                  |
| type       | Enum    | Yes      | Yes     | The type of the sequence [OP, ED]                                |
| sequence   | Integer | Yes      | Yes     | The numeric ordering of the theme                                |
| slug       | String  | No       | Yes     | The URL slug & route key of the resource                         |
| created_at | Date    | No       | No      | The date that the resource was created                           |
| updated_at | Date    | No       | No      | The date that the resource was last modified                     |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted                           |

## Allowed Include Paths

* anime
* anime.images
* animethemeentries
* animethemeentries.videos
* group
* song
* song.artists

## Endpoints

**[Anime Theme Destroy](/content/animetheme/destroy/)**

The anime theme destroy endpoint soft deletes an anime theme and returns the deleted anime theme resource.

**[Anime Theme Force Delete](/content/animetheme/forceDelete/)**

The anime theme force delete endpoint hard deletes an anime theme and returns a confirmation message.

**[Anime Theme Index](/content/animetheme/index/)**

The anime theme index endpoint displays a listing of anime theme resources.

**[Anime Theme Restore](/content/animetheme/restore/)**

The anime theme restore endpoint restores a soft deleted anime theme and returns the restored anime theme resource.

**[Anime Theme Show](/content/animetheme/show/)**

The anime theme show endpoint returns an anime theme resource.

**[Anime Theme Store](/content/animetheme/store/)**

The anime theme store endpoint creates a new anime theme and returns the new anime theme resource.

**[Anime Theme Update](/content/animetheme/update/)**

The anime theme update endpoint updates an anime theme and returns the updated anime theme resource.