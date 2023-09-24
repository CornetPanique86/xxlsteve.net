---
title: "How to Install Filestash on Linux for Local Storage"
date: 2023-09-24T17:00:25+02:00
lastmod: 2023-09-24T17:00:25+02:00
draft: true

aliases:
- how-to-install-filestash-on-linux-for-local-storage

image: how-to-install-filestash/img/thumbnail.jpg
author: XXL Steve
description:
ogtype: article
images:
- /blog/how-to-install-filestash/img/thumbnail.jpg

tableOfContents:
- h1:
  h2:
    - t2:

tags:
- Tutorial
categories:
- Blog
---

{{< hanchor h="3" >}}
What is Filestash?
{{< /hanchor >}}

[Filestash](https://www.filestash.app/) is a frontend File Management service which provides an interface for modifying, uploading and downloading files for various web services, like Google Drive, Dropbox, or local storage.

&nbsp;

In this tutorial you will learn how to install Filestash on an Ubuntu server to manage your local files.

&nbsp;
&nbsp;

<iframe id="appframe" frameborder="0" src="https://demo.filestash.app/login?type=webdav&amp;url=https://webdav.filestash.app/" allow="fullscreen;speaker"></iframe>

&nbsp;

{{< hanchor h="3" >}}
Prerequisites
{{< /hanchor >}}

| Category | Required  |
|----------|-----------|
| System   | Linux (Ubuntu in this tutorial) |
| Software | [Docker](https://www.docker.com), [OpenSSH](https://www.openssh.com/) - usually is pre-installed, [SFTP](https://www.filestash.app/sftp-as-a-service.html) |
| Access   | Root privileges - user root or with `sudo` |
