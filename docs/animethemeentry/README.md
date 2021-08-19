---
title: AnimeThemeEntry
---

# AnimeThemeEntry

---

An AnimeThemeEntry API resource represents a version of an AnimeTheme.

For example, the Bakemonogatari ED theme has three AnimeThemeEntries to represent three versions.

### Fields

|    Name    |  Type   | Nullable | Description                                                     |
| :--------: | :-----: | :------: | :-------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                 |
| version    | Integer | Yes      | The version number of the theme                                 |
| episodes   | String  | Yes      | The episodes that the theme is used for                         |
| nsfw       | Boolean | No       | Is not safe for work content included?                          |
| spoiler    | Boolean | No       | Is content included that may spoil the viewer?                  |
| notes      | String  | Yes      | Any additional information for this sequence                    |
| created_at | Date    | No       | The date that the resource was created                          |
| updated_at | Date    | No       | The date that the resource was last modified                    |
| deleted_at | Date    | Yes      | The date that the resource was deleted                          |

### Allowed Include Paths

* animetheme
* animetheme.anime
* videos

### Endpoints

**[AnimeThemeEntry Show](/animethemeentry/show/)**

The AnimeThemeEntry show endpoint returns an AnimeThemeEntry resource.

**[AnimeThemeEntry Index](/animethemeentry/index/)**

The AnimeThemeEntry index endpoint displays a listing of AnimeThemeEntry resources.