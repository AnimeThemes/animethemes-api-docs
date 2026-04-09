---
title: Artist Song
---

# Artist Song

---

An artist song API resource represents the association between an artist and an song.

## Fields

|    Name      |  Type   | Nullable | Default | Description                                           |
| :----------: | :-----: | :------: | :-----: | :---------------------------------------------------- |
| created_at   | Date    | No       | No      | The date that the resource was created                |
| updated_at   | Date    | No       | No      | The date that the resource was last modified          |
| alias        | String  | Yes      | Yes     | Used to distinguish a performance by alias            |
| as           | String  | Yes      | Yes     | Used to distinguish a performance by character        |
| member_alias | String  | Yes      | Yes     | Used to distinguish a member performance by alias     |
| member_as    | String  | Yes      | Yes     | Used to distinguish a member performance by character |
| relevance    | Int     | No       | Yes     | Used to sort the song performances by its relevance   |

## Allowed Include Paths

* artist
* song