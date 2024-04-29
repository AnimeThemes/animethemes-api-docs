---
title: Group
---

# Group

---

A group API resource represents the group that accompanies an AnimeTheme.

For example, English Version is the group for english dubbed AnimeTheme.

## Fields

|    Name               |  Type   | Nullable | Default | Description                                  |
| :-------------------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id                    | Integer | No       | Yes     | The primary key of the resource              |
| name                  | String  | No       | No      | The name of the group                        |
| slug                  | String  | No       | No      | The slug of the group                        |
| video_filename        | String  | Yes      | Yes     | The filename used to the video related       |
| created_at            | Date    | No       | No      | The date that the resource was created       |
| updated_at            | Date    | No       | No      | The date that the resource was last modified |
| deleted_at            | Date    | Yes      | No      | The date that the resource was deleted       |

## Allowed Include Paths

* animethemes
* animethemes.anime
* animethemes.animethemeentries.videos

## Endpoints

**[Group Destroy](/wiki/group/destroy/)**

The group destroy endpoint soft deletes a group and returns the deleted group resource.

**[Group Force Delete](/wiki/group/forceDelete/)**

The group force delete endpoint hard deletes a group and returns a confirmation message.

**[Group Index](/wiki/group/index/)**

The group index endpoint displays a listing of group resources.

**[Group Restore](/wiki/group/restore/)**

The group restore endpoint restores a soft deleted group and returns the restored group resource.

**[Group Show](/wiki/group/show/)**

The group show endpoint returns a group resource.

**[Group Store](/wiki/group/store/)**

The group store endpoint creates a new group and returns the new group resource.

**[Group Update](/wiki/group/update/)**

The group update endpoint updates a group and returns the updated group resource.