---
title: Studio Image Destroy
---

# Studio Image Destroy Endpoint

The studio image destroy endpoint deletes a studio image and returns the deleted studio image resource.

For example, the `/studioimage/shaft/9292` endpoint will delete the association between the Shaft studio and the large cover image of id 9292.

## URL

```sh
DELETE /studioimage/{studio:slug}/{image:id}
```

## Authentication

**Required Permission**: delete studio, delete image

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Image 'MAJjc1O52inaVlaCtoC2VSZkqjRFDdGW9XN7pmz3.png' has been detached from Studio 'Shaft'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioimage/shaft/9292
```
