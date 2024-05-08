---
title: Useful Minecraft Links (personal awesome-minecraft)
date: 2024-04-08T18:01:39.563Z
lastmod: 2024-04-16T22:53:20.776Z
draft: false
image: useful-minecraft-links/img/thumbnail.jpg
author: XXL Steve
description: "My personal list of cool and useful Minecraft-related links: tools, software, mods, launchers... all created by the community"
ogtype: article
images:
  - /blog/useful-minecraft-links/img/thumbnail.jpg
tableOfContents:
  - h1: Servers
    h2:
      - t2: Server control panels
      - t2: Servers search
      - t2: Server software (Java)
      - t2: Server software (Bedrock)
  - h1: Game modifications
    h2:
      - t2: Mod loaders (Java)
      - t2: Mod loaders (Bedrock)
      - t2: Mods (Java)
      - t2: Clients (Java)
      - t2: Clients (Bedrock)
      - t2: Hack clients (Java)
      - t2: Hack clients (Bedrock)
      - t2: Launchers (Java)
      - t2: Launchers (Bedrock)
  - h1: Software and Online tools
    h2:
      - t2: Worlds
      - t2: Skins
      - t2: Models & Animation
      - t2: Modding (Java)
      - t2: Addon development (Bedrock)
      - t2: Rip-offs
  - h1: Documentation & Communities
tags:
  - Minecraft
categories:
  - Blog
---

