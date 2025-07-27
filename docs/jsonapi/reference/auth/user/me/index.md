---
title: Me
---

# Me

---

The "Me" namespace is a collection of endpoints that pertain to the currently authenticated user.

## Fields

|    Name                 |  Type   | Nullable | Default |  Description                                        |
| :---------------------: | :-----: | :------: | :-----: | :-------------------------------------------------- |
| id                      | Integer | No       | Yes     | The primary key of the resource                     |
| name                    | String  | No       | Yes     | The username of the resource                        |
| email                   | String  | No       | Yes     | The email address of the resource                   |
| email_verified_at       | Date    | Yes      | Yes     | The date that the user verified their email address |
| two_factor_confirmed_at | Date    | Yes      | Yes     | The date that the user confirmed 2FA                |
| created_at              | Date    | No       | No      | The date that the resource was created              |
| updated_at              | Date    | No       | No      | The date that the resource was last modified        |
| deleted_at              | Date    | Yes      | No      | The date that the resource was deleted              |

## Allowed Include Paths

* permissions
* playlists
* roles
* roles.permissions

## Endpoints

**[My Show](/auth/user/me/show/)**

The my show endpoint returns the user resource for the currently authenticated user.

**[My Playlists](/auth/user/me/playlist/)**

The my playlists endpoint returns a listing of playlist resources owned by the currently authenticated user.