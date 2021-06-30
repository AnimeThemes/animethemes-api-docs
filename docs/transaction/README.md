---
title: Transaction
---

# Transaction

---

A transaction API resource represents an invoice from or a payment to a billing service by AnimeThemes.

### Fields

|    Name               |  Type   | Description                                                                              |
| :-------------------: | :-----: | :--------------------------------------------------------------------------------------- |
| id                    | Integer | The primary key of the resource                                                          |
| date                  | Date    | The date that the transaction was made                                                   |
| service               | Enum    | The service that is billing AnimeThemes {Other, DigitalOcean, AWS, Hover, WalkerServers} |
| description           | String  | The short description of what the transaction is for                                     |
| amount                | Decimal | The amount of the transaction billed by or paid to the billing service by AnimeThemes    |
| external_id           | Integer | The identifier used by the service for the transaction, if applicable                    |
| created_at            | Date    | The date that the resource was created                                                   |
| updated_at            | Date    | The date that the resource was last modified                                             |
| deleted_at            | Date    | The date that the resource was deleted                                                   |

### Allowed Include Paths

None

### Endpoints

**[Transaction Show](/transaction/show/)**

The transaction show endpoint returns a transaction resource.

**[Transaction Index](/transaction/index/)**

The transaction index endpoint displays a listing of transaction resources.