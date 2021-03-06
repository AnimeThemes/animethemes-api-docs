---
title: Anime Synonym
---

# Anime Synonym

---

An anime synonym API resource represents an alternate title or common abbreviation for an anime.

For example, the anime Bakemonogatari has the anime synonym "Monstory".

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| text       | String  | Yes      | The alternate title or common abbreviations  |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

* anime

### Endpoints

**[Anime Synonym Destroy](/animesynonym/destroy/)**

The anime synonym destroy endpoint soft deletes an anime synonym and returns the deleted anime synonym resource.

**[Anime Synonym Force Delete](/animesynonym/forceDelete/)**

The anime synonym force delete endpoint hard deletes an anime synonym and returns a confirmation message.

**[Anime Synonym Index](/animesynonym/index/)**

The anime synonym index endpoint displays a listing of anime synonym resources.

**[Anime Synonym Show](/animesynonym/show/)**

The anime synonym show endpoint returns an anime synonym resource.

**[Anime Synonym Store](/animesynonym/store/)**

The anime synonym store endpoint creates a new anime synonym and returns the new anime synonym resource.

**[Anime Synonym Update](/animesynonym/update/)**

The anime synonym update endpoint updates an anime synonym and returns the updated anime synonym resource.