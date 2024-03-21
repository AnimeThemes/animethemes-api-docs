---
title: Artist Member
---

# Artist Member

---

An artist member API resource represents the association of an artist and a group/unit.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                          |
| :--------: | :-----: | :------: | :-----: | :--------------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created               |
| updated_at | Date    | No       | No      | The date that the resource was last modified         |
| as         | String  | No       | Yes     | Used to distinguish membership by alias or character |

## Allowed Include Paths

* artist
* member

## Endpoints

**[Artist Member Destroy](/wiki/artistmember/destroy/)**

The artist member destroy endpoint deletes an artist member and returns the deleted artist member resource.

**[Artist Member Index](/wiki/artistmember/index/)**

The artist member index endpoint displays a listing of artist member resources.

**[Artist Member Show](/wiki/artistmember/show/)**

The artist member show endpoint returns an artist member resource.

**[Artist Member Store](/wiki/artistmember/store/)**

The artist member store endpoint creates a new artist member and returns the new artist member resource.

**[Artist Member Update](/wiki/artistmember/update/)**

The artist member update endpoint updates an artist member and returns the updated artist member resource.