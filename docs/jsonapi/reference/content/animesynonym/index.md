---
title: Anime Synonym
---

# Anime Synonym

---

An anime synonym API resource represents an alternate title or common abbreviation for an anime.

For example, the anime Bakemonogatari has the anime synonym "Monstory".

## Fields

|    Name    |  Type   | Nullable | Default | Description                                            |
| :--------: | :-----: | :------: | :-----: | :----------------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource                        |
| text       | String  | Yes      | Yes     | The alternate title or common abbreviations            |
| type       | Enum    | No       | Yes     | The type of the synonym [Other, Native, English Short] |
| created_at | Date    | No       | No      | The date that the resource was created                 |
| updated_at | Date    | No       | No      | The date that the resource was last modified           |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted                 |

## Allowed Include Paths

* anime

## Endpoints

**[Anime Synonym Destroy](/content/animesynonym/destroy/)**

The anime synonym destroy endpoint soft deletes an anime synonym and returns the deleted anime synonym resource.

**[Anime Synonym Force Delete](/content/animesynonym/forceDelete/)**

The anime synonym force delete endpoint hard deletes an anime synonym and returns a confirmation message.

**[Anime Synonym Index](/content/animesynonym/index/)**

The anime synonym index endpoint displays a listing of anime synonym resources.

**[Anime Synonym Restore](/content/animesynonym/restore/)**

The anime synonym restore endpoint restores a soft deleted anime synonym and returns the restored anime synonym resource.

**[Anime Synonym Show](/content/animesynonym/show/)**

The anime synonym show endpoint returns an anime synonym resource.

**[Anime Synonym Store](/content/animesynonym/store/)**

The anime synonym store endpoint creates a new anime synonym and returns the new anime synonym resource.

**[Anime Synonym Update](/content/animesynonym/update/)**

The anime synonym update endpoint updates an anime synonym and returns the updated anime synonym resource.