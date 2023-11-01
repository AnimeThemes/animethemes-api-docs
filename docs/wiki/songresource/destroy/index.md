---
title: Song Resource Destroy
---

# Song Resource Destroy Endpoint

The song resource destroy endpoint deletes an song resource and returns the deleted song resource resource.

For example, the `/songresource/10535/30212` endpoint will delete the association between the Mijuku DREAMER song and the external resource of id 30212.

## URL

```sh
DELETE /songresource/{song:id}/{resource:id}
```

## Authentication

**Required Permission**: delete song, delete external resource

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Resource 'https://open.spotify.com/track/6f9SU0JwNjVDjduReyFpAd?si=2719f3d5bd014f17' has been detached from Song 'Mijuku DREAMER'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/songresource/10535/30212
```
