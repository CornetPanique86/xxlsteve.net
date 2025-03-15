---
title: X Minecraft Launcher - le seul launcher qu'il vous faut
date: 2023-01-30T17:26:21+01:00
lastmod: 2025-03-15T16:03:40.438Z
draft: false
aliases:
  - xmcl
  - x-minecraft-launcher-le-seul-launcher-quil-vous-faut
image: x-minecraft-launcher/img/thumbnail.jpg
author: XXL Steve
description: X Minecraft Launcher est un launcher gratuit, open source, avec une interface stylée. On va voir comment l'installer.
ogtype: article
images:
  - /blog/x-minecraft-launcher/img/thumbnail.jpg
tableOfContents:
  - h1: Intro
  - h1: Installer XMCL
  - h1: Compte utilisateur
    h2:
      - t2: Comptes crack
  - h1: Ajouter une instance
    h2:
      - t2: Lancer le jeu
  - h1: Conclusion
tags:
  - Minecraft
categories:
  - Tutorial
---

### [X Minecraft Launcher](https://xmcl.app/fr) : un launcher gratuit, open source, avec une belle interface

{{< hanchor h="3" >}}
Intro
{{< /hanchor >}}

Je pense qu'on a tous déjà été frustrés à cause d'un nouveau problème du launcher Minecraft officiel : crash, le login qui ne marche pas...

