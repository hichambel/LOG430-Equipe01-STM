# User

## Général

Ce service permet d'utilisé des compte d'utilisateur pour sauvegarder des trajets.

L'adresse du service est : http://portainer.10.194.33.151.nip.io:4000/

#### Les endpoints :

- http://portainer.10.194.33.151.nip.io:4000/utilisateurs
- http://portainer.10.194.33.151.nip.io:4000/trajets

---

## Endpoints

| Request Type | Endpoints |
| ----------- | ----------- |
| GET | /utilisateurs |
| GET | /utilisateurs/:id |
| POST | /trajets |
| GET | /trajets |
| GET | /trajets/:userId |

---

### Permet d'avoir tous les utilisateurs

GET : http://portainer.10.194.33.151.nip.io:4000/utilisateurs

#### Valeur de retour 

    [
        {
            "_id": 0,
            "email": "string",
            "password": "string",
            "refreshToken": "string"
        },
        {
            "_id": 1,
            "email": "string",
            "password": "string",
            "refreshToken": "string"
        },
        ...
    ]

---

### Permet de retourner un utilisateur selon son id

GET : http://portainer.10.194.33.151.nip.io:4000/utilisateurs/:id

#### Paramètre

| Paramètre | Type | Description |
| ----------- | ----------- | ----------- |
| id | string | l'id ("_id") de l'utilisateur |

#### Valeur de retour 

    {
        "_id": 0,
        "email": "string",
        "password": "string",
        "refreshToken": "string"
    }

---

### Permet de voir tous les trajets sauvegarder

GET : http://portainer.10.194.33.151.nip.io:4000/trajets

#### Valeur de retour 

    [
        {
            "_id": "string",
            "name": "string",
            "destination": "string",
            "depart": "string",
            "userId": "string"
        },
        {
            "_id": "string",
            "name": "string",
            "destination": "string",
            "depart": "string",
            "userId": "string"
        },
        ...
    ]

---

### Permet de sauvegarder un trajet

POST : http://portainer.10.194.33.151.nip.io:4000/trajets

#### Body

| Body | Type | Description |
| ----------- | ----------- | ----------- |
| name | string | un nom pour le trajet |
| destination | string | la destination du trajet |
| depart | string | le départ du trajet |
| userId | string | le _id de l'utilisateur qui veut sauvegarder un trajet |

Exemple : 

    {
        "name": "string",
        "destination": "string",
        "depart": "string",
        "userId": "string"
    }

---

### Permet d'avoir tous les trajets d'un utilisateur

GET : http://portainer.10.194.33.151.nip.io:4000/trajets/:id

#### Paramètre

| Paramètre | Type | Description |
| ----------- | ----------- | ----------- |
| id | string | l'id ("_id") de l'utilisateur |

#### Valeur de retour 

    [
        {
            "_id": "string",
            "name": "string",
            "destination": "string",
            "depart": "string",
            "userId": "string"
        },
        {
            "_id": "string",
            "name": "string",
            "destination": "string",
            "depart": "string",
            "userId": "string"
        },
        ...
    ]

---