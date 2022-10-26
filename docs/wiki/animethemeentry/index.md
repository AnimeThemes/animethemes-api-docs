---
title: Anime Theme Entry
---

# Anime Theme Entry

---

An anime theme entry API resource represents a version of an anime theme.

For example, the ED theme of the Bakemonogatari anime has three anime theme entries to represent three versions.

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

**[Anime Theme Entry Destroy](/wiki/animethemeentry/destroy/)**

The anime theme entry destroy endpoint soft deletes an anime theme entry and returns the deleted anime theme entry resource.

**[Anime Theme Entry Force Delete](/wiki/animethemeentry/forceDelete/)**

The anime theme entry force delete endpoint hard deletes an anime theme entry and returns a confirmation message.

**[Anime Theme Entry Index](/wiki/animethemeentry/index/)**

The anime theme entry index endpoint displays a listing of anime theme entry resources.

**[Anime Theme Entry Show](/wiki/animethemeentry/show/)**

The anime theme entry show endpoint returns an anime theme entry resource.

**[Anime Theme Entry Store](/wiki/animethemeentry/store/)**

The anime theme entry store endpoint creates a new anime theme entry and returns the new anime theme entry resource.

**[Anime Theme Entry Update](/wiki/animethemeentry/update/)**

The anime theme entry update endpoint updates an anime theme entry and returns the updated anime theme entry resource.