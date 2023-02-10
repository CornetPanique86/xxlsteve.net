---
title: "X Minecraft Launcher - the only launcher you need"
date: 2023-02-05T12:02:47+01:00
lastmod: 2023-02-05T12:02:47+01:00
draft: false

aliases:
  - xmcl
  - x-minecraft-launcher-the-only-launcher-you-need

image: x-minecraft-launcher/img/thumbnail.jpg
author: XXL Steve
description: "X Minecraft Launcher is an open source launcher with modern UX. Let's look at how to install it!"
ogtype: article
images:
- /blog/x-minecraft-launcher/img/thumbnail.jpg

tableOfContents:
- h1: Intro
- h1: Install XMCL
- h1: User account
- h1: Add an instance
  h2:
    - t2: Launching the game
- h1: Conclusion

tags:
- Tutorial
categories:
- Blog
---

### [X Minecraft Launcher](https://xmcl.app/) : An Open Source Minecraft Launcher with Modern UX. Multi-instancing in a disk efficient way, as well as offline accounts support.

{{< hanchor h="3" >}}
Intro
{{< /hanchor >}}

I think we've all been frustrated because of a new problem with the official Minecraft launcher: crashes, logging in is not working...

There are so many bugs that an entire article is dedicated for that on the [Minecraft help center](https://help.minecraft.net/hc/en-us/articles/6662588435597-Minecraft-Launcher-Troubleshooting-FAQ).

&nbsp;

Looking for better solutions, I found the launcher [MultiMC](https://multimc.org/) which I used for quite a while until I found PolyMC (which is a{{< helphint "A fork is the copy of a Github repository, basically in this case PolyMC is another version of MultiMC." >}}fork{{< /helphint >}} of MultiMC), then migrated to [Prism Launcher](https://prismlauncher.org) because PolyMC got compromised.

Prism Launcher works perfectly and has more or less everything you'd expect from a launcher. But there is one thing that bothered me: it was the user interface. I never really liked the design of Prism or MultiMC. And putting a custom theme didn't help either.

&nbsp;

And that's when one day I discover the [X Minecraft Launcher](https://xmcl.app/) (or XMCL) : 

- Open Source
- Support for Windows 10/11, MacOS, Linux
- Modern UI
- Multi-instances
- Resource sharing between instances *(and therefore you no longer need to copy the same resources in each instance like it was the case on Prism)*

...and lots of other features, including **support for free/cracked accounts**, which I assume will be of interest to a lot of people.

There also is a feature to play multiplayer with a friend even if they are not connected to the same WiFi, which is rather unique as a feature (I only know [FeatherMC](https://feathermc.com) which has something similar).

{{< hanchor h="3" >}}
Install XMCL
{{< /hanchor >}}

Well, the intro is starting to get long, here's the tutorial you are waiting for 😆

{{< boxnotice type="warning" >}}This tutorial was made for Windows 10 or 11 users.{{< /boxnotice >}}

1. Download the .appinstaller or .appx (it doesn't really matter) from the [website](https://xmcl.app/), or the .zip for a {{< helphint "A portable, or standalone application, is a program designed to read and write its configuration settings into an accessible folder in the computer, usually in the folder where the portable application can be found." >}}portable version{{< /helphint >}}

2. Double-click/open the downloaded file, and install.

3. An interface will then open, to define 3 parameters before starting the app. Choose the language of your choice. Then put the application root folder, in which all resources will be stored (mods, resource packs, etc). Finally, the app offers to import your existing resources, by default from the .minecraft folder in %appdata%.

{{< figure src="/blog/x-minecraft-launcher/img/app-install-language.jpg" caption="Choose your language" class="figurePopup imagePopup" >}}

{{< hanchor h="3" >}}
User account
{{< /hanchor >}}

Now, you have to log in to your Minecraft account.

Click on the account button at the top left then add an account. Select "Offline" for cracked accounts.

{{< figure src="/blog/x-minecraft-launcher/img/user-profile.jpg" caption="Premium account display" class="figurePopup imagePopup" >}}

{{< hanchor h="3" >}}
Add an instance
{{< /hanchor >}}

All that remains to do is play Minecraft, and for that you must first create an instance.

If you don't recognize the multi-instance system, basically each instance corresponds to a "Minecraft game" with its own settings, version, etc. This allows you to not always have to change the mods folder as is the case with the official launcher.

For example, if you want to play in 1.19.2 with the Fabric modpack "Fabulously Optimized", press the "Modrinth" button, select "Modpacks", then download the modpack in question. Everything else is handled by the app.

{{< figure src="/blog/x-minecraft-launcher/img/modpack-download.jpg" caption="The newly created instance" class="figurePopup imagePopup" >}}

{{< hanchor h="4" >}}
Launching the game
{{< /hanchor >}}

If this is your first instance, you will probably need to download the corresponding Minecraft version. Fortunately, all this is automatically managed by the launcher.

It's possible that you don't have Java either, and in that case I *believe* that the launcher can also download it but I haven't tested it, and I recommend installing Java yourself : [tutorial on the Minecraft Wiki](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server#Java).

{{< hanchor h="3" >}}
Conclusion
{{< /hanchor >}}

XMCL has other features like playing multiplayer with your own server and it also allows you to change themes etc, but I'll let you explore all of that on your own.

As the app is Open Source, don't hesitate to contribute: [Github page](https://github.com/voxelum/x-minecraft-launcher)

I hope this tutorial was helpful to you!
