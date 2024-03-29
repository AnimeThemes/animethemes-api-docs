---
title: Image
---

# Image

---

An image API resource represents a visual component for another resource such as an anime or artist.

For example, the Bakemonogatari anime has two images to represent small and large cover images.

## Fields

|    Name    |  Type   | Nullable | Default | Description                                                                       |
| :--------: | :-----: | :------: | :-----: | :-------------------------------------------------------------------------------- |
| id         | Integer | No       | Yes     | The primary key of the resource                                                   |
| path       | String  | No       | Yes     | The path of the file in storage                                                   |
| size       | Integer | No       | Yes     | The size of the file in storage in Bytes                                          |
| mimetype   | String  | No       | No      | The media type of the file in storage                                             |
| facet      | Enum    | Yes      | Yes     | The component that the resource is intended for [Small Cover, Large Cover, Grill] |
| link       | String  | No       | Yes     | The URL to stream the file from storage                                           |
| created_at | Date    | No       | No      | The date that the resource was created                                            |
| updated_at | Date    | No       | No      | The date that the resource was last modified                                      |
| deleted_at | Date    | Yes      | No      | The date that the resource was deleted                                            |

## Allowed Include Paths

* anime
* artists
* studios

## Endpoints

**[Image Destroy](/wiki/image/destroy/)**

The image destroy endpoint soft deletes an image and returns the deleted image resource.

**[Image Force Delete](/wiki/image/forceDelete/)**

The image force delete endpoint hard deletes an image and returns a confirmation message.

**[Image Index](/wiki/image/index/)**

The image index endpoint displays a listing of image resources.

**[Image Restore](/wiki/image/restore/)**

The image restore endpoint restores a soft deleted image and returns the restored image resource.

**[Image Show](/wiki/image/show/)**

The image show endpoint returns an image resource.

**[Image Store](/wiki/image/store/)**

The image store endpoint creates a new image and returns the new image resource.

**[Image Update](/wiki/image/update/)**

The image update endpoint updates an image and returns the updated image resource.