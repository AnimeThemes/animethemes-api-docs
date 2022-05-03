---
title: Authentication
---

# Authentication

---

The AnimeThemes API uses token-based authentication to grant the user access to protected actions.

API tokens can be granted abilities that specify which actions can be performed.

## Managing Tokens

API tokens are managed from the API Tokens Screen within the AnimeThemes application.

### Creating Tokens

Log in to AnimeThemes. The Dashboard Screen will be displayed with a Navigation Bar.

Click the User Menu in the top-right corner of the Navigation Bar. The API Tokens Option will be displayed.

Select the API Tokens Option. The API Tokens Screen will be displayed.

On the API Tokens Screen, the Create API Token Form will be displayed.

On the Create API Token Form, specify a Token Name.

On the Create API Token Form, optionally specify Permissions. Permissions are the abilities that the token is granted.

On the Create API Token Form, click the Create Button. The API Token Modal will be displayed.

On the API Token Modal, copy and store the token.

On the API Token Modal, click the Close Button. The Modal will be dismissed and the token will be displayed in the Manage API Tokens Form.

### Updating Tokens

On the Manage API Tokens Form, click the Permissions Link. The API Token Permissions Modal will be displayed.

On the API Token Permissions Modal, specify changes to Permissions.

On the API Token Permissions Modal, click the Save Button. The Modal will be dismissed and the changes will be applied.

### Deleting Tokens

On the Manage API Tokens Form, click the Delete Link. The Delete API Token Modal will be displayed.

On the Delete API Token Modal, click the Delete Button. The Delete API Token Modal will be dismissed and the API token will be removed from the Manage API Tokens Form.

## Expiration

API Tokens are configured to expire after **one month**.

Expired API Tokens are automatically pruned from AnimeThemes once a day.