Il y a tellement de bugs que tout un article y est contribué sur le [Minecraft help center](https://help.minecraft.net/hc/en-us/articles/6662588435597-Minecraft-Launcher-Troubleshooting-FAQ).

&nbsp;

En recherche de meilleures solutions, j'ai trouvé le launcher [MultiMC](https://multimc.org/) que j'ai utilisé pendant pas mal de temps jusqu'à ce que je trouve PolyMC (qu'est un {{< helphint "Un fork est la copie d'un repository Github. En gros, dans ce cas, PolyMC est une autre version de MultiMC." >}}fork{{< /helphint >}} de MultiMC), puis que je migre vers [Prism Launcher](https://prismlauncher.org) parce que PolyMC a été compromis.

Prism Launcher marche parfaitement et a plus ou moins tout ce dont on attend d'un launcher. Mais il y a un truc qui me gênait : c'était l'interface utilisateur. J'ai jamais vraiment aimé le design de Prism ou MultiMC. Et mettre un thème custom n'aidait pas non plus.

&nbsp;

C'est alors qu'un jour je découvre [X Minecraft Launcher](https://xmcl.app/fr) (ou XMCL) : 

- Open Source
- Support pour Windows 10/11, MacOS, Linux
- Interface moderne
- Multi-instances
- Partage de ressources entre les instances *(et donc éviter des copies comme c'était souvent le cas sur Prism)*

...et plein d'autres fonctionnalités, dont un **support partiel pour comptes crack/gratuits**, ce que je suppose va intéresser beaucoup de monde.

Il y a aussi la possibilité de pouvoir jouer en multijoueur avec un ami même s'il n'est pas connecté au même WiFi, ce qui est plutôt unique comme fonctionnalité (je ne connais que [FeatherMC](https://feathermc.com/) qui a quelque chose de similaire).

{{< hanchor h="3" >}}
Installer XMCL
{{< /hanchor >}}

Bon, l'intro commence à être longue, voici le tuto 😆

{{< boxnotice type="warning" >}}Le tuto est axé vers les utilisateurs Windows 10 ou 11{{< /boxnotice >}}

1. Téléchargez l'installeur `.appinstaller` ou `.appx` (ça n'a pas vraiment d'importance) depuis le [site](https://xmcl.app/fr), ou le `.zip` pour une {{< helphint "Une application portable ne dépend pas de composants externes et n'engendre pas de modification durable du système par son fonctionnement." >}}version portable{{< /helphint >}}

2. Double-cliquez/ouvrez le fichier téléchargé, et installez.

3. Une interface va alors s'ouvrir, pour définir 3 paramètres avant de démarrer l'appli. Choisissez la langue de votre choix (j'ai fait une traduction en français 😄). Puis mettez le dossier racine de l'application, dans lequel toutes les ressources seront stockées (mods, packs de ressources, etc). Enfin, l'appli propose d'importer vos ressources déjà existantes, par défaut depuis le dossier `.minecraft` dans `%appdata%`.

{{< image src="img/app-install-language.jpg" caption="Choisissez la langue"  >}}

{{< hanchor h="3" >}}
Compte utilisateur
{{< /hanchor >}}

Maintenant, il faut se connecter à son compte Minecraft.

Cliquez sur le bouton de compte en haut à gauche puis ajoutez un compte. Pour un compte premium, connectez-vous à Microsoft (normalement, vous avez fait la migration, et les comptes Mojang sont inutilisables).

{{< image src="img/user-profile.jpg" caption="Affichage d'un compte premium"  >}}

{{< hanchor h="4" >}}
Comptes crack
{{< /hanchor >}}

{{< boxnotice type="tip" >}}
Depuis la mise à jour [0.34.0](https://xmcl.app/fr/changelogs#0.34.0), XMCL a enlevé la possibilité de créer un compte hors ligne, afin de pouvoir être promu par Modrinth, ce dernier n'acceptant pas les programmes qui enfreignent la EULA. ([Source](/blog/x-minecraft-launcher/img/quote-crack.jpg))

*Il est possible cependant de créer un compte crack **si** vous avez déjà enregistré un compte premium.*
{{< /boxnotice >}}

Heureusement, il existe des manières de bypass le système 😎

&nbsp;

**Downgrade le logiciel avant la mise à jour**

Dans ce cas-là, il va falloir rester à cette vieille version et pas pouvoir profiter des nouveaux ajouts...

Téléchargez la version sur github : https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.33.1

&nbsp;

⭐ **Utiliser un service d'authentification tiers**

Le launcher permet aussi d'utiliser d'autres services que l'officiel de Microsoft, dont 2 inclus par défaut : ely.by et littleskin.cn (qui sont gratuits évidemment)

Pour l'instant, ely.by semble ne pas très bien marcher, donc je vous conseille d'utiliser [littleskin](https://littleskin.cn).

1. Créer un compte
2. Valider le compte via le mail
3. Vous allez pouvoir vous connecter sur le launcher !
4. Si le service vous plaît, sachez qu'il permet de faire beaucoup de trucs sur sa [dashboard](https://littleskin.cn/user) comme uploader un skin (qui peut avoir une résolution supérieure à celle de Minecraft), ajouter plus de comptes joueur, etc.

&nbsp;

**Modifier les fichiers du launcher**

Ne vous inquiétez pas, c'est plus simple que ça n'en a l'air !

1. Appuyer sur <kbd>Win</kbd> + <kbd>R</kbd> puis tapez `%appdata%` et trouvez le dossier `xmcl` (si vous ne trouvez rien, cherchez dans ce chemin : `C:\Users\VotreUtilisateur\AppData\Local\Packages\XMCL_[puis beaucoup de chiffres]\LocalCache\Roaming\`)
2. Ouvrez `user.json`
3. Dans l'accolade `"users": {}` ajoutez ceci :
   {{< highlight json "linenos=true,hl_lines=7" >}}
   "OFFLINE": {
      "id": "OFFLINE",
      "accessToken": "23ea4e959c2544ed85a2f2d2d1fa16fb",
      "selectedProfile": "aa930f3c5e4339dba04ad5c5c0e6f82c",
      "profiles": {
        "aa930f3c5e4339dba04ad5c5c0e6f82c": {
          "name": "Votre nom en jeu",
          "id": "aa930f3c5e4339dba04ad5c5c0e6f82c",
          "uploadable": [
            "cape",
            "skin"
          ],
          "textures": {
            "SKIN": {
              "url": "",
              "metadata": {
                "model": "steve"
              }
            }
          }
        }
      },
      "expiredAt": 8556839292003941,
      "authService": "offline",
      "username": "OFFLINE"
    }
   {{< / highlight >}}

Si d'autres objets suivent celui-ci dans l'accolade, n'oubliez pas de mettre une virgule `,` à la fin.

Le `"accessToken"` peut-être une chaîne de caractères au hasard, ça n'a pas d'importance.

*Bon, j'avoue, c'est assez difficile si vous n'avez aucune expérience en JSON...*

&nbsp;

**Installer un fork de XMCL**

Actuellement un fork est en développement par thesonofdevilhunter#3441 pour réintégrer la création de comptes crack. Il ajoutera aussi quelques autres petites fonctionnalités. Il n'est pas encore fini, mais vous pouvez en apprendre plus dans le post "Cracked Readdition" du salon "feedback-and-idea" du [serveur discord XMCL](https://discord.gg/W5XVwYY7GQ).

Je mettrai à jour l'article quand c'est fini.

{{< hanchor h="3" >}}
Ajouter une instance
{{< /hanchor >}}

Il ne reste plus qu'à jouer à Minecraft, et pour ça il faut d'abord créer une instance.

Si vous ne reconnaissez pas le système de multi-instances, en gros chaque instance correspond à un "jeu Minecraft" avec ses propres réglages, version, etc. Cela permet donc de ne pas avoir à toujours changer le dossier de mods comme c'est le cas avec le launcher officiel.

Par exemple, si vous souhaitez jouer en 1.19.2 avec le modpack Fabric "Fabulously Optimized", appuyez sur le bouton "Modrinth", sélectionnez les "Modpacks", puis téléchargez le modpack en question. Tout le reste est géré par l'appli.

{{< image src="img/modpack-download.jpg" caption="La nouvelle instance"  >}}

{{< hanchor h="4" >}}
Lancer le jeu
{{< /hanchor >}}

Si c'est votre première instance, il faudra sans doute télécharger la version Minecraft correspondante. Heureusement, tout ceci est automatiquement téléchargé avec le launcher.

C'est possible que vous n'ayez pas Java non plus, et dans ce cas là je *crois* que le launcher peut aussi le télécharger mais je ne l'ai pas testé, et je recommande d'installer java vous-même : [tutoriel sur Minecraft Wiki](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server#Java).

{{< hanchor h="3" >}}
Conclusion
{{< /hanchor >}}

XMCL a d'autres fonctionnalités comme jouer en multijoueur avec son propre serveur et il permet aussi de pouvoir changer de thème, etc, mais je vous laisse explorer tout ça par vous-même.

Comme l'appli est Open Source, n'hésitez pas à contribuer, comme proposer une meilleure traduction française que la mienne (car j'avoue, je l'ai faite rapidement, il y a pas mal d'erreurs).
