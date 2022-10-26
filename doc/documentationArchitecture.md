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
    - [**
      CU02** - Veux pouvoir mettre le chaos dans les microservices.](#cu02---veux-pouvoir-mettre-le-chaos-dans-les-microservices)
    - [**
      CU03** - <span style="color:red">Vous devez proposer un nouveau cas d'utilisation</span>](#cu03---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU04** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu04---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU05** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu05---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU06** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu06---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU07** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu07---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU08** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu08---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU09** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation</span>](#cu09---vous-devez-proposer-un-nouveau-cas-dutilisation)
    - [**
      CU10** - <span style="color:red">vous devez proposer un nouveau cas d'utilisation.</span>](#cu10---vous-devez-proposer-un-nouveau-cas-dutilisation)
- [Vue architecturale de contexte](#vue-architecturale-de-contexte)
    - [Présentation primaire](#présentation-primaire)
    - [Catalogue d'éléments](#catalogue-déléments)
    - [<s>Diagramme de contexte</s> Pas nécessaire puisque c'est déja un vue de contexte](#sdiagramme-de-contextes-pas-nécessaire-puisque-cest-déja-un-vue-de-contexte)
    - [Guide de variabilité](#guide-de-variabilité)
    - [Raisonnement](#raisonnement)
    - [<s>Vues associées</s> pas nécessaire puisque c'est la première vue que vous réalisé pour votre système.](#svues-associéess-pas-nécessaire-puisque-cest-la-première-vue-que-vous-réalisé-pour-votre-système)
- [Conception axée sur les attributs de qualité](#conception-axée-sur-les-attributs-de-qualité)
    - [ADD-Disponibilité](#add-disponibilité)
        - [ADD-détection de faute](#add-détection-de-faute)
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

### **CU03** - <span style="color:red">Vous devez proposer un nouveau cas d'utilisation</span>

**Acteurs externe:**

**Précondition:**

**Évènement déclencheur:**

**Scénario**

**Évènement résultant:**

**Postcondition:**

**Cas alternatifs:**

**Attributs de qualité**

#### CU03-D1 [**Disponibilité**](#add-disponibilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-M1 [**Modifiabilité**](#add-modifiabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-P1 [**Performance**](#add-performance)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-S1 [**Sécurité**](#add-sécurité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-T1 [**Testabilité**](#add-testabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-U1 [**Usabilité**](#add-usabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

#### CU03-I1 [**Interopérabilité**](#add-interopérabilité)

<span style="color:red">Définir l'exigence que qualité associé à ce scénario ou N/a</span>

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

|Identifiant| Description                                                                                                                                                                                                                                                                                        |
  |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|[CU01-D1](#cu01-d1-disponibilité)|                                                                                                                                                                                                                                                                                                    |
|[CU02-D1](#cu02-d1-disponibilité)|                                                                                                                                                                                                                                                                                                    |
|[CU03-D1](#cu03-d1-disponibilité) | Le micro-service Health Monitor est responsable de détecter la disponibilité <br/> des autres entités du système. (Je me rend compte que ce que j'ai mis ici sera<br/>seulement applicable à l'autre micro-service que nous implémenterons, le monitoring<br/>ne peut pas se surveiller lui-même.) | 
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
<div>
Nous avons choisi le Monitor et le Ping/Echo. Le fait d'encapsuler la responsabilité en un seul micro-service et la simplicité du Ping/Echo,<br/>
permet d'avoir une architecture simple et efficace à implémenter. Ce choix assure aussi une flexibilité, si plus tard on veut inclure le Heartbeat.
</div>

### ADD-[Préparation et réparation](#rdtq-préparation-et-réparation)

<div class="concept disponibilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Réintroduction](#rdtq-réintroduction)

<div class="concept disponibilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Prévention des fautes](#rdtq-prévention-des-fautes)

<div class="concept disponibilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

## ADD-[Modifiabilité](#rdaq-modifiabilité)

|Identifiant|Description|
  |-----------|------------|
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

### ADD-[Réduire la taille des modules](#rdtq-réduire-la-taille-des-modules)

<div class="concept modifiabilite">

| Concept de design     | Pour                                                                                                   |  Contre                         | Valeur | Cout|
|-----------------------|--------------------------------------------------------------------------------------------------------|---------------------------------|--------|-----|
| <li>Split module</li> | Séparer le code en modules <br/>permet une meilleure flexibilité <br/>lors d'ajout de fonctionnalités. | Développement un peu plus long. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Split module parce que c'est la seule...

### ADD-[Augmenter la cohésion](#rdtq-augmenter-la-cohésion)

<div class="concept modifiabilite">

| Concept de design                    | Pour                                                                                                         |  Contre                     | Valeur | Cout|
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------|--------|-----|
| <li>Increase semantic coherence</li> | Permet une meilleure séparation<br/> des responsabilités, rend le code<br/>plus facile à lire et comprendre. | Peut augmenter le couplage. |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Increase semantic coherence parce que c'est la seule...

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
<br/>Nous avons choisi la tactique de l'intermédiaire. Notre service de monitoring connaîtrera les informations
<br/>des micro-services à surveiller seulement par l'intermédiaire du service de Discovery.

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
|[CU03-P1](#cu03-p1-performance) |
|[CU04-P1](#cu04-p1-performance) |
|[CU05-P1](#cu05-p1-performance) |
|[CU06-P1](#cu06-p1-performance) |
|[CU07-P1](#cu07-p1-performance) |
|[CU08-P1](#cu08-p1-performance) |
|[CU09-P1](#cu09-p1-performance) |
|[CU10-P1](#cu10-p1-performance) |

### ADD-[Contrôler la demande en ressources](#rdtq-contrôler-la-demande-en-ressources)

<div class="concept performance">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

ADD-Gérer les ressources
<div class="concept performance">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

## ADD-[Sécurité](#rdaq-sécurité)

### ADD-[Détecter les attaques](#rdtq-détecter-les-attaques)

<div class="concept securite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Résister aux attaques](#rdtq-résister-aux-attaques)

<div class="concept securite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Réagir aux attaques](#rdtq-réagir-aux-attaques)

<div class="concept securite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Récupérer d'une attaque](#rdtq-récupérer-dune-attaque)

<div class="concept securite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

## ADD-[Testabilité](#rdaq-testabilité)

|Identifiant|Description|
  |-----------|------------|
|[CU01-T1](#cu01-t1-testabilité)|  | 
|[CU02-T1](#cu02-t1-testabilité)|  | 
|[CU03-T1](#cu03-t1-testabilité)|  | 
|[CU04-T1](#cu04-t1-testabilité)|  | 
|[CU05-T1](#cu05-t1-testabilité)|  | 
|[CU06-T1](#cu06-t1-testabilité)|  | 
|[CU07-T1](#cu07-t1-testabilité)|  | 
|[CU08-T1](#cu08-t1-testabilité)|  | 
|[CU09-T1](#cu09-t1-testabilité)|  | 
|[CU10-T1](#cu10-t1-testabilité)|  | 

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
<br/>À décider en groupe...

### ADD-[Limiter la complexité](#rdtq-limiter-la-complexité)

<div class="concept testabilite">

| Concept de design                              | Pour                                                                              |  Contre                                                                                                                                        | Valeur | Cout|
|------------------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----|
| <li>Limiter la complexité de la structure</li> | En réduisant la complexité du système, celui-ci<br/> devient plus facilement testable. | Si on limite la complexité, on limite <br/>d'autres aspects importants de la conception<br/>logiciel comme l'extensibilité et l'encapsulation. |M|M|
| <li>Limiter le non-déterminisme</li>           | avantages                                                                         | désavantages                                                                                                                                   |M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>
<br/>Nous avons choisi de limiter la complexité de la structure. Étant un service assez simple, le fait de limiter
<br/>la complexité pour mieux tester ne nous pénalisera pas au niveau de la conception logiciel.

## ADD-[Usabilité](#rdaq-usabilité)

|Identifiant|Description|
  |-----------|------------|
|[CU01-U1](#cu01-u1-usabilité) |
|[CU02-U1](#cu02-u1-usabilité) |
|[CU03-U1](#cu03-u1-usabilité) |
|[CU04-U1](#cu04-u1-usabilité) |
|[CU05-U1](#cu05-u1-usabilité) |
|[CU06-U1](#cu06-u1-usabilité) |
|[CU07-U1](#cu07-u1-usabilité) |
|[CU08-U1](#cu08-u1-usabilité) |
|[CU09-U1](#cu09-u1-usabilité) |
|[CU10-U1](#cu10-u1-usabilité) |

### ADD-[Supporter l'initiative de l'usager](#rdtq-supporter-linitiative-de-lusager)

<div class="concept usabilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Supporter l'initiative du système](#rdtq-supporter-linitiative-du-système)

<div class="concept usabilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

## ADD-[Interopérabilité](#rdaq-interopérabilité)

|Identifiant|Description|
  |-----------|------------|
|[CU01-I1](#cu01-i1-interopérabilité)| | 
|[CU02-I1](#cu01-i1-interopérabilité)| |
|[CU03-I1](#cu01-i1-interopérabilité)| |
|[CU04-I1](#cu01-i1-interopérabilité)| |
|[CU05-I1](#cu01-i1-interopérabilité)| |
|[CU06-I1](#cu01-i1-interopérabilité)| |
|[CU07-I1](#cu01-i1-interopérabilité)| |
|[CU08-I1](#cu01-i1-interopérabilité)| |
|[CU09-I1](#cu01-i1-interopérabilité)| |
|[CU10-I1](#cu01-i1-interopérabilité)| |

### ADD-[Localiser](#rdtq-localiser)

<div class="concept interoperabilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

### ADD-[Gérer les interfaces](#rdtq-gérer-les-ressources)

<div class="concept interoperabilite">

|Concept de design| Pour | Contre| Valeur | Cout|
|-----------------|------|-------|--------|-----|
| <li>tactique 1</li>|avantages| désavantages|M|M|
| <li>tactique 2</li>|avantages| désavantages|M|M|
| <li>tactique 3</li>|avantages| désavantages|M|M|

</div>
<span style="color:red">Quelle tactique avez vous choisi et pourquoi?</span>

# Réalisation des cas d'utilisation

### [**RDCU-CU01**](#cu01---veux-comparer-les-temps-de-trajet) - Veux comparer les temps de trajet.

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### [**

RDCU-CU02**](#cu02---veux-pouvoir-mettre-le-chaos-dans-les-services-en-mode) - Veux pouvoir mettre le chaos dans les
services en mode.

<span style="color:red">Diagramme(s) de séquence démontrant la réalisation de ce cas d'utilisation</span>

### [**RDCU-CU03**](#cu03)

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

## RDAQ-[Sécurité](#add-sécurité)

### RDTQ-[Détecter les attaques](#add-détecter-les-attaques)

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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

<span style="color:red">nom de la tactique</span>

<span style="color:red">Diagramme(s) de séquence ou autre information pertinente démontrant la réalisation de(s)
tactique(s)</span>

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
