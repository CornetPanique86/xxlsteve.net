---
title: "X Minecraft Launcher - le seul launcher dont vous avez besoin"
date: 2023-01-30T17:26:21+01:00
lastmod: 2023-01-31T18:10:13+01:00
draft: false

aliases:
  - xmcl
  - x-minecraft-launcher-le-seul-launcher-dont-vous-avez-besoin

image: x-minecraft-launcher/img/thumbnail.jpg
author: XXL Steve
description:
ogtype: article
images:
- /blog/x-minecraft-launcher/img/thumbnail.jpg

tableOfContents:
- h1: Intro
- h1: Installer XMCL
- h1: Compte utilisateur
- h1: Ajouter une instance
  h2:
    - t2: Lancer le jeu
- h1: Conclusion

tags:
- Tutorial
categories:
- Blog
---

### [X Minecraft Launcher](https://xmcl.app/) : un launcher gratuit, open source, avec support pour cracks (comptes hors ligne)

{{< hanchor h="3" >}}
Intro
{{< /hanchor >}}

Je pense qu'on a tous déjà été frustrés à cause d'un nouveau problème du launcher Minecraft officiel : crash, le login qui ne marche pas...

Il y a tellement de bugs que tout un article y est contribué sur le [Minecraft help center](https://help.minecraft.net/hc/en-us/articles/6662588435597-Minecraft-Launcher-Troubleshooting-FAQ).

&nbsp;

En recherche de meilleures solutions, j'ai trouvé le launcher [MultiMC](https://multimc.org/) que j'ai utilisé pendant pas mal de temps jusqu'à ce que je trouve PolyMC (qu'est un fork de MultiMC {{< helphint >}}Un fork est la copie d'un repository Github. En gros, dans ce cas, PolyMC est une autre version de MultiMC.{{< /helphint >}}), puis que je migre vers [Prism Launcher](https://prismlauncher.org) parce que PolyMC a été compromis.

Prism Launcher marche parfaitement et a plus ou moins tout ce dont on attend d'un launcher. Mais il y a un truc qui me gênait : c'était l'interface utilisateur. J'ai jamais vraiment aimé le design de Prism ou MultiMC. Et mettre un thème custom n'aidait pas non plus.

&nbsp;

C'est alors qu'un jour je découvre [X Minecraft Launcher](https://xmcl.app/) (ou XMCL) : 

- Open Source
- Support pour Windows 10/11, MacOS, Linux
- Interface moderne
- Multi-instances
- Partage de ressources entre les instances *(et donc éviter des copies comme c'était souvent le cas sur Prism)*

...et plein d'autres fonctionnalités, dont un **support pour comptes crack/gratuits**, ce que je suppose va intéresser beaucoup de monde.

Il y a aussi la possibilité de pouvoir jouer en multijoueur avec un ami même s'il n'est pas connecté au même WiFi, ce qui est plutôt unique comme fonctionnalité (je ne connais que [FeatherMC](https://feathermc.com/) qui a quelque chose de similaire).

{{< hanchor h="3" >}}
Installer XMCL
{{< /hanchor >}}

Bon, l'intro commence à être longue, voici le tuto 😆

{{< boxnotice type="warning" >}}Le tuto est axé vers les utilisateurs Windows 10 ou 11{{< /boxnotice >}}

1. Téléchargez l'installeur .appinstaller ou .appx (ça n'a pas vraiment d'importance) depuis le [site](https://xmcl.app/), ou le .zip pour une version portable {{< helphint >}}Une application portable ne dépend pas de composants externes et n'engendre pas de modification durable du système par son fonctionnement.{{< /helphint >}}

2. Double-cliquez/ouvrez le fichier téléchargé, et installez.

3. Une interface va alors s'ouvrir, pour définir 3 paramètres avant de démarrer l'appli. Choisissez la langue de votre choix (j'ai fait une traduction en français 😄). Puis mettez le dossier racine de l'application, dans lequel toutes les ressources seront stockées (mods, packs de ressources, etc). Enfin, l'appli propose d'importer vos ressources déjà existantes, par défaut depuis le dossier .minecraft dans %appdata%.

{{< figure src="/blog/x-minecraft-launcher/img/app-install-language.jpg" caption="Choisissez la langue" class="figurePopup imagePopup" >}}

{{< hanchor h="3" >}}
Compte utilisateur
{{< /hanchor >}}

Maintenant, il faut se connecter à son compte Minecraft.

Cliquez sur le bouton de compte en haut à gauche puis ajoutez un compte. Sélectionnez "Offline" pour les comptes crack.

{{< figure src="/blog/x-minecraft-launcher/img/user-profile.jpg" caption="Affichage d'un compte premium" class="figurePopup imagePopup" >}}

{{< hanchor h="3" >}}
Ajouter une instance
{{< /hanchor >}}

Il ne reste plus qu'à jouer à Minecraft, et pour ça il faut d'abord créer une instance.

Si vous ne reconnaissez pas le système de multi-instances, en gros chaque instance correspond à un "jeu Minecraft" avec ses propres réglages, version, etc. Cela permet donc de ne pas avoir à toujours changer le dossier de mods comme c'est le cas avec le launcher officiel.

Par exemple, si vous souhaitez jouer en 1.19.2 avec le modpack Fabric "Fabulously Optimized", appuyez sur le bouton "Modrinth", sélectionnez les "Modpacks", puis téléchargez le modpack en question. Tout le reste est géré par l'appli.

{{< figure src="/blog/x-minecraft-launcher/img/modpack-download.jpg" caption="La nouvelle instance" class="figurePopup imagePopup" >}}

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
