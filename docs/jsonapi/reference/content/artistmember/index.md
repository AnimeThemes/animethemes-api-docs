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
| alias      | String  | Yes      | Yes     | Used to distinguish membership by alias              |
| as         | String  | Yes      | Yes     | Used to distinguish membership by character          |
| notes      | String  | Yes      | Yes     | Used to extra annotation, like member role           |

## Allowed Include Paths

* artist
* member

## Endpoints

**[Artist Member Destroy](/content/artistmember/destroy/)**

The artist member destroy endpoint deletes an artist member and returns the deleted artist member resource.

**[Artist Member Index](/content/artistmember/index/)**

The artist member index endpoint displays a listing of artist member resources.

**[Artist Member Show](/content/artistmember/show/)**

The artist member show endpoint returns an artist member resource.

**[Artist Member Store](/content/artistmember/store/)**

The artist member store endpoint creates a new artist member and returns the new artist member resource.

**[Artist Member Update](/content/artistmember/update/)**

The artist member update endpoint updates an artist member and returns the updated artist member resource.