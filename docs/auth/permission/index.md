---
title: Permission
---

# Permission

---

A permission API resource represents an assignable label for users and roles that authorizes a particular action in AnimeThemes.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                 |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource              |
| name       | String  | No       | Yes     | The label of the resource                    |
| guard_name | String  | No       | Yes     | The authentication guard of the resource     |
| created_at | Date    | No       | No      | The date that the resource was created       |
| updated_at | Date    | No       | No      | The date that the resource was last modified |