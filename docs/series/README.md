---
title: Series
---

# Series

---

A series API resource represents a collection of related anime.

For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.

### Fields

|    Name    |  Type   | Nullable | Description                                  |
| :--------: | :-----: | :------: | :------------------------------------------- |
| id         | Integer | No       | The primary key of the resource              |
| name       | String  | No       | The primary title of the series              |
| slug       | String  | No       | The URL slug & route key of the resource     |
| created_at | Date    | No       | The date that the resource was created       |
| updated_at | Date    | No       | The date that the resource was last modified |
| deleted_at | Date    | Yes      | The date that the resource was deleted       |

### Allowed Include Paths

* anime

### Endpoints

**[Series Show](/series/show/)**

The series show endpoint returns a series resource.

**[Series Index](/series/index/)**

The series index endpoint displays a listing of series resources.