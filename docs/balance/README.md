---
title: Balance
---

# Balance

---

A balance API resource represents an account balance against usage or upcoming charges for the given month.

### Fields

|    Name               |  Type   | Description                                                                                              |
| :-------------------: | :-----: | :------------------------------------------------------------------------------------------------------- |
| id                    | Integer | The primary key of the resource                                                                          |
| date                  | Date    | The given month that the account balance applies to                                                      |
| service               | Enum    | The service that is billing AnimeThemes {Other, DigitalOcean, AWS, Hover, WalkerServers}                 |
| frequency             | Enum    | The frequency that AnimeThemes is billed by the service {Once, Annually, Biannually, Quarterly, Monthly} |
| usage                 | Decimal | The amount of services consumed by AnimeThemes in the billing period                                     |
| month_to_date_balance | Decimal | The balance of the AnimeThemes account with consideration to usage                                       |
| created_at            | Date    | The date that the resource was created                                                                   |
| updated_at            | Date    | The date that the resource was last modified                                                             |
| deleted_at            | Date    | The date that the resource was deleted                                                                   |

### Allowed Include Paths

None

### Endpoints

**[Balance Show](/balance/show/)**

The balance show endpoint returns a balance resource.

**[Balance Index](/balance/index/)**

The balance index endpoint displays a listing of balance resources.