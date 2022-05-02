---
title: AnimeSynonym
---

# AnimeSynonym

---

An AnimeSynonym API resource represents an alternate title or common abbreviation for an anime.

For example, the anime Bakemonogatari has the AnimeSynonym "Monstory".

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

**[AnimeSynonym Show](/animesynonym/show/)**

The AnimeSynonym show endpoint returns an AnimeSynonym resource.

**[AnimeSynonym Index](/animesynonym/index/)**

The AnimeSynonym index endpoint displays a listing of AnimeSynonym resources.