---
title: Series
---

# Series

---

A series API resource represents a collection of related anime.

For example, the Monogatari series is the collection of the Bakemonogatari anime and its related productions.

### Fields

|    Name    |  Type   | Description                                                     |
| :--------: | :-----: | :-------------------------------------------------------------- |
| id         | Integer | The primary key of the resource                                 |
| name       | String  | The primary title of the series                                 |
| slug       | String  | The URL slug & route key of the resource                        |
| created_at | Date    | The date that the resource was created                          |
| updated_at | Date    | The date that the resource was last modified                    |
| deleted_at | Date    | The date that the resource was deleted                          |

### Allowed Include Paths

* anime

### Endpoints

**[Series Show](/series/show/)**

The series show endpoint returns a series resource.

**[Series Index](/series/index/)**

The series index endpoint displays a listing of series resources.