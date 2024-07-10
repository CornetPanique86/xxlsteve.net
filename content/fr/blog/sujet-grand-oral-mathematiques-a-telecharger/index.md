---
title: Sujet Grand Oral Mathématiques à télécharger
date: 2024-07-10T16:56:16+02:00
lastmod: 2024-07-10T18:45:48.645Z
draft: true
image: sujet-grand-oral-mathematiques-a-telecharger/img/thumbnail.jpg
author: XXL Steve
description: Sujet de Grand Oral complètement rédigé pour l'enseignement de spécialité Mathématiques au Bac !
ogtype: article
params:
  math: true
images:
  - /fr/blog/sujet-grand-oral-mathematiques-a-telecharger/img/thumbnail.jpg
tableOfContents:
  - h1: Détails
  - h1: Ressources
  - h1: Sujet
  - h1: Support
  - h1: Téléchargements
downloads:
  - text: Sujet .pdf
    dl: /dl/sujet-grand-oral-mathematiques-a-telecharger/GRAND ORAL MATHS.pdf
  - text: Sujet .odt
    dl: /dl/sujet-grand-oral-mathematiques-a-telecharger/GRAND ORAL MATHS.odt
tags:
  - Studies
---

Cette année 2024, j'ai dû passer le Grand Oral au bac. Mes deux spécialités étaient Mathématiques & Physique-Chimie.
Je suis passé pour les maths (ce n'est pas un sujet transversal), et j'ai réçu 20/20.
Le sujet que j'avais rédigé est totalement original : en tant que débutant en programmation je me suis dit qu'un sujet de dénombrement par rapport aux UUID serait intéressant.

{{< hanchor h="3" >}}
Détails
{{< /hanchor >}}

| Détails | |
|---|---|
| Problématique | Un identifiant universel unique est-il vraiment unique ? |
| Spécialités | Mathématiques |
| Notions du programme | probabilités, dénombrement, logarithme népérien, limites de fonctions |
| Difficulté | assez lourd en maths |
| Durée | long (possible de dépasser les 10 minutes, mais perso j'ai fait 9 minutes le jour de l'épreuve) |

{{< hanchor h="3" >}}
Ressources
{{< /hanchor >}}

Pour mieux comprendre le sujet, voici quelques pages qui m'ont servi lors de mes recherches :
- [Universally unique identifier](https://fr.wikipedia.org/wiki/Universally_unique_identifier)
- [Paradoxe des anniversaires](https://fr.wikipedia.org/wiki/Paradoxe_des_anniversaires)
- Pour se renseigner sur les différentes versions et variantes : [UUIDs Explained: Your Ultimate Handbook to Understanding Unique Identifiers](https://www.tryflywheel.com/blog/uuids-explained-your-ultimate-handbook-to-understanding-unique-identifiers)

{{< hanchor h="3" >}}
Sujet
{{< /hanchor >}}

{{< embedpdf "/dl/sujet-grand-oral-mathematiques-a-telecharger/GRAND ORAL MATHS.pdf" >}}

{{< hanchor h="3" >}}
Support
{{< /hanchor >}}
Vous avez droit à autant de feuilles de brouillon que vous voulez, et vous pouvez les montrer au jury.
&nbsp;
Personnellement, j'ai fait une feuille de notes qu'au final je n'ai pas utilisée car j'avais tout appris par cœur (donc je vous conseille juste d'apprendre le texte par cœur c'est mieux), et un support à montrer au jury.
J'y ai écrit en gros les formules importantes et aussi dessiné un graphe d'une courbe décrivant la fonction exponentielle et une autre la fonction tangente de \\(e(x)\\) en \\(x=0\\). Voici ce que j'y ai mis :

&nbsp;
&nbsp;
**Recto :**
xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx

\\[ p(k)=\frac{A_{k}^{n}}{n^{k}}=\frac{n\times (n-1)\times (n-2)\times \cdots \times (n-k+1)}{n\times n\times n\times \cdots \times n}=\prod_{i=0}^{k-1}\frac{n-i}{n}=\prod_{i=0}^{k-1}1-\frac{i}{n} \\] \\[ \lim_{n \to +\infty } -\frac{i}{n}=0 \\] \\[ Si \quad x=-\frac{i}{n} \quad et \quad x\to 0 \quad alors \quad \prod_{i=0}^{k-1}1-\frac{i}{n}\approx \prod_{i=0}^{k-1}e^{-\frac{i}{n}} \\] \\[ \prod_{i=0}^{k-1}e^{-\frac{i}{n}}=\exp(-\frac{\sum_{i=0}^{k-1}i}{n})=e^{-\frac{k(k-1)}{2n}} \\] \\[ \frac{1}{2}\approx 1-e^{-\frac{k(k-1)}{2n}}
\Leftrightarrow k^{2}-k-n\ln(4)\approx 0 \\] \\[ k\approx 2,714922669\cdot 10^{18} \Rightarrow  p(2,714922669\cdot 10^{18})\approx \frac{1}{2} \\]

**Verso :**
\\[ f(x):=e(x) \\, et \\, f'(x)=e(x) \\]
Tangente de \\(f(x)\\) en \\(x=0\\):
\\[ y=f'(0)(x-0)+f(0)=1+x \\] \\[ Pour \\, x\to 0: e(x)\approx 1+x \\]