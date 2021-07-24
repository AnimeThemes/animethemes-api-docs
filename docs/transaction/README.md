---
title: Transaction
---

# Transaction

---

A transaction API resource represents an invoice from or a payment to a billing service by AnimeThemes.

### Fields

|    Name               |  Type   | Nullable | Description                                                                              |
| :-------------------: | :-----: | :------: | :--------------------------------------------------------------------------------------- |
| id                    | Integer | No       | The primary key of the resource                                                          |
| date                  | Date    | No       | The date that the transaction was made                                                   |
| service               | Enum    | No       | The service that is billing AnimeThemes {Other, DigitalOcean, AWS, Hover, WalkerServers} |
| description           | String  | No       | The short description of what the transaction is for                                     |
| amount                | Decimal | No       | The amount of the transaction billed by or paid to the billing service by AnimeThemes    |
| external_id           | String  | Yes      | The identifier used by the service for the transaction, if applicable                    |
| created_at            | Date    | No       | The date that the resource was created                                                   |
| updated_at            | Date    | No       | The date that the resource was last modified                                             |
| deleted_at            | Date    | Yes      | The date that the resource was deleted                                                   |

### Allowed Include Paths

None

### Endpoints

**[Transaction Show](/transaction/show/)**

The transaction show endpoint returns a transaction resource.

**[Transaction Index](/transaction/index/)**

The transaction index endpoint displays a listing of transaction resources.