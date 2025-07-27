---
title: Role
---

# Role

---

A role API resource represents an assignable label for users that provides a configured group of permissions.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                                                           |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource                                                        |
| name       | String  | No       | Yes     | The label of the resource                                                              |
| guard_name | String  | No       | Yes     | The authentication guard of the resource                                               |
| default    | Boolean | No       | Yes     | Is the role assigned on account verification?                                          |
| color      | String  | Yes      | Yes     | The hex representation of the color used to distinguish the resource                   |
| priority   | Integer | Yes      | Yes     | The weight assigned to the resource, where higher values correspond to higher priority |
| created_at | Date    | No       | No      | The date that the resource was created                                                 |
| updated_at | Date    | No       | No      | The date that the resource was last modified                                           |

## Allowed Include Paths

* permissions