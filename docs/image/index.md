---
title: Image
---

# Image

---

An image API resource represents a visual component for another resource such as an anime or artist.

For example, the Bakemonogatari anime has two images to represent small and large cover images.

### Fields

|    Name    |  Type   | Nullable | Description                                                                       |
| :--------: | :-----: | :------: | :-------------------------------------------------------------------------------- |
| id         | Integer | No       | The primary key of the resource                                                   |
| path       | String  | No       | The path of the file in storage                                                   |
| size       | Integer | No       | The size of the file in storage in Bytes                                          |
| mimetype   | String  | No       | The media type of the file in storage                                             |
| facet      | Enum    | Yes      | The component that the resource is intended for [Small Cover, Large Cover, Grill] |
| link       | String  | No       | The URL to stream the file from storage                                           |
| created_at | Date    | No       | The date that the resource was created                                            |
| updated_at | Date    | No       | The date that the resource was last modified                                      |
| deleted_at | Date    | Yes      | The date that the resource was deleted                                            |

### Allowed Include Paths

* anime
* artists
* studios

### Endpoints

**[Image Destroy](/image/destroy/)**

The image destroy endpoint soft deletes an image and returns the deleted image resource.

**[Image Force Delete](/image/forceDelete/)**

The image force delete endpoint hard deletes an image and returns a confirmation message.

**[Image Index](/image/index/)**

The image index endpoint displays a listing of image resources.

**[Image Show](/image/show/)**

The image show endpoint returns an image resource.

**[Image Store](/image/store/)**

The image store endpoint creates a new image and returns the new image resource.

**[Image Update](/image/update/)**

The image update endpoint updates an image and returns the updated image resource.