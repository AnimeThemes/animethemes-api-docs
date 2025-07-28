---
title: Artist Song Destroy
---

# Artist Song Destroy Endpoint

The artist song destroy endpoint deletes an artist song and returns the deleted artist song resource.

For example, the `/artistsong/chiwa_saitou/3373` endpoint will delete the association between the Chiwa Saitou artist and the "staple stable" song.

## URL

```sh
DELETE /artistsong/{artist:slug}/{song:id}
```

## Authentication

**Required Permission**: delete artist, delete song

**Roles with Permission**: Wiki Editor, Encoder, Admin

## Parameters

None

## Response

```json
{
    message: "Song 'staple stable' has been detached from Artist 'Chiwa Saitou'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistsong/chiwa_saitou/3373
```
