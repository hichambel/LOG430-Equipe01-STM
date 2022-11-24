<style>
    .concept {
        width: 1000%;
        text-align: center;
    }
    .concept th {
        background: grey;
        word-wrap: break-word;
        text-align: center;
    }
    .disponibilite tr:nth-child(1) { background: orange; }
    .performance tr:nth-child(2) { background: orange; }
    .securite tr:nth-child(3) { background: orange; }
    .usabilite tr:nth-child(1) { background: orange; }
    .interoperabilite tr:nth-child(2) { background: orange; }
    .modifiabilite tr:nth-child(3) { background: orange; }
    .testabilite tr:nth-child(1) { background: orange; }    
</style>

# Documentation de l'architecture du laboratoire de LOG430

- [Documentation de l'architecture du laboratoire de LOG430](#documentation-de-larchitecture-du-laboratoire-de-log430)
- [Page titre](#page-titre)
- [Introduction](#introduction)
- [Scénario d'objectif d'affaire](#scénario-dobjectif-daffaire)
    - [OA-1. Faciliter le recrutement des nouveaux chargés de laboratoire.](#oa-1-faciliter-le-recrutement-des-nouveaux-chargés-de-laboratoire)
    - [OA-2. Validez si le transport par autobus est toujours plus rapide, peu importe l'heure de la journée](#oa-2-validez-si-le-transport-par-autobus-est-toujours-plus-rapide-peu-importe-lheure-de-la-journée)
- [Cas d'utilisations](#cas-dutilisations)
    - [**CU01** - Veux comparer les temps de trajet.](#cu01---veux-comparer-les-temps-de-trajet)
        - [CU01-D1 **Disponibilité**](#cu01-d1-disponibilité)
        - [CU01-M1 **Modifiabilité**](#cu01-m1-modifiabilité)
        - [CU01-P1 **Performance**](#cu01-p1-performance)
        - [CU01-S1 **Sécurité**](#cu01-s1-sécurité)
        - [CU01-T1 **Testabilité**](#cu01-t1-testabilité)
        - [CU01-U1 **Usabilité**](#cu01-u1-usabilité)
        - [CU01-I1 **Interopérabilité**](#cu01-i1-interopérabilité)
    - [**
      CU02** - Veux pouvoir mettre le chaos dans les microservices.](#cu02---veux-pouvoir-mettre-le-chaos-dans-les-microservices)
        - [CU02-D1 **Disponibilité**](#cu02-d1-disponibilité)
        - [CU02-M1 **Modifiabilité**](#cu02-m1-modifiabilité)
        - [CU02-P1 **Performance**](#cu02-p1-performance)
        - [CU02-S1 **Sécurité**](#cu02-s1-sécurité)
        - [CU02-T1 **Testabilité**](#cu02-t1-testabilité)
        - [CU02-U1 **Usabilité**](#cu02-u1-usabilité)
        - [CU02-I1 **Interopérabilité**](#cu02-i1-interopérabilité)
    - [**
      CU03** - <span style="color:red">Veux pouvoir vérifier la disponibilité d'un micro-service</span>](#cu03---veux-pouvoir-vérifier-la-disponibilité-dun-micro-service)
        - [CU03-D1 **Disponibilité**](#cu03-d1-disponibilité)
        - [CU03-M1 **Modifiabilité**](#cu03-m1-modifiabilité)
        - [CU03-P1 **Performance**](#cu03-p1-performance)
        - [CU03-S1 **Sécurité**](#cu03-s1-sécurité)
        - [CU03-T1 **Testabilité**](#cu03-t1-testabilité)
        - [CU03-U1 **Usabilité**](#cu03-u1-usabilité)
        - [CU03-I1 **Interopérabilité**](#cu03-i1-interopérabilité)
    - [**
      CU04** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu04---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU04-D1 **Disponibilité**](#cu04-d1-disponibilité)
        - [CU04-M1 **Modifiabilité**](#cu04-m1-modifiabilité)
        - [CU04-P1 **Performance**](#cu04-p1-performance)
        - [CU04-S1 **Sécurité**](#cu04-s1-sécurité)
        - [CU04-T1 **Testabilité**](#cu04-t1-testabilité)
        - [CU04-U1 **Usabilité**](#cu04-u1-usabilité)
        - [CU04-I1 **Interopérabilité**](#cu04-i1-interopérabilité)
    - [**
      CU05** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu05---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU05-D1 **Disponibilité**](#cu05-d1-disponibilité)
        - [CU05-M1 **Modifiabilité**](#cu05-m1-modifiabilité)
        - [CU05-P1 **Performance**](#cu05-p1-performance)
        - [CU05-S1 **Sécurité**](#cu05-s1-sécurité)
        - [CU05-T1 **Testabilité**](#cu05-t1-testabilité)
        - [CU05-U1 **Usabilité**](#cu05-u1-usabilité)
        - [CU05-I1 **Interopérabilité**](#cu05-i1-interopérabilité)
    - [**
      CU06** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu06---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU06-D1 **Disponibilité**](#cu06-d1-disponibilité)
        - [CU06-M1 **Modifiabilité**](#cu06-m1-modifiabilité)
        - [CU06-P1 **Performance**](#cu06-p1-performance)
        - [CU06-S1 **Sécurité**](#cu06-s1-sécurité)
        - [CU06-T1 **Testabilité**](#cu06-t1-testabilité)
        - [CU06-U1 **Usabilité**](#cu06-u1-usabilité)
        - [CU06-I1 **Interopérabilité**](#cu06-i1-interopérabilité)
    - [**
      CU07** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu07---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU07-D1 **Disponibilité**](#cu07-d1-disponibilité)
        - [CU07-M1 **Modifiabilité**](#cu07-m1-modifiabilité)
        - [CU07-P1 **Performance**](#cu07-p1-performance)
        - [CU07-S1 **Sécurité**](#cu07-s1-sécurité)
        - [CU07-T1 **Testabilité**](#cu07-t1-testabilité)
        - [CU07-U1 **Usabilité**](#cu07-u1-usabilité)
        - [CU07-I1 **Interopérabilité**](#cu07-i1-interopérabilité)
    - [**
      CU08** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu08---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU08-D1 **Disponibilité**](#cu08-d1-disponibilité)
        - [CU08-M1 **Modifiabilité**](#cu08-m1-modifiabilité)
        - [CU08-P1 **Performance**](#cu08-p1-performance)
        - [CU08-S1 **Sécurité**](#cu08-s1-sécurité)
        - [CU08-T1 **Testabilité**](#cu08-t1-testabilité)
        - [CU08-U1 **Usabilité**](#cu08-u1-usabilité)
        - [CU08-I1 **Interopérabilité**](#cu08-i1-interopérabilité)
    - [**
      CU09** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu09---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU09-D1 **Disponibilité**](#cu09-d1-disponibilité)
        - [CU09-M1 **Modifiabilité**](#cu09-m1-modifiabilité)
        - [CU09-P1 **Performance**](#cu09-p1-performance)
        - [CU09-S1 **Sécurité**](#cu09-s1-sécurité)
        - [CU09-T1 **Testabilité**](#cu09-t1-testabilité)
        - [CU09-U1 **Usabilité**](#cu09-u1-usabilité)
        - [CU09-I1 **Interopérabilité**](#cu09-i1-interopérabilité)
    - [**
      CU10** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation.</span>](#cu10---vous-devez-proposer-un-nouveau-cas-dutilisation)
        - [CU10-D1 **Disponibilité**](#cu10-d1-disponibilité)
        - [CU10-M1 **Modifiabilité**](#cu10-m1-modifiabilité)
        - [CU10-P1 **Performance**](#cu10-p1-performance)
        - [CU10-S1 **Sécurité**](#cu10-s1-sécurité)
        - [CU10-T1 **Testabilité**](#cu10-t1-testabilité)
        - [CU10-U1 **Usabilité**](#cu10-u1-usabilité)
        - [CU10-I1 **Interopérabilité**](#cu10-i1-interopérabilité)
- [Vue architecturale de contexte](#vue-architecturale-de-contexte)
    - [Présentation primaire](#présentation-primaire)
    - [Catalogue d'éléments](#catalogue-déléments)
    - [<s>Diagramme de contexte</s> Pas nécessaire puisque c'est déja un vue de contexte](#sdiagramme-de-contextes-pas-nécessaire-puisque-cest-déja-un-vue-de-contexte)
    - [Guide de variabilité](#guide-de-variabilité)
    - [Raisonnement](#raisonnement)
    - [<s>Vues associées</s> pas nécessaire puisque c'est la première vue que vous réalisé pour votre système.](#svues-associéess-pas-nécessaire-puisque-cest-la-première-vue-que-vous-réalisé-pour-votre-système)
- [Conception axée sur les attributs de qualité](#conception-axée-sur-les-attributs-de-qualité)
    - [ADD-Disponibilité](#add-disponibilité)
        - [ADD-Détection de faute](#add-détection-de-faute)
        - [ADD-Préparation et réparation](#add-préparation-et-réparation)
        - [ADD-Réintroduction](#add-réintroduction)
        - [ADD-Prévention des fautes](#add-prévention-des-fautes)
    - [ADD-Modifiabilité](#add-modifiabilité)
        - [ADD-Réduire la taille des modules](#add-réduire-la-taille-des-modules)
        - [ADD-Augmenter la cohésion](#add-augmenter-la-cohésion)
        - [ADD-Réduire le couplage](#add-réduire-le-couplage)
        - [ADD-Defer binding](#add-defer-binding)
    - [ADD-Performance](#add-performance)
        - [ADD-Contrôler la demande en ressources](#add-contrôler-la-demande-en-ressources)
        - [ADD-Gérer les ressources](#add-gérer-les-ressources)
    - [ADD-Sécurité](#add-sécurité)
        - [ADD-Détecter les attaques](#add-détecter-les-attaques)
        - [ADD-Résister aux attaques](#add-résister-aux-attaques)
        - [ADD-Réagir aux attaques](#add-réagir-aux-attaques)
        - [ADD-Récupérer d'une attaque](#add-récupérer-dune-attaque)
    - [ADD-Testabilité](#add-testabilité)
        - [ADD-Controle and observe l'état du système](#add-controle-and-observe-létat-du-système)
        - [ADD-Limiter la complexité](#add-limiter-la-complexité)
    - [ADD-Usabilité](#add-usabilité)
        - [ADD-Supporter l'initiative de l'usager](#add-supporter-linitiative-de-lusager)
        - [ADD-Supporter l'initiative du système](#add-supporter-linitiative-du-système)
    - [ADD-Interopérabilité](#add-interopérabilité)
        - [ADD-Localiser](#add-localiser)
        - [ADD-Gérer les interfaces](#add-gérer-les-interfaces)
- [Réalisation des cas d'utilisation](#réalisation-des-cas-dutilisation)
    - [**RDCU-CU01** - Veux comparer les temps de trajet.](#rdcu-cu01---veux-comparer-les-temps-de-trajet)
    - [**
      RDCU-CU02** - Veux pouvoir mettre le chaos dans les services en mode.](#rdcu-cu02---veux-pouvoir-mettre-le-chaos-dans-les-services-en-mode)
    - [**RDCU-CU03**](#rdcu-cu03)
    - [**RDCU-CU04** -](#rdcu-cu04--)
    - [**RDCU-CU05** -](#rdcu-cu05--)
    - [**RDCU-CU06** -](#rdcu-cu06--)
    - [**RDCU-CU07** -](#rdcu-cu07--)
    - [**RDCU-CU08** -](#rdcu-cu08--)
    - [**RDCU-CU09** -](#rdcu-cu09--)
    - [**RDCU-CU10** -](#rdcu-cu10--)
- [Réalisation des attributs de qualité](#réalisation-des-attributs-de-qualité)
    - [RDAQ-Disponibilité](#rdaq-disponibilité)
        - [RDTQ-Détection de faute](#rdtq-détection-de-faute)
        - [RDTQ-Préparation et réparation](#rdtq-préparation-et-réparation)
        - [RDTQ-Réintroduction](#rdtq-réintroduction)
        - [RDTQ-Prévention des fautes](#rdtq-prévention-des-fautes)
        - [Relation entre les éléments architectuale et les exigences de disponibilité](#relation-entre-les-éléments-architectuale-et-les-exigences-de-disponibilité)
    - [RDAQ-Modifiabilité](#rdaq-modifiabilité)
        - [RDTQ-Réduire la taille des modules](#rdtq-réduire-la-taille-des-modules)
        - [RDTQ-Augmenter la cohésion](#rdtq-augmenter-la-cohésion)
        - [RDTQ-Réduire le couplage](#rdtq-réduire-le-couplage)
        - [RDTQ-Defer binding](#rdtq-defer-binding)
        - [Relation entre les éléments architectuale et les exigences de disponibilité](#relation-entre-les-éléments-architectuale-et-les-exigences-de-disponibilité-1)
    - [RDAQ-Performance](#rdaq-performance)
        - [RDTQ-Contrôler la demande en ressources](#rdtq-contrôler-la-demande-en-ressources)
        - [RDTQ-Gérer les ressources](#rdtq-gérer-les-ressources)
    - [RDAQ-Sécurité](#rdaq-sécurité)
        - [RDTQ-Détecter les attaques](#rdtq-détecter-les-attaques)
        - [RDTQ-Résister aux attaques](#rdtq-résister-aux-attaques)
        - [RDTQ-Réagir aux attaques](#rdtq-réagir-aux-attaques)
        - [RDTQ-Récupérer d'une attaque](#rdtq-récupérer-dune-attaque)
        - [Relation entre les éléments architectuale et les exigences de sécurité](#relation-entre-les-éléments-architectuale-et-les-exigences-de-sécurité)
    - [RDAQ-Testabilité](#rdaq-testabilité)
        - [RDTQ-Contrôle et observe l'état du système[](https://file%2B.vscode-resource.vscode-cdn.net/Users/yvanross/sources/log430/LOG430-STM/doc/documentationArchitecture.md#add-usabilit%C3%A9)](#rdtq-contrôle-et-observe-létat-du-système)
        - [RDTQ-limiter la complexité](#rdtq-limiter-la-complexité)
        - [Relation entre les éléments architectuale et les exigences de testabilité](#relation-entre-les-éléments-architectuale-et-les-exigences-de-testabilité)
    - [RDAQ-Usabilité](#rdaq-usabilité)
        - [RDTQ-Supporter l'initiative de l'usager](#rdtq-supporter-linitiative-de-lusager)
        - [RDTQ-Supporter l'initiative du système](#rdtq-supporter-linitiative-du-système)
        - [Relation entre les éléments architectuale et les exigences d'usabilité](#relation-entre-les-éléments-architectuale-et-les-exigences-dusabilité)
    - [RDAQ-Interopérabilité](#rdaq-interopérabilité)
        - [RDTQ-Localiser](#rdtq-localiser)
        - [RDTQ-Gérer les interfaces](#rdtq-gérer-les-interfaces)
        - [Relation entre les éléments architectuale et les exigences d'interopérabilité](#relation-entre-les-éléments-architectuale-et-les-exigences-dinteropérabilité)
- [Vues architecturales](#vues-architecturales)
    - [Vues architecturales de type Module](#vues-architecturales-de-type-module)
        - [Vue #1](#vue-1)
        - [Vue #2...](#vue-2)
    - [Vues architecturales de type composant et connecteur](#vues-architecturales-de-type-composant-et-connecteur)
        - [Vue #1](#vue-1-1)
        - [Vue #2...](#vue-2-1)
    - [Vues architecturales de type allocation](#vues-architecturales-de-type-allocation)
        - [Vue #1](#vue-1-2)
        - [Vue #2 ...](#vue-2-)
- [Conclusion](#conclusion)
- [Documentation des interfaces](#documentation-des-interfaces)

# Page titre

# Introduction

> TODO: insérer votre introduction

# Scénario d'objectif d'affaire

## OA-1. Faciliter le recrutement des nouveaux chargés de laboratoire.

<span style="color:red">Expliquer et démontrez comment votre architecture permet la réalisation de votre scénario
d'objectif d'affaire. </span>

## OA-2. Validez si le transport par autobus est toujours plus rapide, peu importe l'heure de la journée

<span style="color:red">Expliquer et démontrez comment votre architecture permet la réalisation de votre scénario
d'objectif d'affaire. </span>

# Cas d'utilisations

### **CU01** - Veux comparer les temps de trajet.

**Acteurs externe:**

- **Chargé de laboratoire:** Veut pouvoir faire la correction de chaque cas d'utilisation.

**Précondition:**

- Tous les microservices sont opérationnels

**Évènement déclencheur:**

- La documentation pour ce cas d'utilisation est terminé et l'équipe demande au chargé de laboratoire de corriger
  celle-ci.
- L'intégration est complété et l'équipe demande au chargé de laboratoire de corriger celle-ci
- L'implémentation est complété est l'équipe demande au chargé de laboratoire de corriger celle-ci.

**Scénario**

1. Le (chargé de laboratoire) CL sélectionne une intersection de départ et une intersection d'arrivée, ainsi que le taux
   de rafraichissement de la prise de mesure.
2. Le CL sélectionne le [service externe](service-externe.md) qu'il veut utiliser pour faire la comparaison des temps de
   trajet avec les donnés temps réel de la STM.
3. Le système affiche un graphique du temps de déplacement et met celui-ci à jour selon le taux de rafraichissement.

**Évènement résultant:**

- Le système affiche un graphique des comparatifs de temps de déplacement qui se met à jours selon le taux de
  rafraichissement.

**Postcondition:**

- Le système est en attente d'une nouvelle commande de l'utilisateur

**Cas alternatifs:**

1. a  **Service externe:** Utiliser plusieurs [services externes](service-externe.md) disponibles pour faire le
   comparatif.

**Attributs de qualité**
Documenter l'ensemble des attributs de qualité qui s'appliquent à ce scénario en terme d'objectif et de mesure.

##### CU01-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red"> Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-M1 [**Modifiabilité**](#add-modifiabilité)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-P1 [**Performance**](#add-performance)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-S1 [**Sécurité**](#add-sécurité)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-T1 [**Testabilité**](#add-testabilité)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-U1 [**Usabilité**](#add-testabilité)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>
#### CU01-I1 [**Interopérabilité**](#add-interopérabilité)
<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

- <span style="color:red">Quel sont vos remarques/commentaires par rapport à ce scénario</span>

### **CU02** - Veux pouvoir mettre le chaos dans les microservices.

**Acteurs externe:**

- Chargé de laboratoire: Veut pouvoir faire la correction de chaque cas d'utilisation.

**Précondition:**

- Tous les microservices sont opérationnels

**Évènement déclencheur:**

- La documentation pour cet attribut est terminé et l'équipe demande au chargé de laboratoire de corriger celle-ci.
- L'intégration est complété et l'équipe demande au chargé de laboratoire de corriger celle-ci
- L'implémentation est complété est l'équipe demande au chargé de laboratoire de corriger celle-ci.

**Scénario**

1. Un mécanisme automatique et aléatoire de perturbation vient modifier l'architecture de votre système et vous devez
   vous assurer de quand même respecter les exigences client en terme d'attribut de qualité et de fonctionnalité.

**Évènement résultant:**

- L'architecture de votre système est perturbé par le mécanisme.
- Le système conserve un log des perturbations
- Le système conserve un log de comment le système a réagit pour résoudre le problème.

**Postcondition:**

- Les mécanismes de traitement des attributs de qualité détectent le problème et modifie automatiquement l'architecture
  de votre système pour qu'il continue à respecter les exigences client.

**Cas alternatifs:**

- 1.a La perturbation consiste à détruire un microservice
- 1.b La perturbation consiste à augmenter la latence d'un microservice

**Attributs de qualité**

Documenter l'ensemble des attributs de qualité qui s'appliquent à ce scénario en terme d'objectif et de mesure.

#### CU02-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU02-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

- <span style="color:red">Quel sont vos remarques/commentaires par rapport à ce scénario</span>

### **CU03** - <span style="color:red">Veux pouvoir vérifier la disponibilité d'un micro-service</span>

**Acteurs externe:**

- Chargé de laboratoire: Veut pouvoir faire la correction de chaque cas d'utilisation.
- Un micro-service externe au notre.
  **Précondition:**- Le micro-service du Health Monitor est opérationnel.
- Le micro-service Discovery est opérationnel.

**Évènement déclencheur:**- La documentation pour cet attribut est terminé et l'équipe demande au chargé de laboratoire
de corriger celle-ci.

- L'intégration est complété et l'équipe demande au chargé de laboratoire de corriger celle-ci.
- L'implémentation est complété est l'équipe demande au chargé de laboratoire de corriger celle-ci.

**Scénario**

1. Un micro-service appelle notre Health Monitor afin de connaître la disponibilité d'un autre micro-service.
2. Le Health Monitor envoie un ping au micro-service demandé en attendant une réponse.
3. Le Health Monitor renvoi une confirmation indiquant la disponibilité d'un micro-service.

**Évènement résultant:**

- Le Health Monitor renvoie la disponibilité du micro-service demandé.

**Postcondition:**- Le Health Monitor est en attente d'un nouvel appel d'un micro-service.

**Cas alternatifs:**
2a. Le micro-service ne renvoi pas de réponse au Health Monitor.

- 2a1 On répète l'étape 2 cinq fois de suite.
- 2a2 Le Health Monitor renvoie un message d'erreur indiquant que le micro-service est indisponible à Discovery.

**Attributs de qualité**

#### CU03-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Le service doit être disponible 99.9% du temps.</span>

#### CU03-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Il doit être possible d'effectuer une modification mineure sur le module du Health Monitor en
dedans de 3 heures.</span>

#### CU03-P1 [**Performance**](#add-performance)

<span style="color:red">Le module doit pouvoir recevoir une réponse du micro-service en moins de 100ms.</span>

#### CU03-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Le service doit être protéger des attaques DDOS.</span>

#### CU03-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">L'on doit pouvoir créer des tests pouvant couvrir 90% du module et ce, en 3 heures.</span>

#### CU03-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">L'utilisateur doit pouvoir voir en tout temps que le système est actif et qu'il vérifie l'état
des requêtes du système.</span>

#### CU03-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">L'on doit pouvoir communiquer avec les autres modules de manière à ce que l'information pour
contacter les autres services soit centraliser pour tous.</span>

**Commentaires:**

### **CU04** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU04-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU04-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU05** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU05-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU05-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU06** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU06-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU06-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU07** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU07-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU07-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU08** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU08-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU08-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU09** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU09-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU09-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

### **CU10** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation.</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU10-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU10-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

**Commentaires:**

# Vue architecturale de contexte

<span style="color:red">Utiliser le gabarit
suivant: https://wiki.sei.cmu.edu/confluence/display/SAD/Template%3AArchitectureViewTemplate</span>

## Présentation primaire

## Catalogue d'éléments

## <s>Diagramme de contexte</s> Pas nécessaire puisque c'est déja un vue de contexte

## Guide de variabilité

## Raisonnement

## <s>Vues associées</s> pas nécessaire puisque c'est la première vue que vous réalisé pour votre système.

# Conception axée sur les attributs de qualité

A partir des qualités associées à tous vos cas d'utilisation, réaliser un mini ADD pour comparer les différents
tactiques et identifier clairement la raison de votre choix.

## ADD-[Disponibilité](#rdaq-disponibilité)

|Identifiant| Description                                                                              |
  |------------------------------------------------------------------------------------------|------------|
|[CU01-D1](#cu01-d1-disponibilité)|                                                                                          |
|[CU02-D1](#cu02-d1-disponibilité)|                                                                                          |
|[CU03-D1](#cu03-d1-disponibilité) | Pour le service de Monitoring, nous implémenterons une tactique de Removal from service. | 
|[CU04-D1](#cu04-d1-disponibilité) |
|[CU05-D1](#cu05-d1-disponibilité) |
|[CU06-D1](#cu06-d1-disponibilité) |
|[CU07-D1](#cu07-d1-disponibilité) |
|[CU08-D1](#cu08-d1-disponibilité) |
|[CU09-D1](#cu09-d1-disponibilité) |
|[CU10-D1](#cu10-d1-disponibilité) |

### ADD-[détection de faute](#rdtq-détection-de-faute)

<div class="concept disponibilite">

| Concept de design             | Pour                                                                                                                                       |  Contre                                                                                                                                                                  | Valeur | Cout|
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Ping / Echo</li>          | Simple à implémenter et utilise <br/>la télécommunication IP.                                                                              | N'offre pas la raison pour laquelle <br/>le service qu'on veut rejoindre <br/>n'est plus disponible.                                                                     |M|M|
| <li>Monitor</li>              | Délégation de la responsabilité <br/>à une entité propre, permet de <br/>détecter les pannes de plusieurs façons.                          | Doit être un service lui-même, s'il <br/>tombe en panne, on ne sait plus <br/>l'état des autres entités du système.                                                      |M|M|
| <li>Heartbeat</li>            | Assure une performance en communiquant <br/>l'état à travers d'autres messages. Plus <br/>d'informations dans le message que le Ping/Echo. | Plus difficile à implémenter, chaque<br/>service doit s'inscrire au Monitor <br/>et savoir comment communiquer avec lui.                                                 |M|M|
| <li>Timestamp</li>            | Permet de savoir comment et quand <br/>une panne a lieu puisque chaque stamp<br/>est associé à un timestamp.                               | Peut être fastidieux à implémenter.                                                                                                                                      |M|M|
| <li>Sanity Checking</li>      | Permet d'avoir des informations <br/>précises sur la cause de la panne.                                                                    | Nécessite une bonne connaissance du <br/>service et du flow de ses opérations.                                                                                           |M|M|
| <li>Condition Monitoring</li> | Prévient les comportements <br/>qui peuvent causer des pannes.                                                                             | Peut introduire de nouvelles erreurs <br/>si le système est trop complexe.                                                                                               |M|M|
| <li>Voting</li>               | Prévient les pannes en utilisant <br/>plusieurs fois le même système en parallèle.                                                         | Utilise plus de ressources et on doit <br/>implémenter une certaine logique pour<br/> savoir quelle information est la bonne lorsque <br/>les sorties ne concordent pas. |M|M|
| <li>Exception Detection</li>  | Lève une exception lorsqu'un comportement<br/> fautif se produit, permet de garder en <br/>ligne le service.                               | Difficile de prévenir tous les <br/>comportements fautifs.                                                                                                               |M|M|
| <li>Self-test</li>            | Teste les procédures d'un sous-système, <br/>facile de corriger à l'avance les problèmes<br/> qui peuvent survenir plus tard.                        | Long à implémenter.                                                                                                                                                      |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Monitor pour notre micro-service de gestion de trajets selon un utilisateur. Nous avons implémenté le micro-service de monitoring alors il sera plus simple d'implémenter cette tactique.

### ADD-[Préparation et réparation](#rdtq-préparation-et-réparation)

<div class="concept disponibilite">

| Concept de design               | Pour                                                                                                                                                                               |  Contre                                                                                                                                                                       | Valeur | Cout|
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Redondance active</li>      | Les noeuds redondants processent en parallèle<br/>les inputs ce qui fait que lorsqu'un défaut survient<br/>sur le module originale la transition se fait de façon<br/>instantanée. | Besoin de plus de ressources pour processer<br/>les inputs en double, Il faut aussi implémenter<br/>la façon que les noeuds redondants procèssent<br/>les informations aussi. |M|M|
| <li>Redondance passive</li>     | Seulement certains noeuds sont redondants et<br/>reçoivent des mises à jour périodiques. La redondance<br/>passive est moins complexe et celle active et coûte<br/>moins cher.     | Assure moins la disponibilité que la redondance <br/>active.                                                                                                                  |M|M|
| <li>Spare</li>                  | Les noeuds redondants sont activés seulement en cas<br/>de défauts, coûte encore moins cher.                                                                                       | Mauvaise performance de récupération.                                                                                                                                         |M|M|
| <li>Exception handling</li>     | Permet de savoir la cause et l'endroit d'une panne.<br/>Permet de facilement corriger la source de l'erreur<br/>et réessayer.                                                      | Plus de codes à écrire.                                                                                                                                                       |M|M|
| <li>Rollback</li>               | Permet de revenir rapidement à un environnement qui<br/>fonctionnait.                                                                                                              | Nécessite de sauvegarder les états des <br/>environnements antérieurs, il faut aussi<br/>les stocker à un endroit.                                                            |M|M|
| <li>Software upgrade</li>       | Les correctifs pour les clases et les fonctions permettent<br/>de fixer des bugs alors que le ISSU permet d'offrir des<br/>nouvelles fonctionnalités.                              | Très difficile à implémenter.                                                                                                                                                 |M|M|
| <li>Retry</li>                  | Assume la faute est transitoire et que le fait de réessayer<br/>fonctionnera. Très simple et utile pour les systèmes<br/>où les erreurs sont communes.                             | N'assure pas vraiment une disponibilité.                                                                                                                                      |M|M|
| <li>Ignore faulty behavior</li> | Utile pour se protéger des attaques, les comportements<br/>à défaut le sont à cause d'un agent extérieur.                                                                          | N'assure pas une disponibilité pour les problèmes <br/>internes.                                                                                                              |M|M|
| <li>Degradation</li>            | Permet de garder certaines fonctionnalités du système<br/>en cas de défaut.                                                                                                        | Certaines fonctionnalités ne sont plus disponibles,<br/>comment les réintroduire?                                                                                             |M|M|
| <li>Reconfiguration</li>        | Permet de garder certaines fonctionnalités du système<br/>en cas de défaut.                                                                                                                                                                          | Comment déterminer les responsabilités à <br/>reconfigurer et réassigner? Complexe.                                                                                           |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Exception handling pour notre micro-service de gestion de trajets selon un utilisateur. Notre service aura plusieurs fonctionnalités alors il sera important de savoir l'endroit de la source d'erreur.

### ADD-[Réintroduction](#rdtq-réintroduction)

<div class="concept disponibilite">

| Concept de design                | Pour                                                                                                                         |  Contre                                                            | Valeur | Cout|
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|--------|-----|
| <li>Shadow</li>                  | Permet de réintroduire le service en retrait <br/>pour repopuler de façon <br/>incrémentale et de monitorer.                 | Il faut implémenter la logique de réintroduction<br/>incrémentale. |M|M|
| <li>State Resynchronization</li> | Permet de réintroduire le service en utilisant<br/>la redondance active. Assure la véracité des<br/>données traitées.        | Complexe à implémenter.                                            |M|M|
| <li>Escalating restart</li>      | Permet de réintroduire le service granulairement, <br/>par phases. Minimise le niveau de services<br/>affectés.              | Complexe à implémenter.                                            |M|M|
| <li>Non stop forwarding</li>     | Permet de continuer le transfert de paquets<br/>sur les routes connues, en attendant la<br/>réparation des tables de routage. | Plus au niveau réseautique.                                        |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Escalating restart pour notre micro-service de gestion de trajets selon un utilisateur. Ce sera utile pour notre micro-service de gestion de trajets selon un utilisateur, parce que notre service peut être divisé en plusieurs morceaux et ceux-ci peuvent être réintroduits progressivement.

### ADD-[Prévention des fautes](#rdtq-prévention-des-fautes)

<div class="concept disponibilite">

| Concept de design                | Pour                                                                                                                                                                                                     |  Contre                                                                                                                                                                                                                                                                   | Valeur | Cout|
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Removal from service</li>    | Simple à implémenter, il faut juste bien<br/>détecter les évènements qui pourraient causer <br/>un défaut parce que sinon on empêche<br/>l'utilisation de notre service à nos utilisateurs.              | Même si pour cette tactique l'objectif est<br/>de prévenir les défauts en mettant <br/>volontairement des composants de notre<br/>système out-of-service brièvement<br/>nous empêchons quand même pendant <br/>quelques secondes l'utilisateur d'utiliser<br/>le service. |M|M|
| <li>Transactions</li>            | Le concept ACID est une bonne règle à suivre<br/>pour avoir un service dont les données sont<br/>toujours cohérentes et que celles-ci ne causent <br/>pas de problèmes de disponibilité.                 | S'assurer d'avoir des échanges ACID entre<br/>nos systèmes peut être complexe à <br/>implémenter par exemple, avoir un système de<br/>rollback lorsqu'un échange cause une erreur <br/>à la fin de son éxécution est long à implémenter.                                  |M|M|
| <li>Predictive model</li>        | Permet de réagir correctement à plusieurs <br/>éventualités qui peuvent causer un défaut.                                                                                                                | Difficile de définir et construire un modèle<br/>de prédiction, sur quelles variables <br/>doit on nous baser?                                                                                                                                                            |M|M|
| <li>Exception prevention</li>    | Permet de prévenir les exceptions de systèmes.<br/> Évite les fuites de mémoire.                                                                                                                         | Difficile à implémenter.                                                                                                                                                                                                                                                  |M|M|
| <li>Increase competence set</li> | Donne aux programmes les outils pour gérer les<br/> états en dehors de son ensemble de compétences.<br/> Va lancer exception pour avertir les autres <br/>composants du système sans tout faire planter. | Difficile de prévoir tous les types <br/>d'exceptions.                                                                                                                                                                                                                    |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Removal from service puisqu'elle est quand même simple à implémenter.
<br/>Notre service étant uniquement utilisable par des requêtes GET, il sera facile de contrôler les appels et de réagir en conséquence.

## ADD-[Modifiabilité](#rdaq-modifiabilité)

|Identifiant| Description                                                         |
  |---------------------------------------------------------------------|------------|
|[CU01-M1](#cu01-m1-modifiabilité) |                                                                     |
|[CU02-M1](#cu02-m1-modifiabilité) |                                                                     |
|[CU03-M1](#cu03-m1-modifiabilité) | Pour le monitoring, nous avons choisi la tactique du defer binding. |
|[CU04-M1](#cu04-m1-modifiabilité) |                                                                     |
|[CU05-M1](#cu05-m1-modifiabilité) |                                                                     |
|[CU06-M1](#cu06-m1-modifiabilité) |                                                                     |
|[CU07-M1](#cu07-m1-modifiabilité) |                                                                     |
|[CU08-M1](#cu08-m1-modifiabilité) |                                                                     |
|[CU09-M1](#cu09-m1-modifiabilité) |                                                                     |
|[CU10-M1](#cu10-m1-modifiabilité) |                                                                     |

### ADD-[Réduire la taille des modules](#rdtq-réduire-la-taille-des-modules)

<div class="concept modifiabilite">

| Concept de design     | Pour                                                                                                   |  Contre                         | Valeur | Cout|
|-----------------------|--------------------------------------------------------------------------------------------------------|---------------------------------|--------|-----|
| <li>Split module</li> | Séparer le code en modules <br/>permet une meilleure flexibilité <br/>lors d'ajout de fonctionnalités. | Développement un peu plus long. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Split module pour notre micro-service de gestion de trajets selon un utilisateur. Notre micro-service aura plusieurs responsabilités et il sera primordiale de bien séparer les modules pour permettre une bonne extensibilité des fonctionnalités.

### ADD-[Augmenter la cohésion](#rdtq-augmenter-la-cohésion)

<div class="concept modifiabilite">

| Concept de design                    | Pour                                                                                                         |  Contre                     | Valeur | Cout|
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------|--------|-----|
| <li>Increase semantic coherence</li> | Permet une meilleure séparation<br/> des responsabilités, rend le code<br/>plus facile à lire et comprendre. | Peut augmenter le couplage. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Increase semantic coherence pour notre micro-service de gestion de trajets selon un utilisateur. Notre micro-service aura plusieurs responsabilités et celles-ci devront être bien séparées pour assurer une bonne cohésion.

### ADD-[Réduire le couplage](#rdtq-réduire-le-couplage)

<div class="concept modifiabilite">

| Concept de design                         | Pour                                                                                               |  Contre                                                                                  | Valeur | Cout|
|-------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------|-----|
| <li>Encapsulation</li>                    | Permet la modification de modules<br/>sans propager les changements dans <br/>d'autres modules.    | Limite la flexibilités des interactions<br/>venant de l'extérieur du module.             |M|M|
| <li>Intermédiaire</li>                    | Brise une mauvaise dépendance <br/>entre deux modules.                                             | Implémentation de plus pour faire la médiation.                                          |M|M|
| <li>Restriction des dépendances</li>      | Empêche l'utilisation de modules hors<br/>de la portée du module concerné.                         | Nécessite une bonne structure des modules<br/>pour ne pas empêcher une bonne dépendance. |M|M|
| <li>Refactorisation</li>                  | Réduit la répétition de code.                                                                      | Peut rendre le code difficile à lire.                                                    |M|M|
| <li>Abstraction des services communs</li> | Réduit la répétition de code. Nécessite la <br/>modification à un endroit à la place de plusieurs. | Peut rendre le code difficile à lire.                                                                               |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique intermédiaire pour notre micro-service de gestion de trajets selon un utilisateur. Notre micro-service sera utilisé par d'autres applications alors notre système s'enregistrera au près d'un service de discovery.

### ADD-[Defer binding](#rdtq-defer-binding)

<div class="concept modifiabilite">

| Concept de design          | Pour                                                                                                                                                                   |  Contre                                                                    | Valeur | Cout|
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|--------|-----|
| <li>Publish-subscribe</li> | Permet d'avoir l'information relié à un <br/>évènement sans connaître la source <br/>du dit évènements. Réduit le couplage <br/>et permet une meilleure extensibilité. | La file de messages peut être encombré<br/> et causer des ralentissements. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous utiliserons la patron architecturale Publish-subscribe pour aller chercher les informations
<br/>des nouveaux micro-services qui s'enregistrent auprès du service de Discovery.

## ADD-[Performance](#rdaq-performance)

|Identifiant|Description|
  |-----------|------------|
|[CU01-P1](#cu01-p1-performance) |
|[CU02-P1](#cu02-p1-performance) |
|[CU03-P1](#cu03-p1-performance) | Pour le monitoring, nous avons choisi la tactique Maintain multiple copies of computations
|[CU04-P1](#cu04-p1-performance) |
|[CU05-P1](#cu05-p1-performance) |
|[CU06-P1](#cu06-p1-performance) |
|[CU07-P1](#cu07-p1-performance) |
|[CU08-P1](#cu08-p1-performance) |
|[CU09-P1](#cu09-p1-performance) |
|[CU10-P1](#cu10-p1-performance) |

### ADD-[Contrôler la demande en ressources](#rdtq-contrôler-la-demande-en-ressources)

<div class="concept performance">

| Concept de design                     | Pour                                                                                                                                                                     |  Contre                                                                                                                                                                          | Valeur | Cout|
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Manage sampling rate</li>         | Utile pour traiter un très grand nombre de données, <br/>lorsque ceux-ci peuvent être ignorées pour avoir<br/>une meilleure performance.                                 | Mauvais si la fidélité des données est un aspect<br/>très important.                                                                                                             |M|M|
| <li>Limit event response</li>         | Utile pour traiter beaucoup de données sur <br/>un grand lapse de temps, les données sont <br/>dans une file d'attente et seront traitées lorsque<br/>ce sera leur tour. | Peut prendre du temps à traiter toutes <br/>les données, certaines requêtes importantes<br/>peuvent être bloquées longtemps.                                                     |M|M|
| <li>Prioritize events</li>            | Utile pour traiter beaucoup de données et garder<br/>une certaine performance. Priorise les requêtes<br/>jugées plus importantes de la file en premier.                  | Il faut définir sous quelles conditions quels<br/>évènements sont plus importants.                                                                                               |M|M|
| <li>Reduce overhead</li>              | Meilleure performance parce qu'on enlève l'utilisation<br/>d'intermédiaires.                                                                                             | Perte de cohésion, traitement centralisé, moins<br/>extensible.                                                                                                                  |M|M|
| <li>Bound execution times</li>        | Utilie pour limiter le temps que peut prendre une<br/>requête à être processée. Par le fait même, <br/>empêche d'avoir des problèmes de boucles<br/>infinies.            | Difficile de déterminer quel sera le temps limite.<br/> Cela peut aussi cause des résultats moins <br/>précis comme par exemple, lorsque<br/>énomément de données sont traitées. |M|M|
| <li>Increase resource efficiency</li> | Meilleure performance parce que <br/>algorithmes mieux concus.                                                                                                                | Écrire des algorithmes optimales est difficile.                                                                                                                                  |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Bound execution times pour limiter le temps qu'une requête peut prendre dans notre système.
<br/>Puisque c'est un micro-service qui pingera les autres entités du système, il se peut qu'un système soit out-of-service et par le fait
<br/>même ralentisse l'éxécution de la requête à cause de Timeout.

### ADD-[Gérer les ressources](#rdtq-gérer-les-ressources)

<div class="concept performance">

| Concept de design                                 | Pour                                                                                                                                        |  Contre                                                                                                    | Valeur | Cout|
|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Increase resources</li>                       | Meilleure performance parce que<br/>plus de ressources.                                                                                     | Coûte cher.                                                                                                |M|M|
| <li>Introduce concurrency</li>                    | Meilleure performance parce que<br/>les processus qui traitent la requête <br/>fonctionnent en parallèle.                                   | Difficile à implémenter.                                                                                   |M|M|
| <li>Maintain multiple copies of computations</li> | Meilleure performance parce que <br/>les requêtes peuvent être traitées plusieurs <br/>à la fois. Réduit les bloquages sur le même serveur. | Il faut implémenter une logique pour<br/>dispatcher les requêtes.                                          |M|M|
| <li>Maintain multiple copies of data</li>         | Meilleure performance parce que <br/>les données sont storées sur plusieurs serveurs,<br/> utilisation de caches pour réduire bloquages.    | Équipements coûtent cher.                                                                                  |M|M|
| <li>Bound queue sizes</li>                        | Limite le nombre de requêtes qui peuvent <br/>s'accumuler dans la file <br/>alors assure une performance.                                   | Il faut définir ce qui arrive lorsque la file <br/>déborde, on fait quoi avec les <br/>nouvelles requêtes? |M|M|
| <li>Schedule resources</li>                       | Réduit la contention sur les ressources, le réseau, <br/>les processus.                                                                     | Il faut définir quoi faire lorsque lorsqu'il<br/> y a contention sur une ressource.                        |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Maintain multiple copies of computations puisqu'il est quand même facile d'avoir plusieurs
<br/>container dans portainer.

## ADD-[Sécurité](#rdaq-sécurité)

| Identifiant                     | Description                                                        |
|---------------------------------|--------------------------------------------------------------------|
| [CU01-S1](#cu01-s1-securite) ||
| [CU02-S1](#cu02-s1-securite) ||
| [CU03-S1](#cu03-s1-securite) | Pour le monitoring, on a choisi la tactique detect service denial. |
| [CU04-S1](#cu04-s1-securite) ||
| [CU05-S1](#cu05-s1-securite) ||
| [CU06-S1](#cu06-s1-securite) ||
| [CU07-S1](#cu07-s1-securite) ||
| [CU08-S1](#cu08-s1-securite) ||
| [CU09-S1](#cu09-s1-securite) ||
| [CU10-S1](#cu10-s1-securite) ||

### ADD-[Détecter les attaques](#rdtq-détecter-les-attaques)

<div class="concept securite">

| Concept de design                 | Pour                                                                                                                                                                                          |  Contre                                                                                          | Valeur | Cout|
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------|-----|
| <li>Detect intrusion</li>         | Permet de se protéger des types d'intrusion commun, <br/>puisqu'on utilise une base données contenant les<br/>signatures du traffic réseau.                                                   | Très difficile à implémenter, doit connaître a priori<br/>les types d'intrus.                    |M|M|
| <li>Detect service denial</li>    | Protège d'une attaque DDoS qui est sûrement<br/>l'une des types d'attaque les plus facile à<br/>exercer. Il suffit de surcharger un serveur<br/>d'un nombre de requêtes impossible à traiter. | Ne protège pas des attaques plus sournoises <br/>qui peuvent soutirer de l'information sensible. |M|M|
| <li>Verify message integrity</li> | S'assure que le message n'a pas été modifié en<br/>cours de route par un parti tiers qui s'en sert<br/>pour infiltrer le système.                                                             | Le système doit maintenir de l'information redondante.                                           |M|M|
| <li>Detect message delay</li>     | S'assure que le message n'a pas été modifié en<br/>cours de route en mesurant le temps que prend<br/>le message pour se rendre à destination.                                                 | Le message peut être en retard pour plusieurs raisons <br/>et non juste des attaques.            |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Puisque notre micro-service de détiendra pas d'informations sur ses utilisateurs et qu'il ne possédera pas d'informations sensibles,
<br/>nous avons choisis de prendre la tactique Detect service denial. De cette façon, notre service ne sera pas surcharger et pourra rester online.

### ADD-[Résister aux attaques](#rdtq-résister-aux-attaques)

<div class="concept securite">

| Concept de design                | Pour                                                                                                                                                              |  Contre                                                                             | Valeur | Cout|
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|--------|-----|
| <li>Identify actors</li>         | Permet au service de reconnaître la source<br/>d'une requête.                                                                                                     | À implémenter avec autre tactique. <br/>Pas suffisant.                              |M|M|
| <li>Authenticate actors</li>     | Assure au système que les requêtes <br/>faites par un acteur authentifié <br/>sont légitimes.                                                                     | À implémenter avec autre tactique. <br/>Pas suffisant.                              |M|M|
| <li>Authorize actors</li>        | Donne des privilèges aux acteurs qui sont<br/>authentifiés. Assure que ces requêtes<br/>reliées aux privilèges sont légitimes.                                    | À implémenter avec autre tactique. <br/>Pas suffisant.                              |M|M|
| <li>Limit access</li>            | Bloque certains accès critiques aux systèmes,<br/> comme la mémoire et les connexions réseaux.                                                                    | Certaines accès sont bloqués à des <br/>acteurs légitimes.                          |M|M|
| <li>Limit exposure</li>          | Réduit le nombre d'accès possibles et par<br/> le fait même, la probabilités d'une attaque.                                                                       | Ne protège pas activement le système.                                               |M|M|
| <li>Encrypt data</li>            | Protège la communication d'informations<br/> sensibles sur les liens publiques.                                                                                   | Il faut implémenter le système d'encryptage<br/>(VPN, SSL, clés publiques/privées). |M|M|
| <li>Separate entities</li>       | Sépare les données sensibles des données<br/>non-sensibles pour réduire la possibilité<br/>d'attaques venant de ceux qui ont accès<br/>aux données non-sensibles. | Séparer physiquement nécessite <br/>d'autres serveurs/réseaux.                      |M|M|
| <li>Change default settings</li> | Empêche les acteurs malicieux d'avoir <br/>accès au système à cause des paramètres par <br/>défaut connues publiquement.                                          | À implémenter avec autre tactique. <br/>Pas suffisant.                                                                           |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis les tactiques authenticate et authorize actors, puisque notre micro-service, qui fera la gestion des trajets selon l'utilisateur, nécessitera une connexion pour savoir quelles trajets sont à qui.

### ADD-[Réagir aux attaques](#rdtq-réagir-aux-attaques)

<div class="concept securite">

| Concept de design      | Pour                                                                                |  Contre                      | Valeur | Cout|
|------------------------|-------------------------------------------------------------------------------------|------------------------------|--------|-----|
| <li>Revoke access</li> | Permet de limiter les dégâts d'une attaque.                                         | L'attaque est déjà en court. |M|M|
| <li>Lock computer</li> | Bloque un ordinateur suspect d'une attaque éventuelle.                              | Le blocage est temporaire.   |M|M|
| <li>Inform actors</li> | Permet aux acteurs pouvant aider à une<br/>éventuelle attaque de réagir rapidement. | L'attaque est déjà en court.                 |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique de barrer un ordinateur lorsqu'une activité suspecte est détectée. Ça semble être la seule tactique qui bloque l'attaque, même si c'est temporaire.

### ADD-[Récupérer d'une attaque](#rdtq-récupérer-dune-attaque)

<div class="concept securite">

| Concept de design             | Pour                                                                                                                                                                                     |  Contre                                   | Valeur | Cout|
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|--------|-----|
| <li>Maintain audit trail</li> | Permet de maintenir un historique des utilisateurs,<br/>des actions et des effets sur notre système. <br/>Ce qui rend plus facile d'identifier les acteurs et <br/>effets d'une attaque. | Comment et où maintenir cette historique? |M|M|
| <li>Restore</li>              | Qui relève d'une tactique de disponibilité. Permet <br/>de restaurer le système.                                                                                                         | Peut être complexe à implémenter.         |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique restore et plus précisément, le escalating restart. Ce sera utile pour notre micro-service de gestion de trajets selon un utilisateur, parce que notre service peut être divisé en plusieurs morceaux et ceux-ci peuvent être réintroduits progressivement.

## ADD-[Testabilité](#rdaq-testabilité)

|Identifiant| Description                                                                     |
  |---------------------------------------------------------------------------------|------------|
|[CU01-T1](#cu01-t1-testabilité)|                                                                                 | 
|[CU02-T1](#cu02-t1-testabilité)|                                                                                 | 
|[CU03-T1](#cu03-t1-testabilité)| Pour le monitoring, nous avons choisi de limiter la complexité de la structure. | 
|[CU04-T1](#cu04-t1-testabilité)|                                                                                 | 
|[CU05-T1](#cu05-t1-testabilité)|                                                                                 | 
|[CU06-T1](#cu06-t1-testabilité)|                                                                                 | 
|[CU07-T1](#cu07-t1-testabilité)|                                                                                 | 
|[CU08-T1](#cu08-t1-testabilité)|                                                                                 | 
|[CU09-T1](#cu09-t1-testabilité)|                                                                                 | 
|[CU10-T1](#cu10-t1-testabilité)|                                                                                 | 

### ADD-[Controle and observe l'état du système](#rdtq-contrôle-et-observe-létat-du-système)

<div class="concept testabilite">

| Concept de design                           | Pour                                                                                                                                                                                                                        |  Contre                                                                                                   | Valeur | Cout|
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Interfaces spécialisées</li>            | Permet de tester les méthodes d'un objet pour s'assurer<br/>qu'elles font ce qui est désiré. Facile à ajouter ou enlever.                                                                                                   | Plus de code à écrire et ne teste pas les <br/>inputs de l'environnement d'éxécution.                     |M|M|
| <li>Record/Playback</li>                    | Permet de recréer facilement l'environnement <br/>qui a créé un erreur critique en enregistrant<br/>le input et le réutiliser au besoin.                                                                                    | Difficile à implémenter.                                                                                  |M|M|
| <li>Localize State Storage</li>             | Permet de recréer facilement l'environnement <br/>qui a créé un erreur critique en sauvegardant<br/> l'état du système.                                                                                                     | Difficile à implémenter.                                                                                  |M|M|
| <li>Abstraction des sources de données</li> | Permet de tester facilement le système en changeant<br/>l'origine des données.                                                                                                                                              | On doit rendre facile le changement<br/>de la source des données et <br/>avoir une autre base de données. |M|M|
| <li>Bac à sable</li>                        | Permet de faire des tests sans se soucier des <br/>conséquences sur le système. Isole une autre instance <br/>du service et permet l'expérimentation du système <br/>tout en pouvant revenir à l'état d'origine facilement. | Deux instances alors plus de ressources.                                                                  |M|M|
| <li>Executable assertions</li>              | Test les valeurs des input et output au fur et <br/>à mesure de l'éxécution du code.<br/>Rend facile tracer l'évolution de l'état du système.                                                                               | Peut être fastidieux si le système est complexe<br/>et possède beaucoup de lignes de codes.               |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique d'interfaces spécialisées, celle-ci nous permettra de bien tester les exigences fonctionnelles de gestion de trajets selon un utilisateur, puisque ce service aura plus fonctions clées.

### ADD-[Limiter la complexité](#rdtq-limiter-la-complexité)

<div class="concept testabilite">

| Concept de design                              | Pour                                                                                                                                   |  Contre                                                                                                                                        | Valeur | Cout|
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Limiter la complexité de la structure</li> | En réduisant la complexité du système, celui-ci<br/> devient plus facilement testable.                                                 | Si on limite la complexité, on limite <br/>d'autres aspects importants de la conception<br/>logiciel comme l'extensibilité et l'encapsulation. |M|M|
| <li>Limiter le non-déterminisme</li>           | Si on limite la complexité comportementale du<br/>système, comme le parallélisme non contraint, <br/>celui-ci devient plus facile à tester. | Difficile à cibler les comportements non déterministes<br/>et à les remplacer.                                                                 |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisi de limiter la complexité de la structure. Étant un service assez simple, le fait de limiter
<br/>la complexité pour mieux tester ne nous pénalisera pas au niveau de la conception logiciel.

## ADD-[Usabilité](#rdaq-usabilité)

|Identifiant|Description|
  |-----------|------------|
|[CU01-U1](#cu01-u1-usabilité) |
|[CU02-U1](#cu02-u1-usabilité) |
|[CU03-U1](#cu03-u1-usabilité) | Pour le monitoring, la tactique maintain system model a été choisi.
|[CU04-U1](#cu04-u1-usabilité) |
|[CU05-U1](#cu05-u1-usabilité) |
|[CU06-U1](#cu06-u1-usabilité) |
|[CU07-U1](#cu07-u1-usabilité) |
|[CU08-U1](#cu08-u1-usabilité) |
|[CU09-U1](#cu09-u1-usabilité) |
|[CU10-U1](#cu10-u1-usabilité) |

### ADD-[Supporter l'initiative de l'usager](#rdtq-supporter-linitiative-de-lusager)

<div class="concept usabilite">

| Concept de design     | Pour                                                                                                |  Contre                                                                                | Valeur | Cout|
|-----------------------|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------|-----|
| <li>Cancel</li>       | Une commande peut-être annulé par l'utilisateur<br/>facilement, sans causer d'effets secondaires.   | Un écouteur doit être implémenté pour réagir<br/>à l'annulation.                       |M|M|
| <li>Undo</li>         | Permet à l'utilisateur de retourner le système<br/>à un état ultérieur.                             | Un patron memento doit être implémenté et<br/>pas toutes les actions sont réversibles. |M|M|
| <li>Pause/resume</li> | Permet de libérer temporairement les ressources,<br/>ces dernières peuvent être utilisées ailleurs. | Complexe à implémenter.                                                                |M|M|
| <li>Aggregate</li>    | Permet à l'utilisateur d'effectuer des tâches répetitives<br/>plus facilement.                      | Implémentation nécessaire.                                                             |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique aggregate. Puisque notre micro-service fera la gestion de trajets selon un utilisateur, il sera important de permettre à l'utilisateur de, par exemple, supprimer plusieurs trajets en même temps. 

### ADD-[Supporter l'initiative du système](#rdtq-supporter-linitiative-du-système)

<div class="concept usabilite">

| Concept de design              | Pour                                                                                                                                                                                               |  Contre                                                                                                                             | Valeur | Cout|
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Maintain task model</li>   | Utile pour faciliter les tâches que devra réaliiser l'utilisateur,<br/>permet au système d'avoir une certaine connaissance <br/>du contexte des tâches et de les optimiser.                        | C'est un travail minutieux à faire pour s'assurer que<br/>chaque amélioration fonctionne bien, facile d'en oublier.                 |M|M|
| <li>Maintain user model</li>   | Utile pour connaître les habitudes de certains types <br/>d'utilisateurs et permet de s'adapter à ces utilisateurs<br/>en changeant certaines fonctionnalités ou en permettant<br/>de les changer. | Il peut être difficile de garder un modèle de l'utilisateur<br/>dans un système et de permettre une flexibilité selon <br/>le type. |M|M|
| <li>Maintain system model</li> | Utile pour montrer à l'utilisateur que le système<br/>travaille même s'il ne donne pas de résultats immédiats.                                                                                     | L'état du système doit être représenté dans la vue<br/>et ce de façon évidente, peut prendre un peu de temps<br/>à implémenter.     |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique maintain system model, il est facile de bien représenter l'état des autres micro-services dans un dashboard. De plus, l'utilisateur aura facilement accès à ce tableau et pourra lui-même vérifier l'état des services. 

## ADD-[Interopérabilité](#rdaq-interopérabilité)

|Identifiant| Description                                                         |
  |---------------------------------------------------------------------|------------|
|[CU01-I1](#cu01-i1-interopérabilité)|                                                                     | 
|[CU02-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU03-I1](#cu01-i1-interopérabilité)| Pour le monitoring, nous avons choisi la tactique discover service. |
|[CU04-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU05-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU06-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU07-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU08-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU09-I1](#cu01-i1-interopérabilité)|                                                                     |
|[CU10-I1](#cu01-i1-interopérabilité)|                                                                     |

### ADD-[Localiser](#rdtq-localiser)

<div class="concept interoperabilite">

| Concept de design         | Pour                                                                                                                                                                                                                                                                        |  Contre                                                                                                                                                    | Valeur | Cout|
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Discover service</li> | Centralise l'information pour communiquer<br/> avec n'importe quelle service. Pas besoin <br/>de connaître personnellement le service qu'on<br/>veut rejoindre. De plus, lorsqu'un service change<br/> ses informations il suffit de demander au service <br/>de discovery. | Puisque c'est centralisé, il est très important<br/>que le service de Discovery soit fiable et ne <br/>soit pas susceptible de tomber en panne facilement. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Discover service, elle permet de centraliser les informations des micro-services dans une architecture.
<br/>Pas besoin de connaître les nouveaux services dans un système, il suffit de communiquer avec le service de discovery.

### ADD-[Gérer les interfaces](#rdtq-gérer-les-ressources)

<div class="concept interoperabilite">

| Concept de design         | Pour                                                                                         |  Contre                                                                                      | Valeur | Cout|
|---------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|--------|-----|
| <li>Orchestrate</li>      | Permet aux systèmes d'intéragir plus facilement<br/>lorsque les interactions sont complexes. | Difficile à implémenter, nécessite l'implémentation<br/>d'un patron, par exemple, médiateur. |M|M|
| <li>Tailor interface</li> | Permet de cacher des fonctions <br/>particulières aux utilisateurs non connus.               | Peut enlever des fonctions importantes <br/>de l'interface.                                       |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisis la tactique Tailor interfaces. Pour notre micro-service de gestion de trajets selon un utilisateur, nous permettront l'accès à certaines fonctions seulement aux utilisateurs connus.

# Réalisation des cas d'utilisation

### [**RDCU-CU01**](#cu01---veux-comparer-les-temps-de-trajet) - Veux comparer les temps de trajet.

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### [**

RDCU-CU02**](#cu02---veux-pouvoir-mettre-le-chaos-dans-les-services-en-mode) - Veux pouvoir mettre le chaos dans les
services en mode.

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### [**RDCU-CU03** - Veux pouvoir vérifier la disponibilité d'un micro-service](#cu03---veux-pouvoir-verifier-la-disponibilite-un-micro-service)

![RDCU-CU03](./rdcu-getOneApiHealth/rdcu-getOneApiHealth.png)

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU04** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU05** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU06** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU07** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU08** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU09** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### **RDCU-CU10** -

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

# Réalisation des attributs de qualité

## RDAQ-[Disponibilité](#add-disponibilité)

### [RDTQ-Détection de faute](#add-détection-de-faute)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Préparation et réparation](#add-préparation-et-réparation)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Réintroduction](#add-réintroduction)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Prévention des fautes](#add-prévention-des-fautes)

<span style="color:red">Removal From Service</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="505px" preserveAspectRatio="none" style="width:977px;height:505px;background:#FFFFFF;" version="1.1" viewBox="0 0 977 505" width="977px" zoomAndPan="magnify"><defs/><g><rect fill="none" height="202.4609" style="stroke:#000000;stroke-width:1.5;" width="960.5" x="10" y="203.6641"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="41" x2="41" y1="82.6094" y2="423.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="341" x2="341" y1="82.6094" y2="423.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="565" x2="565" y1="82.6094" y2="423.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="877.5" x2="877.5" y1="82.6094" y2="423.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="79.5332">Client</text><ellipse cx="41" cy="13.5" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,21.5 L41,48.5 M28,29.5 L54,29.5 M41,48.5 L28,63.5 M41,48.5 L54,63.5 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="436.6582">Client</text><ellipse cx="41" cy="448.2344" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,456.2344 L41,483.2344 M28,464.2344 L54,464.2344 M41,483.2344 L28,498.2344 M41,483.2344 L54,498.2344 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="280" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="287" y="71.5332">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="280" y="422.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="287" y="443.6582">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="74" x="528" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="60" x="535" y="71.5332">IpHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="74" x="528" y="422.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="60" x="535" y="443.6582">IpHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="165" x="795.5" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="151" x="802.5" y="71.5332">ServiceRemovalHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="165" x="795.5" y="422.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="151" x="802.5" y="443.6582">ServiceRemovalHandler</text><polygon fill="#181818" points="329,110.9609,339,114.9609,329,118.9609,333,114.9609" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="41" x2="335" y1="114.9609" y2="114.9609"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="276" x="48" y="110.1045">checkHealth(senderIp:string, requestedIp:string)</text><polygon fill="#181818" points="553,141.3125,563,145.3125,553,149.3125,557,145.3125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="341" x2="559" y1="145.3125" y2="145.3125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="200" x="348" y="140.4561">denyServiceCheck(senderIp:string)</text><line style="stroke:#181818;stroke-width:1.0;" x1="565" x2="607" y1="175.6641" y2="175.6641"/><line style="stroke:#181818;stroke-width:1.0;" x1="607" x2="607" y1="175.6641" y2="188.6641"/><line style="stroke:#181818;stroke-width:1.0;" x1="566" x2="607" y1="188.6641" y2="188.6641"/><polygon fill="#181818" points="576,184.6641,566,188.6641,576,192.6641,572,188.6641" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="299" x="572" y="170.8076">addRequestCount(senderIp:string, requestCount:int)</text><path d="M10,203.6641 L71,203.6641 L71,212.0156 L61,222.0156 L10,222.0156 L10,203.6641 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="202.4609" style="stroke:#000000;stroke-width:1.5;" width="960.5" x="10" y="203.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="16" x="25" y="218.1592">alt</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="103" x="86" y="217.083">[requestCount &gt; 5]</text><polygon fill="#181818" points="866,240.3672,876,244.3672,866,248.3672,870,244.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="565" x2="872" y1="244.3672" y2="244.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="172" x="572" y="239.5107">blockRequest(senderIp:string)</text><polygon fill="#181818" points="576,270.7188,566,274.7188,576,278.7188,572,274.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="570" x2="877" y1="274.7188" y2="274.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="582" y="269.8623">deny message</text><polygon fill="#181818" points="352,301.0703,342,305.0703,352,309.0703,348,305.0703" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="346" x2="564" y1="305.0703" y2="305.0703"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="358" y="300.2139">deny message</text><polygon fill="#181818" points="52,331.4219,42,335.4219,52,339.4219,48,335.4219" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="46" x2="340" y1="335.4219" y2="335.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="58" y="330.5654">deny message</text><line style="stroke:#000000;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="10" x2="970.5" y1="344.4219" y2="344.4219"/><polygon fill="#181818" points="352,363.7734,342,367.7734,352,371.7734,348,367.7734" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="346" x2="564" y1="367.7734" y2="367.7734"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="180" x="358" y="362.917">acceptRequest(senderIp:string)</text><polygon fill="#181818" points="52,394.125,42,398.125,52,402.125,48,398.125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="46" x2="340" y1="398.125" y2="398.125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="96" x="58" y="393.2686">api health status</text>

### Relation entre les éléments architectuale et les exigences de disponibilité

|Identifiant|Éléments|Description de la responabilité|
 |-----------|--------|-------------------------------|
|[CU01-D1](#cu01-d1-disponibilité) | |
|[CU02-D1](#cu02-d1-disponibilité) | |
|[CU03-D1](#cu03-d1-disponibilité) | |
|[CU04-D1](#cu04-d1-disponibilité) | |
|[CU05-D1](#cu05-d1-disponibilité) | |
|[CU06-D1](#cu06-d1-disponibilité) | |
|[CU07-D1](#cu07-d1-disponibilité) | |
|[CU08-D1](#cu08-d1-disponibilité) | |
|[CU09-D1](#cu09-d1-disponibilité) | |
|[CU10-D1](#cu10-d1-disponibilité) | |

## RDAQ-[Modifiabilité](#add-modifiabilité)

### [RDTQ-Réduire la taille des modules](#add-réduire-la-taille-des-modules)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Augmenter la cohésion](#add-augmenter-la-cohésion)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Réduire le couplage](#add-réduire-le-couplage)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Defer binding](#add-defer-binding)

<span style="color:red">Defer Binding Time (with Publish-Subscribe)</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="289px" preserveAspectRatio="none" style="width:622px;height:289px;background:#FFFFFF;" version="1.1" viewBox="0 0 622 289" width="622px" zoomAndPan="magnify"><defs/><g><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="66" x2="66" y1="37.6094" y2="252.7188"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="330.5" x2="330.5" y1="37.6094" y2="252.7188"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="573" x2="573" y1="37.6094" y2="252.7188"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="12" y="26.5332">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="5" y="251.7188"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="12" y="273.252">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="97" x="282.5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="83" x="289.5" y="26.5332">DiscoveryAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="97" x="282.5" y="251.7188"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="83" x="289.5" y="273.252">DiscoveryAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="86" x="530" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="72" x="537" y="26.5332">ExternalAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="86" x="530" y="251.7188"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="72" x="537" y="273.252">ExternalAPI</text><polygon fill="#181818" points="319,65.9609,329,69.9609,319,73.9609,323,69.9609" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="66" x2="325" y1="69.9609" y2="69.9609"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="73" y="65.1045">subscribe()</text><polygon fill="#181818" points="342,96.3125,332,100.3125,342,104.3125,338,100.3125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="336" x2="572" y1="100.3125" y2="100.3125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="348" y="95.4561">subscribe()</text><line style="stroke:#181818;stroke-width:1.0;" x1="331" x2="373" y1="130.6641" y2="130.6641"/><line style="stroke:#181818;stroke-width:1.0;" x1="373" x2="373" y1="130.6641" y2="143.6641"/><line style="stroke:#181818;stroke-width:1.0;" x1="332" x2="373" y1="143.6641" y2="143.6641"/><polygon fill="#181818" points="342,139.6641,332,143.6641,342,147.6641,338,143.6641" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="228" x="338" y="125.8076">addServiceToDiscovery(ipAdress:string)</text><polygon fill="#181818" points="77,170.0156,67,174.0156,77,178.0156,73,174.0156" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="71" x2="330" y1="174.0156" y2="174.0156"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="241" x="83" y="169.1592">publishServiceInformation(ipAdress:string)</text><polygon fill="#181818" points="561,200.3672,571,204.3672,561,208.3672,565,204.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="66" x2="567" y1="204.3672" y2="204.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="167" x="73" y="199.5107">checkHealth(ipAdress:string)</text><polygon fill="#181818" points="77,230.7188,67,234.7188,77,238.7188,73,234.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="71" x2="572" y1="234.7188" y2="234.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="36" x="83" y="229.8623">status</text>

### Relation entre les éléments architectuale et les exigences de disponibilité

|Identifiant|Éléments|Description de la responabilité|
|-----------|--------|-------------------------------|
|[CU01-M1](#cu01-m1-modifiabilité) | |
|[CU02-M1](#cu02-m1-modifiabilité) | |
|[CU03-M1](#cu03-m1-modifiabilité) | |
|[CU04-M1](#cu04-m1-modifiabilité) | |
|[CU05-M1](#cu05-m1-modifiabilité) | |
|[CU06-M1](#cu06-m1-modifiabilité) | |
|[CU07-M1](#cu07-m1-modifiabilité) | |
|[CU08-M1](#cu08-m1-modifiabilité) | |
|[CU09-M1](#cu09-m1-modifiabilité) | |
|[CU10-M1](#cu10-m1-modifiabilité) | |

## RDAQ-[Performance](#add-performance)

### [RDTQ-Contrôler la demande en ressources](#add-contrôler-la-demande-en-ressources)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Gérer les ressources](#add-gérer-les-ressources)

<span style="color:red">Maintain multiple copies of computation</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="779px" preserveAspectRatio="none" style="width:397px;height:779px;background:#FFFFFF;" version="1.1" viewBox="0 0 397 779" width="397px" zoomAndPan="magnify"><defs/><g><rect fill="none" height="459.1094" style="stroke:#000000;stroke-width:1.5;" width="380" x="10" y="221.0156"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="41" x2="41" y1="82.6094" y2="697.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="133" x2="133" y1="82.6094" y2="697.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="274" x2="274" y1="82.6094" y2="697.125"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="348" x2="348" y1="82.6094" y2="697.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="79.5332">Client</text><ellipse cx="41" cy="13.5" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,21.5 L41,48.5 M28,29.5 L54,29.5 M41,48.5 L28,63.5 M41,48.5 L54,63.5 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="710.6582">Client</text><ellipse cx="41" cy="722.2344" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,730.2344 L41,757.2344 M28,738.2344 L54,738.2344 M41,757.2344 L28,772.2344 M41,757.2344 L54,772.2344 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="72" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="79" y="71.5332">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="72" y="696.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="79" y="717.6582">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="64" x="242" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="50" x="249" y="71.5332">Server1</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="64" x="242" y="696.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="50" x="249" y="717.6582">Server1</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="64" x="316" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="50" x="323" y="71.5332">Server2</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="64" x="316" y="696.125"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="50" x="323" y="717.6582">Server2</text><polygon fill="#181818" points="262,110.9609,272,114.9609,262,118.9609,266,114.9609" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="268" y1="114.9609" y2="114.9609"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="106" x="140" y="110.1045">loadServerStatus()</text><polygon fill="#181818" points="144,141.3125,134,145.3125,144,149.3125,140,145.3125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="273" y1="145.3125" y2="145.3125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="74" x="150" y="140.4561">server status</text><polygon fill="#181818" points="336,171.6641,346,175.6641,336,179.6641,340,175.6641" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="342" y1="175.6641" y2="175.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="106" x="140" y="170.8076">loadServerStatus()</text><polygon fill="#181818" points="144,202.0156,134,206.0156,144,210.0156,140,206.0156" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="347" y1="206.0156" y2="206.0156"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="74" x="150" y="201.1592">server status</text><path d="M10,221.0156 L71,221.0156 L71,229.3672 L61,239.3672 L10,239.3672 L10,221.0156 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="459.1094" style="stroke:#000000;stroke-width:1.5;" width="380" x="10" y="221.0156"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="16" x="25" y="235.5107">alt</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="71" x="86" y="234.4346">[S1 available]</text><polygon fill="#181818" points="121,257.7188,131,261.7188,121,265.7188,125,261.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="41" x2="127" y1="261.7188" y2="261.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="54" x="48" y="256.8623">request 1</text><polygon fill="#181818" points="262,288.0703,272,292.0703,262,296.0703,266,292.0703" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="268" y1="292.0703" y2="292.0703"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="117" x="140" y="287.2139">checkServerStatus()</text><polygon fill="#181818" points="144,318.4219,134,322.4219,144,326.4219,140,322.4219" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="273" y1="322.4219" y2="322.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="49" x="150" y="317.5654">available</text><polygon fill="#181818" points="262,348.7734,272,352.7734,262,356.7734,266,352.7734" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="268" y1="352.7734" y2="352.7734"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="54" x="140" y="347.917">request 1</text><polygon fill="#181818" points="144,379.125,134,383.125,144,387.125,140,383.125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="273" y1="383.125" y2="383.125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="150" y="378.2686">response 1</text><polygon fill="#181818" points="52,409.4766,42,413.4766,52,417.4766,48,413.4766" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="46" x2="132" y1="413.4766" y2="413.4766"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="58" y="408.6201">response 1</text><line style="stroke:#000000;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="10" x2="390" y1="422.4766" y2="422.4766"/><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="85" x="15" y="433.8955">[S1 unavailable]</text><polygon fill="#181818" points="121,455.6641,131,459.6641,121,463.6641,125,459.6641" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="41" x2="127" y1="459.6641" y2="459.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="61" x="48" y="454.8076">resquest 2</text><polygon fill="#181818" points="262,486.0156,272,490.0156,262,494.0156,266,490.0156" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="268" y1="490.0156" y2="490.0156"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="117" x="140" y="485.1592">checkServerStatus()</text><polygon fill="#181818" points="144,516.3672,134,520.3672,144,524.3672,140,520.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="273" y1="520.3672" y2="520.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="63" x="150" y="515.5107">unavailable</text><polygon fill="#181818" points="336,546.7188,346,550.7188,336,554.7188,340,550.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="342" y1="550.7188" y2="550.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="117" x="140" y="545.8623">checkServerStatus()</text><polygon fill="#181818" points="144,577.0703,134,581.0703,144,585.0703,140,581.0703" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="347" y1="581.0703" y2="581.0703"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="49" x="150" y="576.2139">available</text><polygon fill="#181818" points="336,607.4219,346,611.4219,336,615.4219,340,611.4219" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="133" x2="342" y1="611.4219" y2="611.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="54" x="140" y="606.5654">request 2</text><polygon fill="#181818" points="144,637.7734,134,641.7734,144,645.7734,140,641.7734" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="138" x2="347" y1="641.7734" y2="641.7734"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="150" y="636.917">response 2</text><polygon fill="#181818" points="52,668.125,42,672.125,52,676.125,48,672.125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="46" x2="132" y1="672.125" y2="672.125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="58" y="667.2686">response 2</text>

## RDAQ-[Sécurité](#add-sécurité)

### RDTQ-[Détecter les attaques](#add-détecter-les-attaques)

<span style="color:red">Detect Servie Denial</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="442px" preserveAspectRatio="none" style="width:739px;height:442px;background:#FFFFFF;" version="1.1" viewBox="0 0 739 442" width="739px" zoomAndPan="magnify"><defs/><g><rect fill="none" height="122.4063" style="stroke:#000000;stroke-width:1.5;" width="682" x="10" y="99.6094"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="41" x2="41" y1="82.6094" y2="360.4219"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="150" x2="150" y1="82.6094" y2="360.4219"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="374" x2="374" y1="82.6094" y2="360.4219"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="686.5" x2="686.5" y1="82.6094" y2="360.4219"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="79.5332">Client</text><ellipse cx="41" cy="13.5" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,21.5 L41,48.5 M28,29.5 L54,29.5 M41,48.5 L28,63.5 M41,48.5 L54,63.5 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="36" x="20" y="373.9551">Client</text><ellipse cx="41" cy="385.5313" fill="#E2E2F0" rx="8" ry="8" style="stroke:#181818;stroke-width:0.5;"/><path d="M41,393.5313 L41,420.5313 M28,401.5313 L54,401.5313 M41,420.5313 L28,435.5313 M41,420.5313 L54,435.5313 " fill="none" style="stroke:#181818;stroke-width:0.5;"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="89" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="96" y="71.5332">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="89" y="359.4219"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="96" y="380.9551">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="74" x="337" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="60" x="344" y="71.5332">IpHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="74" x="337" y="359.4219"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="60" x="344" y="380.9551">IpHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="93" x="640.5" y="50"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="79" x="647.5" y="71.5332">DOSHandler</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="93" x="640.5" y="359.4219"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="79" x="647.5" y="380.9551">DOSHandler</text><path d="M10,99.6094 L83,99.6094 L83,107.9609 L73,117.9609 L10,117.9609 L10,99.6094 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="122.4063" style="stroke:#000000;stroke-width:1.5;" width="682" x="10" y="99.6094"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="28" x="25" y="114.1045">loop</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="109" x="98" y="113.0283">[requestCount = 50]</text><polygon fill="#181818" points="138,136.3125,148,140.3125,138,144.3125,142,140.3125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="41" x2="144" y1="140.3125" y2="140.3125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="43" x="48" y="135.4561">request</text><polygon fill="#181818" points="362,166.6641,372,170.6641,362,174.6641,366,170.6641" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="150" x2="368" y1="170.6641" y2="170.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="200" x="157" y="165.8076">denyServiceCheck(senderIp:string)</text><line style="stroke:#181818;stroke-width:1.0;" x1="374" x2="416" y1="201.0156" y2="201.0156"/><line style="stroke:#181818;stroke-width:1.0;" x1="416" x2="416" y1="201.0156" y2="214.0156"/><line style="stroke:#181818;stroke-width:1.0;" x1="375" x2="416" y1="214.0156" y2="214.0156"/><polygon fill="#181818" points="385,210.0156,375,214.0156,385,218.0156,381,214.0156" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="299" x="381" y="196.1592">addRequestCount(senderIp:string, requestCount:int)</text><polygon fill="#181818" points="675,247.3672,685,251.3672,675,255.3672,679,251.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="374" x2="681" y1="251.3672" y2="251.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="165" x="381" y="246.5107">denyAccess(senderIp:string)</text><polygon fill="#181818" points="385,277.7188,375,281.7188,385,285.7188,381,281.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="379" x2="686" y1="281.7188" y2="281.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="391" y="276.8623">deny message</text><polygon fill="#181818" points="161,308.0703,151,312.0703,161,316.0703,157,312.0703" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="155" x2="373" y1="312.0703" y2="312.0703"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="167" y="307.2139">deny message</text><polygon fill="#181818" points="52,338.4219,42,342.4219,52,346.4219,48,342.4219" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="46" x2="149" y1="342.4219" y2="342.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="85" x="58" y="337.5654">deny message</text>

### [RDTQ-Résister aux attaques](#add-résister-aux-attaques)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Réagir aux attaques](#add-réagir-aux-attaques)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Récupérer d'une attaque](#add-récupérer-dune-attaque)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### Relation entre les éléments architectuale et les exigences de sécurité

|Identifiant|Éléments|Description de la responabilité|
|-----------|--------|-------------------------------|
|[CU01-P1](#cu01-p1-performance) | |
|[CU02-P1](#cu02-p1-performance) | |
|[CU03-P1](#cu03-p1-performance) | |
|[CU04-P1](#cu04-p1-performance) | |
|[CU05-P1](#cu05-p1-performance) | |
|[CU06-P1](#cu06-p1-performance) | |
|[CU07-P1](#cu07-p1-performance) | |
|[CU08-P1](#cu08-p1-performance) | |
|[CU09-P1](#cu09-p1-performance) | |
|[CU10-P1](#cu10-p1-performance) | |

## RDAQ-[Testabilité](#add-testabilité)

### [RDTQ-Contrôle et observe l'état du système](#add-controle-and-observe-létat-du-système)[](https://file%2B.vscode-resource.vscode-cdn.net/Users/yvanross/sources/log430/LOG430-STM/doc/documentationArchitecture.md#add-usabilit%C3%A9)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-limiter la complexité](#add-limiter-la-complexité)

<span style="color:red">Limit Complexity</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="627px" preserveAspectRatio="none" style="width:484px;height:627px;background:#FFFFFF;" version="1.1" viewBox="0 0 484 627" width="484px" zoomAndPan="magnify"><defs/><g><rect fill="none" height="139.7578" style="stroke:#000000;stroke-width:1.5;" width="458.5" x="20" y="145.6641"/><rect fill="none" height="274.6484" style="stroke:#000000;stroke-width:1.5;" width="468.5" x="10" y="299.4219"/><rect fill="none" height="181.5938" style="stroke:#000000;stroke-width:1.5;" width="338.5" x="20" y="385.4766"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="90" x2="90" y1="37.6094" y2="591.0703"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="310.5" x2="310.5" y1="37.6094" y2="591.0703"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="427.5" x2="427.5" y1="37.6094" y2="591.0703"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="121" x="30" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="107" x="37" y="26.5332">HealthMonitorApi</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="121" x="30" y="590.0703"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="107" x="37" y="611.6035">HealthMonitorApi</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="76" x="272.5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="62" x="279.5" y="26.5332">Discovery</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="76" x="272.5" y="590.0703"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="62" x="279.5" y="611.6035">Discovery</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="82" x="386.5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="68" x="393.5" y="26.5332">ApiExterne</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="82" x="386.5" y="590.0703"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="68" x="393.5" y="611.6035">ApiExterne</text><polygon fill="#181818" points="298.5,65.9609,308.5,69.9609,298.5,73.9609,302.5,69.9609" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="304.5" y1="69.9609" y2="69.9609"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="111" x="97.5" y="65.1045">getListAllServices()</text><polygon fill="#181818" points="101.5,96.3125,91.5,100.3125,101.5,104.3125,97.5,100.3125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="95.5" x2="309.5" y1="100.3125" y2="100.3125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="99" x="107.5" y="95.4561">return allServices</text><polygon fill="#181818" points="298.5,126.6641,308.5,130.6641,298.5,134.6641,302.5,130.6641" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="304.5" y1="130.6641" y2="130.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="64" x="97.5" y="125.8076">subscribe()</text><path d="M20,145.6641 L81,145.6641 L81,154.0156 L71,164.0156 L20,164.0156 L20,145.6641 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="139.7578" style="stroke:#000000;stroke-width:1.5;" width="458.5" x="20" y="145.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="16" x="35" y="160.1592">alt</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="164" x="96" y="159.083">[a new service register itself]</text><polygon fill="#181818" points="321.5,182.3672,311.5,186.3672,321.5,190.3672,317.5,186.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="315.5" x2="426.5" y1="186.3672" y2="186.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="93" x="327.5" y="181.5107">registerService()</text><polygon fill="#181818" points="101.5,212.7188,91.5,216.7188,101.5,220.7188,97.5,216.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="95.5" x2="309.5" y1="216.7188" y2="216.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="123" x="107.5" y="211.8623">announceNewService</text><polygon fill="#181818" points="298.5,243.0703,308.5,247.0703,298.5,251.0703,302.5,247.0703" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="304.5" y1="247.0703" y2="247.0703"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="111" x="97.5" y="242.2139">getListAllServices()</text><polygon fill="#181818" points="101.5,273.4219,91.5,277.4219,101.5,281.4219,97.5,277.4219" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="95.5" x2="309.5" y1="277.4219" y2="277.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="99" x="107.5" y="272.5654">return allServices</text><path d="M10,299.4219 L83,299.4219 L83,307.7734 L73,317.7734 L10,317.7734 L10,299.4219 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="274.6484" style="stroke:#000000;stroke-width:1.5;" width="468.5" x="10" y="299.4219"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="28" x="25" y="313.917">loop</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="273" x="98" y="312.8408">[number of registered services every 5 seconds]</text><polygon fill="#181818" points="415.5,336.125,425.5,340.125,415.5,344.125,419.5,340.125" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="421.5" y1="340.125" y2="340.125"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="74" x="97.5" y="335.2686">pingService()</text><polygon fill="#181818" points="101.5,366.4766,91.5,370.4766,101.5,374.4766,97.5,370.4766" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="95.5" x2="426.5" y1="370.4766" y2="370.4766"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="120" x="107.5" y="365.6201">response with status</text><path d="M20,385.4766 L81,385.4766 L81,393.8281 L71,403.8281 L20,403.8281 L20,385.4766 " fill="#EEEEEE" style="stroke:#000000;stroke-width:1.5;"/><rect fill="none" height="181.5938" style="stroke:#000000;stroke-width:1.5;" width="338.5" x="20" y="385.4766"/><text fill="#000000" font-family="sans-serif" font-size="13" font-weight="bold" lengthAdjust="spacing" textLength="16" x="35" y="399.9717">alt</text><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="92" x="96" y="398.8955">[the api is down]</text><polygon fill="#181818" points="298.5,422.1797,308.5,426.1797,298.5,430.1797,302.5,426.1797" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="304.5" y1="426.1797" y2="426.1797"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="196" x="97.5" y="421.3232">updateDiscoveryService("DOWN")</text><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="132.5" y1="456.5313" y2="456.5313"/><line style="stroke:#181818;stroke-width:1.0;" x1="132.5" x2="132.5" y1="456.5313" y2="469.5313"/><line style="stroke:#181818;stroke-width:1.0;" x1="91.5" x2="132.5" y1="469.5313" y2="469.5313"/><polygon fill="#181818" points="101.5,465.5313,91.5,469.5313,101.5,473.5313,97.5,469.5313" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="117" x="97.5" y="451.6748">updateListServices()</text><line style="stroke:#000000;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="20" x2="358.5" y1="478.5313" y2="478.5313"/><text fill="#000000" font-family="sans-serif" font-size="11" font-weight="bold" lengthAdjust="spacing" textLength="111" x="25" y="489.9502">[the api is newly up]</text><polygon fill="#181818" points="298.5,511.7188,308.5,515.7188,298.5,519.7188,302.5,515.7188" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="304.5" y1="515.7188" y2="515.7188"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="173" x="97.5" y="510.8623">updateDiscoveryService("UP")</text><line style="stroke:#181818;stroke-width:1.0;" x1="90.5" x2="132.5" y1="546.0703" y2="546.0703"/><line style="stroke:#181818;stroke-width:1.0;" x1="132.5" x2="132.5" y1="546.0703" y2="559.0703"/><line style="stroke:#181818;stroke-width:1.0;" x1="91.5" x2="132.5" y1="559.0703" y2="559.0703"/><polygon fill="#181818" points="101.5,555.0703,91.5,559.0703,101.5,563.0703,97.5,559.0703" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="117" x="97.5" y="541.2139">updateListServices()</text>

### Relation entre les éléments architectuale et les exigences de testabilité

|Identifiant|Éléments|Description de la responabilité|
  |-----------|--------|-------------------------------|
|[CU01-T1](#cu01-t1-testabilité) | |
|[CU02-T1](#cu02-t1-testabilité) | |
|[CU03-T1](#cu03-t1-testabilité) | |
|[CU04-T1](#cu04-t1-testabilité) | |
|[CU05-T1](#cu05-t1-testabilité) | |
|[CU06-T1](#cu06-t1-testabilité) | |
|[CU07-T1](#cu07-t1-testabilité) | |
|[CU08-T1](#cu08-t1-testabilité) | |
|[CU09-T1](#cu09-t1-testabilité) | |
|[CU10-T1](#cu10-t1-testabilité) | |

## RDAQ-[Usabilité](#add-usabilité)

### [RDTQ-Supporter l'initiative de l'usager](#add-supporter-linitiative-de-lusager)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### [RDTQ-Supporter l'initiative du système](#add-supporter-linitiative-du-système)

<span style="color:red">Maintain System Model</span>

![plot](./diagrammes%20tactiques%20CU1/maintain-system-model.PNG)

### Relation entre les éléments architectuale et les exigences d'usabilité

|Identifiant|Éléments|Description de la responabilité|
|-----------|--------|-------------------------------|
|[CU01-U1](#cu01-u1-usabilité) | |
|[CU01-U2](#cu01-u1-usabilité) | |
|[CU02-U1](#cu02-u1-usabilité) | |
|[CU03-U1](#cu03-u1-usabilité) | |
|[CU04-U1](#cu04-u1-usabilité) | |
|[CU05-U1](#cu05-u1-usabilité) | |
|[CU06-U1](#cu06-u1-usabilité) | |
|[CU07-U1](#cu07-u1-usabilité) | |
|[CU08-U1](#cu08-u1-usabilité) | |
|[CU09-U1](#cu09-u1-usabilité) | |
|[CU10-U1](#cu10-u1-usabilité) | |

## RDAQ-[Interopérabilité](#add-interopérabilité)

### [RDTQ-Localiser](#add-localiser)

<span style="color:red">Discover Service</span>

<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="258px" preserveAspectRatio="none" style="width:578px;height:258px;background:#FFFFFF;" version="1.1" viewBox="0 0 578 258" width="578px" zoomAndPan="magnify"><defs/><g><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="66" x2="66" y1="37.6094" y2="222.3672"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="286.5" x2="286.5" y1="37.6094" y2="222.3672"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="529" x2="529" y1="37.6094" y2="222.3672"/><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="12" y="26.5332">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="122" x="5" y="221.3672"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108" x="12" y="242.9004">HealthMonitorAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="97" x="238.5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="83" x="245.5" y="26.5332">DiscoveryAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="97" x="238.5" y="221.3672"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="83" x="245.5" y="242.9004">DiscoveryAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="86" x="486" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="72" x="493" y="26.5332">ExternalAPI</text><rect fill="#E2E2F0" height="31.6094" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="86" x="486" y="221.3672"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="72" x="493" y="242.9004">ExternalAPI</text><polygon fill="#181818" points="298,65.9609,288,69.9609,298,73.9609,294,69.9609" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="292" x2="528" y1="69.9609" y2="69.9609"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="51" x="304" y="65.1045">register()</text><line style="stroke:#181818;stroke-width:1.0;" x1="287" x2="329" y1="100.3125" y2="100.3125"/><line style="stroke:#181818;stroke-width:1.0;" x1="329" x2="329" y1="100.3125" y2="113.3125"/><line style="stroke:#181818;stroke-width:1.0;" x1="288" x2="329" y1="113.3125" y2="113.3125"/><polygon fill="#181818" points="298,109.3125,288,113.3125,298,117.3125,294,113.3125" style="stroke:#181818;stroke-width:1.0;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="228" x="294" y="95.4561">addServiceToDiscovery(ipAdress:string)</text><polygon fill="#181818" points="77,139.6641,67,143.6641,77,147.6641,73,143.6641" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="71" x2="286" y1="143.6641" y2="143.6641"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="197" x="83" y="138.8076">informNewService(ipAdress:string)</text><polygon fill="#181818" points="517,170.0156,527,174.0156,517,178.0156,521,174.0156" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="66" x2="523" y1="174.0156" y2="174.0156"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="24" x="73" y="169.1592">ping</text><polygon fill="#181818" points="77,200.3672,67,204.3672,77,208.3672,73,204.3672" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;stroke-dasharray:2.0,2.0;" x1="71" x2="528" y1="204.3672" y2="204.3672"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="28" x="83" y="199.5107">echo</text>

### [RDTQ-Gérer les interfaces](#add-gérer-les-interfaces)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

### Relation entre les éléments architectuale et les exigences d'interopérabilité

|Identifiant|Éléments|Description de la responabilité|
|-----------|--------|-------------------------------|
|[CU01-I1](#cu01-i1-interopérabilité) | |
|[CU01-I2](#cu01-i1-interopérabilité) | |
|[CU02-I1](#cu02-i1-interopérabilité) | |
|[CU03-I1](#cu03-i1-interopérabilité) | |
|[CU04-I1](#cu04-i1-interopérabilité) | |
|[CU05-I1](#cu05-i1-interopérabilité) | |
|[CU06-I1](#cu06-i1-interopérabilité) | |
|[CU07-I1](#cu07-i1-interopérabilité) | |
|[CU08-I1](#cu08-i1-interopérabilité) | |
|[CU09-I1](#cu09-i1-interopérabilité) | |
|[CU10-I1](#cu10-i1-interopérabilité) | |

# Vues architecturales

## Vues architecturales de type Module

### Vue #1

> #### Présentation primaire
>#### Catalogue d'éléments

|Élement|Description|lien vers document d'interfaces|
|-------|-----------|-------------------------------|
|el1|responsabilité incluant les liens vers les diagrammes de séquence démontrant le fonctionnement de celui-ci|http://www.etsmtl.ca|

> #### Diagramme de contexte
>#### Guide de variabilité
>#### Raisonnement
>#### Vues associées

### Vue #2...

## Vues architecturales de type composant et connecteur

### Vue #1

> #### Présentation primaire
>#### Catalogue d'éléments

|Élement|Description|lien vers document d'interfaces|
|-------|-----------|-------------------------------|
|el1|responsabilité incluant les liens vers les diagrammes de séquence démontrant le fonctionnement de celui-ci|http://www.etsmtl.ca|

> #### Diagramme de contexte
>#### Guide de variabilité
>#### Raisonnement
>#### Vues associées

### Vue #2...

## Vues architecturales de type allocation

### Vue #1

> #### Présentation primaire
>#### Catalogue d'éléments

|Élement|Description|lien vers document d'interfaces|
|-------|-----------|-------------------------------|
|el1|responsabilité incluant les liens vers les diagrammes de séquence démontrant le fonctionnement de celui-ci|http://www.etsmtl.ca|

> #### Diagramme de contexte
>#### Guide de variabilité
>#### Raisonnement
>#### Vues associées

### Vue #2 ...

# Conclusion

> TODO: insérer votre conclusion


N'oubliez pas d'effacer les TODO et ce texte et de générer une version PDF de ce document pour votre remise finale.
Créer un tag git avec la commande "git tag rapport1"

# Documentation des interfaces

Les catalogues d'élément devraient être des tableaux qui contiennent la description des éléments en plus d'un lien vers
la documentation de l'interface de ceux-ci.
Je vous suggère d'utiliser un document par interface pour vous faciliter la tâche. Il sera ainsi plus facile de
distribuer la documentation d'une interface aux équipes en ayant besoin.
La documentation des interfaces de vos éléments doit se faire en utilisant le [gabarit suivant](template-interface.md).

Voici quelques exemples de documentation d'interface utilisant ce gabarit:

- https://wiki.sei.cmu.edu/confluence/display/SAD/OpcPurchaseOrderService+Interface+Documentation
- https://wiki.sei.cmu.edu/confluence/display/SAD/OpcOrderTrackingService+Interface+Documentation
- https://wiki.sei.cmu.edu/confluence/display/SAD/WebServiceBroker+Interface+Documentation
