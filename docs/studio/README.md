---
title: Studio
---

# Studio

---

A studio API resource represents a company that produces anime.

For example, Shaft is the studio that produced the anime Bakemonogatari.

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| name       | String  | No       | The primary title of the studio              |
| slug       | String  | No       | The URL slug & route key of the resource     |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

* anime

### Endpoints

**[Studio Show](/studio/show/)**

The studio show endpoint returns a studio resource.

**[Studio Index](/studio/index/)**

The studio index endpoint displays a listing of studio resources.