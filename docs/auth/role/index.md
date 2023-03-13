---
title: Role
---

# Role

---

A role API resource represents an assignable label for users that provides a configured group of permissions.

## Fields

|    Name    |  Type   | Nullable | Default |  Description                                  |
| :--------: | :-----: | :------: | :-----: | :-------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource               |
| name       | String  | No       | Yes     | The label of the resource                     |
| guard_name | String  | No       | Yes     | The authentication guard of the resource      |
| default    | Boolean | No       | Yes     | Is the role assigned on account verification? |
| created_at | Date    | No       | No      | The date that the resource was created        |
| updated_at | Date    | No       | No      | The date that the resource was last modified  |