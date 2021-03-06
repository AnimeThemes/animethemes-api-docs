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

## Managing Tokens

API tokens are managed from the API Tokens Screen within the AnimeThemes application.

### Creating Tokens

Log in to AnimeThemes. The Dashboard Screen will be displayed with a Navigation Bar.

Click the User Menu in the top-right corner of the Navigation Bar. The API Tokens Option will be displayed.

Select the API Tokens Option. The API Tokens Screen will be displayed.

On the API Tokens Screen, the Create API Token Form will be displayed.

On the Create API Token Form, specify a Token Name.

On the Create API Token Form, click the Create Button. The API Token Modal will be displayed.

On the API Token Modal, copy and store the token.

On the API Token Modal, click the Close Button. The Modal will be dismissed and the token will be displayed in the Manage API Tokens Form.

### Deleting Tokens

On the Manage API Tokens Form, click the Delete Link. The Delete API Token Modal will be displayed.

On the Delete API Token Modal, click the Delete Button. The Delete API Token Modal will be dismissed and the API token will be removed from the Manage API Tokens Form.

## Expiration

API Tokens are configured to expire after **one year**.

Expired API Tokens are automatically pruned from AnimeThemes once a day.