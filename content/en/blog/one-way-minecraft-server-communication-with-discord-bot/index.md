---
title: "One-way Minecraft Server Communication with Discord Bot"
date: 2025-04-19T22:45:56+02:00
lastmod: 2025-04-20T15:47:42+02:00
draft: false
image: one-way-minecraft-server-communication-with-discord-bot/img/thumbnail.jpg
author: XXL Steve
description: How to establish one-way communication between a discord bot and your node.js plugin for your Minecraft server using HTTP requests!
ogtype: article
images:
  - /blog/one-way-minecraft-server-communication-with-discord-bot/img/thumbnail.jpg

tableOfContents:
  - h1: Discord bot
  - h1: Minecraft server

tags:
  - Javascript
  - Typescript

categories: 
  - Tutorial
---

How to establish one-way local communication between a discord bot and your node.js plugin for your Minecraft server using HTTP requests!

&nbsp;
My use for this was a Discord bot that played through a playlist in a voice channel, and whenever a new song played, it would display in the Minecraft server the title and author of the song as a jukebox popup.

While many Minecraft plugins that use a discord bot just include the bot inside the plugin's files to be able to use each other's function in a simple import, in my case I wanted the bot and the plugin to be 2 separate things, that can be placed wherever I want on the computer. So I decided a local HTTP request would be the simplest way to communicate between them.

```goat
+---------+                  +-----------+
| Discord |   HTTP request   | Minecraft |
|  bot    | ---------------> |  server   |
+---------+                  +-----------+
```

{{< hanchor h="3" >}}
Discord bot
{{< /hanchor >}}

The Discord bot sends the HTTP request, I will be using Discord.js so it's fairly easy:

```js
const URL = 'http://127.0.0.1:19134/message'; // Replace with the server's URL

function sendMessage() {
  try {
		const response = await fetch(URL, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({ 
        title: "Subwoofer Lullaby", 
        artist: "C418" 
      }),
		});
	
		if (!response.ok) {
			throw new Error("HTTP request failed with status", response.status);
		}
	} catch (error) {
		console.error("Error sending HTTP request to server:", error);
	}
}
```

With node.js, a simple `fetch` will send a HTTP request. We want local communication, thus the URL being on localhost (`127.0.0.1`).

The port should not be used by any other program, and I chose `19134` as a default Minecraft Bedrock server uses the ports `19132` and `19133`.

{{< hanchor h="3" >}}
Minecraft server
{{< /hanchor >}}

I am using a BDSX Minecraft Bedrock server, which is typescript + node.js based, meaning I can use npm packages.

So, I will be using [Express](https://expressjs.com/) to listen for requests, though there might be more lightweight packages for such a simple task.

&nbsp;
**Don't forget to install the package:**

```sh
npm install express
```

`music.ts`:
```ts
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 19134;

app.use(bodyParser.json());

// Endpoint to receive HTTP requests from Discord bot
app.post('/message', (req: {body: { title: string, artist: string }}, res: any) => {
    const message = req.body;

    bedrockServer.level.getPlayers().forEach(pl => {
        pl.sendJukeboxPopup(`${message.title} §7- §f${message.artist}`);
    });

    res.sendStatus(200);
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Express.js server is running on port ${PORT}`);
});

events.serverClose.on(() => {
    console.log("Closing Express.js server...");
    server.close(() => {
        console.log(logPrefix + 'Express.js server closed');
    });
});
```

Now, start the Minecraft server first, then the Discord bot, and the communication should work!