My personal list of cool and useful Minecraft-related links: tools, software, mods, launchers... all created by the community!
I was inspired to make this list by [bs-community's Awesome Minecraft list](https://github.com/bs-community/awesome-minecraft)
(Very incomplete list)
&nbsp;
⭐ = best tool in my opinion
🌐 = online service
⚙️ = API
💬 = forum (Discord server, etc)
📕 = documentation, guide

{{< hanchor h="3" >}}
Servers
{{< /hanchor >}}

{{< hanchor h="4" >}}
Server control panels
{{< /hanchor >}}
- [Multicraft](https://www.multicraft.org/)
- [Fork](https://www.fork.gg/)
- [Minecraft Bedrock management service](https://github.com/crowbarmaster/BedrockManagementService) - manager of local BDS

{{< hanchor h="4" >}}
Servers search
{{< /hanchor >}}
- 🌐 [MCStatus](https://mcstatus.io) - retrieve the status of any Minecraft server
- ⚙️ [minecraft-server-util](https://passthemayo.gitbook.io/minecraft-server-util/) - a node.js package for interacting with Java and Bedrock Edition Minecraft servers
&nbsp;
- 💬 [ServerSeeker](https://discord.com/invite/jVyHyYbqdS) - biggest servers scanner community (and ServerSeeker bot)
- 🌐 [mc-server-scanner](https://mc-server-scanner.vercel.app/) - servers scanner
&nbsp;
- 🌐 [The Official Minecraft Server List](https://findmcserver.com/)

{{< hanchor h="4" >}}
Server software (Java)
{{< /hanchor >}}
- 📕 [Minecraft server optimization guide](https://github.com/YouHaveTrouble/minecraft-optimization)
- 📕 [Paper Chan's Little Guide to Minecraft Server Optimization!](https://paper-chan.moe/paper-optimization/)
&nbsp;

The great server fork tree:
- [Bukkit](https://dev.bukkit.org/)
  - [Spigot](https://www.spigotmc.org/)
    - [PaperMC](https://papermc.io/) - performance based fork
      - [Purpur](https://purpurmc.org/) - more configurability
      - [Airplane](https://airplane.gg/)
        - [Pufferfish](https://github.com/pufferfish-gg/Pufferfish)
      - [Folia](https://papermc.io/software/folia) - multithreading (used by 2B2T, for large MrBeast events...)
&nbsp;

Proxies for servers:
- [BungeeCord](https://www.spigotmc.org/threads/1-8-1-15-bungeecord.392/)
- [Velocity](https://papermc.io/software/velocity)
&nbsp;

Zero-Mojang-code reliance:
- [Minestom](https://minestom.net/)
- [Glowstone](https://glowstone.net/)

{{< hanchor h="4" >}}
Server software (Bedrock)
{{< /hanchor >}}
📕 [Server software list](https://wiki.bedrock.dev/servers/server-software.html) - A better and complete list of Bedrock server software on the Bedrock Wiki

&nbsp;

- [CloudburstMC & Nukkit](https://cloudburstmc.org/) - server software made in Java
  - [PowerNukkit](https://powernukkit.org/) - a modified version of Nukkit which adds support to a huge amount of features like water-logging,    all new blocks, more plugin events, offhand slot, bug fixes and many more
    - [PowerNukkitX](https://github.com/PowerNukkitX/PowerNukkitX) - a branch version based on PowerNukkit
- [PocketMine-MP](https://pmmp.io/) - server software written in PHP

&nbsp;

- [Bedrock Dedicated Server](https://www.minecraft.net/en-us/download/server/bedrock) - the official BDS which is completely vanilla

&nbsp;

Modded BDS (built on BDS; therefore supports addons, vanilla generation, etc):

&nbsp;

- [LeviLamina](https://levilamina.liteldev.com/) (formerly LiteLoaderBDS) - a lightweight, modular and versatile plugin loader for Minecraft Bedrock Server BDS
- [BDSX](https://github.com/bdsx/bdsx) - supports node.js

{{< hanchor h="4" >}}
Server hosting
{{< /hanchor >}}

The most well known ones (as there are too many to list):

- [GGServers](https://ggservers.com/minecrafthosting)
- [Shockbyte](https://shockbyte.com/games/minecraft-server-hosting)
- [Apex Minecraft Hosting](https://apexminecrafthosting.com)
- [Hostinger](https://www.hostinger.com/minecraft-server-hosting)
- [MCProHosting](https://mcprohosting.com/) - used to be used by Hypixel

&nbsp;

**Includes free plan**

- [bedocker](https://bedocker.com/) - easy free Minecraft Bedrock only server hoster. Only supports BDS
- [Minehut](https://minehut.com/)
- [Server.pro](https://server.pro/)

&nbsp;

{{< hanchor h="3" >}}
Game modifications
{{< /hanchor >}}

{{< hanchor h="4" >}}
Mod loaders (Java)
{{< /hanchor >}}

- [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) - biggest platform, best for older versions
  - [NeoForged](https://neoforged.net/) - Forge fork
- [Fabric](https://fabricmc.net/) - second biggest, best for recent versions
  - [Quilt](https://quiltmc.org/en/) - Fabric fork
- [SinytraConnector](https://github.com/Sinytra/Connector) - a compatibility layer that allows running Fabric mods on Minecraft Forge
- [LiteLoader](https://www.liteloader.com/mods)

Discover the mod loader lore: [The History of Modded Minecraft by CygnusMC](https://www.youtube.com/playlist?list=PLSnKfKBtUECNFJit8mP2FnTjku0kbRrCT)

{{< hanchor h="4" >}}
Mod loaders (Bedrock)
{{< /hanchor >}}

- [Project Amethyst](https://github.com/FrederoxDev/Amethyst) - Windows mod loader
- [Horizon](https://icmods.mineprogramming.org/) - Android mod loader

{{< hanchor h="4" >}}
Mods (Java)
{{< /hanchor >}}

- 📕 [Migrating from Forge to Fabric](https://microcontrollersdev.github.io/Alternatives/) - a list of performance and quality of life related fabric mods to migrate from Forge, as well as other alternative mods.
- 📕 [Optifine Alternatives](https://lambdaurora.dev/optifine_alternatives/) to migrate to Fabric

**Mod browsers:**
- [Modrinth](https://modrinth.com/)
- [CurseForge](https://www.curseforge.com/minecraft)

{{< hanchor h="4" >}}
Clients (Java)
{{< /hanchor >}}
Some clients are standalone, but most are mods, the only difference being they provide a bunch of client side functionality, and are advertised as clients.
&nbsp;
- [Lunar Client](https://www.lunarclient.com/) - biggest client, has launcher
- [Badlion Client](https://client.badlion.net) - has launcher
- [Labymod](https://labymod.net) - compatible with Forge & Fabric mods, has launcher
- [Feather Client](https://feathermc.com/) - compatible with Forge & Fabric mods, has launcher
- [Salwyrr](https://www.salwyrr.com/) - crack support
- [Cloud Client](https://cloudmc.dev/) - Forge mod
- [5zig reborn](https://5zigreborn.eu/) - Forge 1.8.9-1.12.2; Fabric 1.15.2
- [Axolotl Client](https://axolotlclient.github.io/) - Fabric mod

{{< hanchor h="4" >}}
Clients (Bedrock)
{{< /hanchor >}}
Excluding addons.
&nbsp;
- [Onix Client](https://onixclient.com/) - biggest Windows client
- [OptiCraft](https://optijuegos.github.io/) - optimized Minecraft: Education Edition with multiplayer support

{{< hanchor h="4" >}}
Hack clients (Java)
{{< /hanchor >}}
- [Impact](https://impactclient.net/)
- [Vape](https://www.vape.gg/) - ghost client, paid
- [Meteor](https://www.meteorclient.com/)
- [Future](https://futureclient.net/)
- [Wurst](https://www.wurstclient.net/)

- ⚙️ [mineflayer](https://github.com/PrismarineJS/mineflayer) - create Minecraft bots with a JavaScript API
- [baritone](https://github.com/cabaletta/baritone) - automating tasks on the client

{{< hanchor h="4" >}}
Hack clients (Bedrock)
{{< /hanchor >}}

- [Borion Updated](https://github.com/Borion-Updated) - update of [Horion](https://horion.download/) (Windows)

{{< hanchor h="4" >}}
Launchers (Java)
{{< /hanchor >}}

- ⭐ [Prism Launcher](https://prismlauncher.org/) - an Open Source Minecraft launcher with the ability to manage multiple instances, accounts and mods (fork of [MultiMC](https://multimc.org/))
- ⭐ [X Minecraft Launcher](https://xmcl.app/) - an Open Source Minecraft Launcher with Modern UX. Manage multiple instances and mods! (+ support for offline accounts)
- [GDLauncher](https://gdlauncher.com/) - a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience.
- [Hello Minecraft! Launcher](https://github.com/huanghongxun/HMCL) a Minecraft launcher that even works for [mobile devices](https://github.com/huanghongxun/HMCL-PE)!
- [Curseforge launcher](https://curseforge.overwolf.com/)
- [ATLauncher](https://atlauncher.com/)
- [HelixLauncher](https://helixlauncher.dev/) - a fast, lightweight, nicely designed and open-source launcher for Minecraft (still work in progress).
&nbsp;
A comparison video of the most popular Minecraft launchers:

{{< ytcustom id="tEY5tMqhoOY" title="Comparison video of the most popular Minecraft launchers" >}}

{{< hanchor h="4" >}}
Launchers (Bedrock)
{{< /hanchor >}}

- [Minecraft Bedrock Launcher](https://bedrocklauncher.github.io/) - An unofficial Minecraft Bedrock for Windows Launcher
- [MCMrARM's mc-w10-version-launcher](https://github.com/MCMrARM/mc-w10-version-launcher) - Windows version switcher
- [Amethyst Launcher](https://github.com/FrederoxDev/Amethyst-Launcher) - Amethyst runtime support, version switcher and profiles manager
- [MCBE Preview Switcher](https://foxynotail.com/software/mcbe-preview-switcher/) - multi-instancing and version switching software

&nbsp;
&nbsp;

{{< hanchor h="3" >}}
Software and Online tools
{{< /hanchor >}}

{{< hanchor h="4" >}}
Worlds
{{< /hanchor >}}

- 🌐 [Cubical](https://cubical.xyz/) - an advanced **online** editor, creator and viewer for Minecraft projects and builds
- ⚙️ [prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer) - web based viewer for servers and bots
- [Amulet](https://www.amuletmc.com/) - Minecraft world editor and converter, a better version of [MCEdit](http://www.mcedit.net/) (Java 1.12+ and Bedrock 1.7+)
- [MCA Selector](https://github.com/Querz/mcaselector) - modify chunks of a Java world
- [WorldPainter](https://www.worldpainter.net/) - an interactive map generator for Minecraft. It allows you to "paint" landscapes using similar tools as a regular paint program.
- [Chunker](https://chunker.app/) - Minecraft world converter (endorsed by Mojang)
- [uNmINeD](https://unmined.net/) - an easy to use and fast Minecraft world viewer and mapper tool (supports Java & Bedrock worlds)
- [Amidst](https://github.com/toolbox4minecraft/amidst) - a tool to display an overview of a Minecraft seed
- 🌐 [MCSeeder](https://www.mcseeder.com/) - an online tool to display an overview of a Minecraft seed
- 🌐 [World Size Calculator](https://onlinemo.de/world) - calculate Java worlds' disk size

&nbsp;

**World renderers:**
- [Chunky](https://chunky-dev.github.io/docs/) - Render photorealistic scenes of your Minecraft worlds with path tracing, Minecraft 1.2.1+
- [Mapcrafter](https://github.com/mapcrafter/mapcrafter) - high performance Minecraft map renderer (Minecraft 1.13 or less)
- [The Minecraft Overviewer](https://overviewer.org/) - high-resolution Minecraft world renderer (Minecraft 1.15 or less)
&nbsp;
- [NBT Studio](https://github.com/tryashtar/nbt-studio)
- [Image Map](https://github.com/tryashtar/image-map) - convert images to Minecraft maps and import them to your world

{{< hanchor h="4" >}}
Skins
{{< /hanchor >}}
**Skin sharing:**
- [NameMC](https://namemc.com/minecraft-skins) - skin library + player skins search
- [Laby.net](https://laby.net/) - like NameMC
- [The Skindex](https://www.minecraftskins.com/)
- [PlanetMinecraft skins](https://www.planetminecraft.com/skins/)
- [Nova Skin](https://minecraft.novaskin.me/)

**Skin editors:**
- ⭐🌐 [PMCSkin3D](https://www.planetminecraft.com/skin-editor/)
- 🌐 [Nova Skin](https://minecraft.novaskin.me/)
- 🌐 [Skindex](https://www.minecraftskins.com/skin-editor/)
- [Blockbench](https://www.blockbench.net/) - also has web app

{{< hanchor h="4" >}}
Models & Animation
{{< /hanchor >}}
- ⭐ [Mine-imator](https://www.mineimatorforums.com/index.php?/topic/90789-mine-imator-202/) - best Minecraft animation software
- [Modelbench](https://www.mineimatorforums.com/index.php?/topic/79256-modelbench-115/) - modeling software for Mine-imator
- ⭐ [Blockbench](https://www.blockbench.net/) - also has web app: create blocky models & animations
- ⚙️ [MineRenderer](https://minerender.org/) - web API for rendering skins, blocks, items & GUI
- [Open Note Block Studio](https://opennbs.org/) - note block songs editor

{{< hanchor h="4" >}}
Modding (Java)
{{< /hanchor >}}
Idk much about the Java modding scene...
- [MCreator](https://mcreator.net/) - interactive software for developing Java mods

{{< hanchor h="4" >}}
Addon development (Bedrock)
{{< /hanchor >}}
- 📕 [Bedrock Wiki](https://wiki.bedrock.dev/) - guides to creating addons
- 📕 [bedrock.dev](https://wiki.bedrock.dev/)
&nbsp;
- [MCreator](https://mcreator.net/) - interactive software for developing Bedrock addons
- [bridge.](https://bridge-core.github.io/) - Minecraft addons IDE
&nbsp;
- 🌐 [Loot tables generator](https://outils.carrade.eu/minecraft/loot_tables)
- 🌐 [Crafting recipe generator](https://crafting.thedestruc7i0n.ca/)
- 🌐 [MCBE Essentials](https://mcbe-essentials.github.io/)
&nbsp;
{{< hanchor h="4" >}}
Rip-offs
{{< /hanchor >}}
- [CraftStudio](https://sparklinlabs.itch.io/craftstudio) - create blocky games (unmaintained)
- [Minetest](https://www.minetest.net/) - open source voxel game engine

{{< hanchor h="3" >}}
Documentation & Communities
{{< /hanchor >}}
- 📕 [The Minecraft Wiki](https://minecraft.wiki/)
- 📕 [wiki.vg](https://wiki.vg/Main_Page) - Minecraft protocol documentation amongst other stuff
- 📕 [Minecraft Parkour Wiki](https://mcpk.miraheze.org/wiki/Main_Page)
&nbsp;
- 🌐 [Minecraft Assets](https://mcasset.cloud/) - browse Minecraft files
&nbsp;

- [Omniarchive](https://omniarchive.uk/) - Minecraft archives

&nbsp;

**🛒 Markets**
- [BuiltByBit](https://builtbybit.com/) - formerly MCMarket, largest market from Minecraft-related services
- [Bucket of Crabs](https://www.bucketofcrabs.net/) - find jobs related to Minecraft (and other games)
