---
title: Announcement
---

# Announcement

---

An announcement API resource represents a site-wide message to be broadcasted on the homepage.

For example, if video streaming is disabled, the site staff may issue a "Video streaming has been disabled!" announcement.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                  |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource              |
| content    | String  | No       | Yes     | The announcement text                        |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

None

## Endpoints

**[Announcement Destroy](/admin/announcement/destroy/)**

The announcement destroy endpoint deletes an announcement and returns a confirmation message.

**[Announcement Index](/admin/announcement/index/)**

The announcement index endpoint displays a listing of announcement resources.

**[Announcement Show](/admin/announcement/show/)**

The announcement show endpoint returns an announcement resource.

**[Announcement Store](/admin/announcement/store/)**

The announcement store endpoint creates a new announcement and returns the new announcement resource.

**[Announcement Update](/admin/announcement/update/)**

The announcement update endpoint updates an announcement and returns the updated announcement resource.