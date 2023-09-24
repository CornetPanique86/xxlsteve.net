---
title: "Minecraft Java Roadmap"
date: 2023-08-16T22:49:09+02:00
lastmod: 2023-08-16T22:49:09+02:00
draft: true
image: minecraft-java-roadmap/img/thumbnail.jpg
author: XXL Steve
description: Having trouble to adapt to Minecraft Java's way of managing mods and gameplay and want to learn about all the available tools? This guide will explore the various community creations!
ogtype: article
images:
- /blog/minecraft-java-roadmap/img/thumbnail.jpg

tableOfContents:
- h1:
  h2:
    - t2:

tags:
- Minecraft
- Tutorial
categories:
- Blog
---

Having trouble to adapt to Minecraft Java's way of managing mods and gameplay and want to learn about all the available tools? This guide will explore the various community creations!

&nbsp;

I used to be a Bedrock player and switching to Java happened to be quite the difficult task especially when trying to use mods.

Get ready to discover plenty new ways to play the Java Edition of Minecraft!

&nbsp;

{{< hanchor h="2" >}}
Mods
{{< /hanchor >}}

{{< hanchor h="3" >}}
Explanation
{{< /hanchor >}}

Trust me, understanding how mods really work will make it much more clear for you. For my explanation I will compare mods with Bedrock's addons.

A **Bedrock addon** can be seen as a configuration file, which also has the ability to add new elements to the game. The reason it is limited to the number of features it has, is because its contents are then interpreted by Minecraft itself. Therefore, it can only add or modify using the implementations supported by the game. It is mostly coded in JSON files.

A **Java mod** can be seen as code that directly modifies the game's internal code. It is written in Java just like Minecraft Java, and its unlimited abilities also implies that a mod can be malicious: a JAR file functions just like an EXE. Over the years, fans have created numerous implementations to let mods easily change the way Minecraft works: they're called mod loaders.

&nbsp;

Want to dig deeper? This is the video which let me understand how mods work:

{{< ytcustom id="" title="Video by " >}}

{{< hanchor h="3" >}}
Modloaders
{{< /hanchor >}}

Practically all mods need a certain mod loader to work. The mod loader is the bridge between Minecraft and the mod, letting the latter insert its code into the game.

&nbsp;

**Forge** is the earliest of mod loaders, and the biggest. It has always been the main mod loader and is supported by Curseforge.

**Fabric** has recently emerged as the mod loader for modern versions, supposedly doing a better job for these versions. There also exists the "Legacy Fabric" project to use Fabric on older versions.

**Quilt** is even more recent, and is a {{< helphint "A fork is the copy of a Github repository, basically in this case Quilt is another version of Fabric." >}}fork{{< /helphint >}} of Fabric, adding more implementations missing from Fabric. People easily get confused on using this mod loader; since it's a fork it actually supports all Fabric mods, and the Quilted API replaces Fabric API.

!!!!!! parler de Sinytra Connector/Forgified Fabric API

There are other mod loaders which exist (LiteLoader,...), but they are much less adopted. Generally this is the choice to make when choosing a mod loader ⬇️, but it's mostly directed by the mod loader that the mods you want to use support.

(tableau)

For the historians, you can watch this video about the history of mod loaders:

{{< ytcustom id="" title="Video by MCBYT" >}}

{{< hanchor h="3" >}}
Choosing mods
{{< /hanchor >}}

{{< hanchor h="4" >}}
Server/client side
{{< /hanchor >}}

Server-side and client-side are very common terms in modding. 

In Java, as mods and mod loaders are done by fans and not officially and can be malicious, there is no system to automatically install the mods a server has when joining it like on Bedrock. Therefore, each player needs the mods required on modded servers.

Of course, the client and server need to be on the same mod loader for modded servers.

&nbsp;

**Client-side** designates a mod which can run on the {{< helphint "The client is the player, receiving info on what happens on the server, and sending the actions it's doing." >}}client{{< /helphint >}}, meaning it only changes visual aspects which don't affect the server. Therefore these mods can be used anywhere without them needing to be installed on the server.

&nbsp;

**Server-side** designates a mod which needs to run on the server. If it also requires a client-side install (probably because it adds some visual elements) it needs to be installed on both sides.

{{< hanchor h="4" >}}
Optimization mods
{{< /hanchor >}}

{{< hanchor h="5" >}}
Forge
{{< /hanchor >}}

Optifine... pretty much.

Other optimization mods exist like  which ports Sodium features to Forge, but Optifine's age has earned it the monopoly.

{{< hanchor h="5" >}}
Fabric
{{< /hanchor >}}

Fabric... it's more complicated. It doesn't have a closed source universal mod which has the monopoly, instead it has a plethora of open source mods that optimize various parts of the game.

I agree, it can seem really complicated and clumbersome to have dozens of mods instead of a single one. But eventually, trust me, you'll enjoy the freedom 😎


&nbsp;

Don't worry, you just need to follow these guides for converting from Optifine to Fabric:



Or an easier option is to use preconfigured [modpacks](https://modrinth.com/modpacks) which include optimization mods and quality-of-life mods to your liking. To your liking: because there are a LOT of them.

{{< image src="img/fabric_clientside_mods_meme.jpg" >}}





{{< hanchor h="2" >}}
Clients
{{< /hanchor >}}





{{< hanchor h="2" >}}
Servers
{{< /hanchor >}}


