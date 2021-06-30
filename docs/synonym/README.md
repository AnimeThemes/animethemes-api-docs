---
title: Synonym
---

# Synonym

---

A synonym API resource represents an alternate title or common abbreviation for an anime.

For example, the anime Bakemonogatari has the synonym "Ghostory".

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

**[Synonym Show](/synonym/show/)**

The synonym show endpoint returns a synonym resource.

**[Synonym Index](/synonym/index/)**

The synonym index endpoint displays a listing of synonym resources.