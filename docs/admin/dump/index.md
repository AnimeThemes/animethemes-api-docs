---
title: Dump
---

# Dump

---

A dump API resource represents a database dump of selected tables at a given point in time. 

For example, the animethemes-db-dump-wiki-1663559663946.sql dump represents the database dump of wiki tables performed at 2022-09-19.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                 |
| :--------: | :-----: | :------: | :-----: | :--------------------------------------------|
| id         | Integer | No       | Yes     | The primary key of the resource              |
| path       | String  | No       | Yes     | The path of the file in storage              |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted       |
| link       | String  | No       | Yes     | The URL to download the file from storage    |

## Allowed Include Paths

None

## Endpoints

**[Dump Destroy](/admin/dump/destroy/)**

The dump destroy endpoint soft deletes a dump and returns the deleted dump resource.

**[Dump Force Delete](/admin/dump/forceDelete/)**

The dump force delete endpoint hard deletes a dump and returns a confirmation message.

**[Dump Index](/admin/dump/index/)**

The dump index endpoint displays a listing of dump resources.

**[Dump Restore](/admin/dump/restore/)**

The dump restore endpoint restores a soft deleted dump and returns the restored dump resource.

**[Dump Show](/admin/dump/show/)**

The dump show endpoint returns a dump resource.

**[Dump Store](/admin/dump/store/)**

The dump store endpoint creates a new dump and returns the new dump resource.

**[Dump Update](/admin/dump/update/)**

The dump update endpoint updates a dump and returns the updated dump resource.