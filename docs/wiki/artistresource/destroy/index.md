---
title: Artist Resource Destroy
---

# Artist Resource Destroy Endpoint

The artist resource destroy endpoint deletes an artist resource and returns the deleted artist resource resource.

For example, the `/artistresource/chiwa_saitou/3361` endpoint will delete the association between the Chiwa Saitou artist and the external resource of id 3361.

## URL

```sh
DELETE /artistresource/{artist:slug}/{resource:id}
```

## Authentication

**Required Permission**: delete artist, delete external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Resource 'https://myanimelist.net/people/61' has been detached from Artist 'Chiwa Saitou'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistresource/chiwa_saitou/3361
```
