---
title: Studio
---

# Studio

---

A studio API resource represents a company that produces anime.

For example, Shaft is the studio that produced the anime Bakemonogatari.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource              |
| name       | String  | No       | Yes     | The primary title of the studio              |
| slug       | String  | No       | Yes     | The URL slug & route key of the resource     |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* anime
* images
* resources

## Allowed Pivots

* studioresource

## Endpoints

**[Studio Destroy](/wiki/studio/destroy/)**

The studio destroy endpoint soft deletes a studio and returns the deleted studio resource.

**[Studio Force Delete](/wiki/studio/forceDelete/)**

The studio force delete endpoint hard deletes a studio and returns a confirmation message.

**[Studio Index](/wiki/studio/index/)**

The studio index endpoint displays a listing of studio resources.

**[Studio Restore](/wiki/studio/restore/)**

The studio restore endpoint restores a soft deleted studio and returns the restored studio resource.

**[Studio Show](/wiki/studio/show/)**

The studio show endpoint returns a studio resource.

**[Studio Store](/wiki/studio/store/)**

The studio store endpoint creates a new studio and returns the new studio resource.

**[Studio Update](/wiki/studio/update/)**

The studio update endpoint updates a studio and returns the updated studio resource.