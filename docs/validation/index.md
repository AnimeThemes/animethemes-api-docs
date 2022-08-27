---
title: Validation
---

# Validation

---

The AnimeThemes API uses form requests to validate query parameters.

## Parameter Validation

Form Requests define a set of rules for parameter fields and values.

If the parameter field-value pair passes every rule, the pair is considered valid.

```powershell
# Integer values are valid for the Anime Year Filter
/anime?filter[year]=2000
```

If the parameter field-value pair fails any rule, the pair is considered invalid.

```powershell
# String values are not valid for the Anime Year Filter
/anime?filter[year]=current
```

## Response

If every field-value pair is valid, the request will be executed normally.

```powershell
/anime?filter[year]=2000&filter[season]=winter
```

```json
// Status Code: 200 OK
{
    anime: [
        {
            ...
            year: 2000,
            season: "Winter",
            ...
        },
        ...
    ],
    ...
}
```

If any field-value pair is invalid, the request will return a list of validation errors.

```powershell
/anime?filter[year]=current&filter[season]=autumn
```

```json
// Status Code: 422 Unprocessable Entity
{
	message: "The selected filter.season is invalid. (and 1 more error)",
	errors: {
		filter.season: [
			"The selected filter.season is invalid."
		],
		filter.year: [
			"The filter.year must be an integer."
		]
	}
}
```