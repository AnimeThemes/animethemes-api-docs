---
title: Studio Resource
---

# Studio Resource

---

A studio resource API resource represents the association between a studio and an external resource.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                               |
| :--------: | :-----: | :------: | :-----: | :-------------------------------------------------------- |
| created_at | Date    | No       | No      | The date that the resource was created                    |
| updated_at | Date    | No       | No      | The date that the resource was last modified              |
| as         | String  | No       | Yes     | Used to distinguish resources that map to the same studio |

## Allowed Include Paths

* studio
* resource

## Endpoints

**[Studio Resource Destroy](/wiki/studioresource/destroy/)**

The studio resource destroy endpoint deletes a studio resource and returns the deleted studio resource resource.

**[Studio Resource Index](/wiki/studioresource/index/)**

The studio resource index endpoint displays a listing of studio resource resources.

**[Studio Resource Show](/wiki/studioresource/show/)**

The studio resource show endpoint returns a studio resource resource.

**[Studio Resource Store](/wiki/studioresource/store/)**

The studio resource store endpoint creates a new studio resource and returns the new studio resource resource.

**[Studio Resource Update](/wiki/studioresource/update/)**

The studio resource update endpoint updates a studio resource and returns the updated studio resource resource.