# Monitoring

## Général

Ce service permet de mettre à jours sur le service discovery tous les services qui tombent en panne.

L'adresse du service est : http://10.194.33.151:3000

#### Les endpoints :

- http://10.194.33.151:3000/api-health
- http://10.194.33.151:3000/api-health-by-id
- http://10.194.33.151:3000/all-apis-health

---

## Endpoints

| Request Type | Endpoints |
| ----------- | ----------- |
| GET | /api-health |
| GET | /api-health-by-id |
| GET | /all-apis-health |

---

### Permet de savoir si un service est disponible par url

GET : http://10.194.33.151:3000/api-health

#### Body

| Body | Type | Description |
| ----------- | ----------- | ----------- |
| url | string | l'url de l'api que vous voulez pinger |

Exemple :

    {
        "url": "http://10.194.33.155:3000"
    }

#### Valeur de retour 

Un boolean : 
**true** si le service est disponible
**false** si le service n'est pas disponible

---

### Permet de savoir si un service est disponible par id

GET : http://10.194.33.151:3000/api-health-by-id

#### Paramètre

| Paramètre | Type | Description |
| ----------- | ----------- | ----------- |
| id | number | l'id de l'api que vous voulez pinger |

#### Valeur de retour 

Un boolean : 
**true** si le service est disponible
**false** si le service n'est pas disponible

### Permet de savoir si un service est disponible par url

GET : http://10.194.33.151:3000/api-health

#### Body

| Body | Type | Description |
| ----------- | ----------- | ----------- |
| url | string | l'url de l'api que vous voulez pinger |

Exemple :

    {
        "url": "http://10.194.33.155:3000"
    }

#### Valeur de retour 

Un boolean : 
**true** si le service est disponible
**false** si le service n'est pas disponible

---

### La liste exhaustive de tous les services qui se sont enregistrés

GET : http://10.194.33.151:3000/all-apis-health

#### Valeur de retour 

    [
        {
            "id": 0,
            "name": "string",
            "url": "string",
            "isAvailable": "boolean"
        },
        {
            "id": 1,
            "name": "string",
            "url": "string",
            "isAvailable": "boolean"
        },
        ...
    ]

---