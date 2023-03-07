---
title: Balance
---

# Balance

---

A balance API resource represents an account balance against usage or upcoming charges for the given month.

## Fields

|    Name               |  Type   | Nullable | Default | Description                                                                                              |
| :-------------------: | :-----: | :------: | :-----: | :------------------------------------------------------------------------------------------------------- |
| id                    | Integer | No       | Yes     | The primary key of the resource                                                                          |
| date                  | Date    | No       | Yes     | The given month that the account balance applies to                                                      |
| service               | Enum    | No       | Yes     | The service that is billing AnimeThemes [Other, DigitalOcean, AWS, Hover, WalkerServers]                 |
| frequency             | Enum    | No       | Yes     | The frequency that AnimeThemes is billed by the service [Once, Annually, Biannually, Quarterly, Monthly] |
| usage                 | Decimal | No       | Yes     | The amount of services consumed by AnimeThemes in the billing period                                     |
| month_to_date_balance | Decimal | No       | Yes     | The balance of the AnimeThemes account with consideration to usage                                       |
| created_at            | Date    | No       | No      | The date that the resource was created                                                                   |
| updated_at            | Date    | No       | No      | The date that the resource was last modified                                                             |
| deleted_at            | Date    | Yes      | No      | The date that the resource was deleted                                                                   |

## Allowed Include Paths

None

## Endpoints

**[Balance Destroy](/billing/balance/destroy/)**

The balance destroy endpoint soft deletes a balance and returns the deleted balance resource.

**[Balance Force Delete](/billing/balance/forceDelete/)**

The balance force delete endpoint hard deletes a balance and returns a confirmation message.

**[Balance Index](/billing/balance/index/)**

The balance index endpoint displays a listing of balance resources.

**[Balance Restore](/billing/balance/restore/)**

The balance restore endpoint restores a soft deleted balance and returns the restored balance resource.

**[Balance Show](/billing/balance/show/)**

The balance show endpoint returns a balance resource.

**[Balance Store](/billing/balance/store/)**

The balance store endpoint creates a new balance and returns the new balance resource.

**[Balance Update](/billing/balance/update/)**

The balance update endpoint updates a balance and returns the updated balance resource.