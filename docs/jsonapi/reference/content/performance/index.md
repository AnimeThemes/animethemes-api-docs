---
title: Performance
---

# Performance

---

A performance API resource represents the association between an artist and a song.

## Fields

|    Name      |  Type   | Nullable | Default | Description                                           |
| :----------: | :-----: | :------: | :-----: | :---------------------------------------------------- |
| id           | Integer | No       | Yes     | The primary key of the resource                       |
| alias        | String  | Yes      | Yes     | Used to distinguish a performance by alias            |
| as           | String  | Yes      | Yes     | Used to distinguish a performance by character        |
| member_alias | String  | Yes      | Yes     | Used to distinguish a member performance by alias     |
| member_as    | String  | Yes      | Yes     | Used to distinguish a member performance by character |
| relevance    | Int     | No       | Yes     | Used to sort the song performances by its relevance   |
| created_at   | Date    | No       | No      | The date that the resource was created                |
| updated_at   | Date    | No       | No      | The date that the resource was last modified          |
| deleted_at   | Date    | Yes      | No      | The date that the resource was deleted                |

## Allowed Include Paths

* artist
* member
* song

## Endpoints

**[Performance Index](/content/performance/index/)**

The performance index endpoint displays a listing of performance resources.

**[Performance Show](/content/performance/show/)**

The performance show endpoint returns a performance resource.