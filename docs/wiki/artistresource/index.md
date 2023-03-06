---
title: Artist Resource
---

# Artist Resource

---

An artist resource API resource represents the association between an artist and an external resource.

## Fields

|    Name    |  Type   | Nullable | Description                                               |
| :--------: | :-----: | :------: | :-------------------------------------------------------- |
| created_at | Date    | No       | The date that the resource was created                    |
| updated_at | Date    | No       | The date that the resource was last modified              |
| as         | String  | No       | Used to distinguish resources that map to the same artist |

## Allowed Include Paths

* artist
* resource

## Endpoints

**[Artist Resource Destroy](/wiki/artistresource/destroy/)**

The artist resource destroy endpoint deletes an artist resource and returns the deleted artist resource resource.

**[Artist Resource Index](/wiki/artistresource/index/)**

The artist resource index endpoint displays a listing of artist resource resources.

**[Artist Resource Show](/wiki/artistresource/show/)**

The artist resource show endpoint returns an artist resource resource.

**[Artist Resource Store](/wiki/artistresource/store/)**

The artist resource store endpoint creates a new artist resource and returns the new artist resource resource.

**[Artist Resource Update](/wiki/artistresource/update/)**

The artist resource update endpoint updates an artist resource and returns the updated artist resource resource.