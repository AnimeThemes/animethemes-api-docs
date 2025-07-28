---
title: Feature
---

# Feature

---

A feature API resource represents a feature flag that enable/disable site functionalities.

For example, the 'allow_discord_notifications' feature enables/disables discord notifications for the configured bot.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                 |
| :--------: | :-----: | :------: | :-----: | :--------------------------------------------|
| id         | Integer | No       | Yes     | The primary key of the resource              |
| name       | String  | No       | Yes     | The title of the resource                    |
| value      | String  | No       | Yes     | The value of the resource                    |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |

## Allowed Include Paths

None

## Endpoints

**[Feature Index](/admin/feature/index/)**

The feature index endpoint displays a listing of feature resources.

**[Feature Show](/admin/feature/show/)**

The feature show endpoint returns a feature resource.

**[Feature Update](/admin/feature/update/)**

The feature update endpoint updates a feature and returns the updated feature resource.