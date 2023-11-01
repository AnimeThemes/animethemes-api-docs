---
title: Song Resource
---

# Song Resource

---

An song resource API resource represents the association between an song and an external resource.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                              |
| :--------: | :-----: | :------: | :-----: | :------------------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created                   |
| updated_at | Date    | No       | No      | The date that the resource was last modified             |
| as         | String  | No       | Yes     | Used to distinguish resources that map to the same song |

## Allowed Include Paths

* song
* resource

## Endpoints

**[Song Resource Destroy](/wiki/songresource/destroy/)**

The song resource destroy endpoint deletes an song resource and returns the deleted song resource resource.

**[Song Resource Index](/wiki/songresource/index/)**

The song resource index endpoint displays a listing of song resource resources.

**[Song Resource Show](/wiki/songresource/show/)**

The song resource show endpoint returns an song resource resource.

**[Song Resource Store](/wiki/songresource/store/)**

The song resource store endpoint creates a new song resource and returns the new song resource resource.

**[Song Resource Update](/wiki/songresource/update/)**

The song resource update endpoint updates an song resource and returns the updated song resource resource.