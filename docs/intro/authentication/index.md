---
title: Authentication
---

# Authentication

---

The AnimeThemes API uses token-based authentication to grant the user access to protected actions.

## Token Authentication

The AnimeThemes API uses the [**Bearer authentication scheme**](https://www.rfc-editor.org/rfc/rfc6750.html) to validate requests for protected actions.

The `Bearer` token in the `Authorization` request header must correspond to a valid API token.

```sh
curl -X POST "https://api.animethemes.moe/{protected action}"
    -H "Accept: application/json"
    -H "Authorization: Bearer {token}"
```

## Status Codes

The AnimeThemes API uses framework-default response status codes for authenticated requests.

| Code | Description                                          | Examples           |
| :--: | :--------------------------------------------------- | :----------------: |
| 200  | OK - request succeeded                               | DELETE, PATCH, PUT |
| 201  | Created - new resource was created                   | POST               |
| 401  | Unauthorized - invalid or no authentication provided | All                |
| 403  | Forbidden - request is not authorized for user       | All                |
| 404  | Not Found - no resource was found                    | All                |