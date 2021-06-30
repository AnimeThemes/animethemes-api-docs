---
title: Synonym
---

# Synonym

---

A synonym API resource represents an alternate title or common abbreviation for an anime.

For example, the anime Bakemonogatari has the synonym "Ghostory".

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| text       | String  | The alternate title or common abbreviations                     |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

* anime

### Endpoints

**[Synonym Show](/synonym/show/)**

The synonym show endpoint returns a synonym resource.

**[Synonym Index](/synonym/index/)**

The synonym index endpoint displays a listing of synonym resources.