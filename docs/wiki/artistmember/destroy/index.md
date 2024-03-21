---
title: Artist Member Destroy
---

# Artist Member Destroy Endpoint

The artist member destroy endpoint deletes an artist member and returns the deleted artist member resource.

For example, the `/artistmember/ms/pile` endpoint will delete the association between the μ's group and the Pile member.

## URL

```sh
DELETE /artistmember/{artist:slug}/{artist:slug}
```

## Authentication

**Required Permission**: delete artist

**Roles with Permission**: Wiki Editor, Admin

## Parameters

None

## Response

```json
{
    message: "Member 'Pile' has been detached from Artist 'μ's'.",
}
```

## Example

```bash
curl -X DELETE -H "Authorization: Bearer {token}" https://api.animethemes.moe/artistmember/ms/pile
```
