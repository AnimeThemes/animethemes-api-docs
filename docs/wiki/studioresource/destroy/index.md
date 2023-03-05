---
title: Studio Resource Destroy
---

# Studio Resource Destroy Endpoint

The studio resource destroy endpoint deletes a studio resource and returns the deleted studio resource resource.

For example, the `/studioresource/shaft/14891` endpoint will delete the association between the Shaft studio and the external resource of id 14891.

## URL

```sh
DELETE /studioresource/{studio:slug}/{resource:id}
```

## Authentication

**Required Permission**: delete studio, delete external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Resource 'https://myanimelist.net/anime/producer/44' has been detached from Studio 'Shaft'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/studioresource/shaft/14891
```
