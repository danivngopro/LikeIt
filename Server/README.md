# images Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a image](#army-id)
    - [get a image's auth](#validate-question)
    - [Post a new image](#/)
    - [update a image](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd image-crud

npm install
```

### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------    |
| Post   |  create                                                          | create a image                                          |
| Put    |  updateByid                                                  | update a image                                      |
| Get    |  getByid                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a image
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the image  |
| firstName  | string | first name of the image  |
| lastName  | string | lastname of the image  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the image  |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### getByid
get a image
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | the id of the image in the params |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### updateByid
update a image
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the image  |
| firstName  | string | first name of the image  |
| lastName  | string | lastname of the image  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the image  |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### validateQuestion
authenticate the question and answer of a image
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the image  |
| question  | string | question  of the image  |
| answer  | string | answer of the image  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
