---
title: Playlist Image Destroy
---

# Playlist Image Destroy Endpoint

The playlist image destroy endpoint deletes a playlist image and returns the deleted playlist image resource.

For example, the `/playlistimage/N4hG/1` endpoint will delete the association between the playlist of id N4hG and the large cover image of id 1.

## URL

```sh
DELETE /playlistimage/{playlist:id}/{image:id}
```

## Authentication

**Required Permission**: delete playlist, delete image

**Other Requirements**: User must own playlist

## Parameters

None

## Response

```json
{
    message: "Image 'he3aw0eD3Gm7HKHJ5DRyCWOsK1QeIG91bmUXT2CX.png' has been detached from Playlist '/r/anime's Best OPs and EDs of 2022'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/playlistimage/N4hG/1
```
