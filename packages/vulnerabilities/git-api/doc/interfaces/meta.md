[@redhat-cloud-services/vulnerabilities-client](../README.md) > [Meta](../interfaces/meta.md)

# Interface: Meta

*__export__*: 

*__interface__*: Meta

## Hierarchy

**Meta**

## Index

### Properties

* [dataFormat](meta.md#dataformat)
* [filter](meta.md#filter)
* [limit](meta.md#limit)
* [offset](meta.md#offset)
* [page](meta.md#page)
* [pageSize](meta.md#pagesize)
* [pages](meta.md#pages)
* [sort](meta.md#sort)
* [totalItems](meta.md#totalitems)

---

## Properties

<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L649)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: Meta

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L601)*

Full text filter

*__type__*: {string}

*__memberof__*: Meta

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L607)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: Meta

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L613)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: Meta

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L619)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: Meta

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L625)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: Meta

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L631)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: Meta

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L637)*

Sorting filter.

*__type__*: {string}

*__memberof__*: Meta

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L643)*

Total number of records.

*__type__*: {number}

*__memberof__*: Meta

___
