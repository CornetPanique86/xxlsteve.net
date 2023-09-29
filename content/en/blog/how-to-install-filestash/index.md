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

In this tutorial you will learn how to install Filestash on an **Ubuntu server** to **manage your local files**.

We will be using **SFTP as the backend** service because I couldn't get the "Local" backend option to work...

&nbsp;
&nbsp;

<iframe id="appframe" frameborder="0" src="https://demo.filestash.app/login?type=webdav&amp;url=https://webdav.filestash.app/" allow="fullscreen;speaker"></iframe>

&nbsp;

{{< hanchor h="3" >}}
Prerequisites
{{< /hanchor >}}

| Category | Required  |
|----------|-----------|
| Hardware | At least 64MB of RAM and 1 core |
| System   | Linux (Ubuntu in this tutorial) |
| Software | [Docker](https://www.docker.com), [OpenSSH](https://www.openssh.com/) - usually is pre-installed, [SFTP](https://www.filestash.app/sftp-as-a-service.html) |
| Access   | Root privileges - user root or with `sudo` |

{{< hanchor h="4" >}}
Install Docker
{{< /hanchor >}}

If docker isn't installed on your system, you can use this official guide from [Docker docs](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).

&nbsp;

**Check if docker is installed**

{{< highlight sh >}}
docker -v
docker compose version
{{< /highlight >}}

{{< hanchor h="4" >}}
Install SFTP
{{< /hanchor >}}

*Guide inspired by: https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-20-04-focal-fossa-linux*

{{< hanchor h="5" >}}
Change SSH config
{{< /hanchor >}}

First, you'll need to change the configuration of SSHD. Open it using nano for example:

{{< highlight sh >}}
\$ sudo nano /etc/ssh/sshd_config
{{< /highlight >}}

And add the following config at the **end** of the file:

{{< highlight aconf "linenos=table" >}}
Match group sftp
ChrootDirectory /home
X11Forwarding no
AllowTcpForwarding no
ForceCommand internal-sftp
{{< /highlight >}}

Now, save and exit the file (<kbd>Ctrl</kbd> + <kbd>X</kbd> ; <kbd>Ctrl</kbd> + <kbd>Y</kbd> ; <kbd>Enter</kbd> on Nano).

{{< boxnotice type="tip" >}}With this code, users in the `sftp` group only have permission to access their home directories via SFTP, and are denied any shell/command access.{{< /boxnotice >}}

&nbsp;

Now, restart the SSH service:

{{< highlight sh >}}
\$ sudo systemctl restart ssh
{{< /highlight >}}

{{< hanchor h="5" >}}
Create a user
{{< /hanchor >}}

First, create the group called `sftp`: the SFTP user will belong to it, to restrain its permissions.

{{< highlight sh >}}
\$ sudo addgroup sftp
{{< /highlight >}}

<hr>

Now, create the user that will serve as SFTP connection for filestash. Name it however you want, I chose `myfiles`.

{{< highlight sh >}}
\$ sudo useradd -m myfiles -g sftp
{{< /highlight >}}

Notice that I added it to the group `sftp`.

&nbsp;

Add a password for the user:

{{< highlight sh >}}
\$ sudo passwd myfiles
New password: 
Retype new password: 
passwd: password updated successfully
{{< /highlight >}}

Creating the user automatically generated the directory `/home/myfiles/`, which is where all filestash files will be stored. Make sure to only allow access to it by the user and therefore deny access by anyone else:

{{< highlight sh >}}
\$ sudo chmod 700 /home/myfiles/
{{< /highlight >}}

Here you go, the SFTP setup part is done! 

Filestash will be using the newly created SFTP user to connect to your system's files using the SFTP protocol.

{{< boxnotice type="tip" >}}To test the SFTP connection, you can establish a connection by opening a terminal and typing:
{{< highlight sh >}}
\$ sftp myfiles@127.0.0.1
{{< /highlight >}}
And replacing the local placeholder IP with the system's IP if necessary.{{< /boxnotice >}}

{{< hanchor h="3" >}}
Install Filestash
{{< /hanchor >}}

*Official guide: https://www.filestash.app/docs/install-and-upgrade/*

It's finally time to install Filestash!

Don't worry, you just need 3 commands:

{{< highlight sh "hl_lines=1-2" >}}
~/\$ mkdir filestash && cd filestash
~/filestash\$ curl -O https://downloads.filestash.app/latest/docker-compose.yml
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
Dload  Upload   Total   Spent    Left  Speed
100   322  100   322    0     0     98      0  0:00:03  0:00:03 --:--:--    98
{{< /highlight >}}

And to launch an instance:

{{< highlight sh >}}
~/filestash\$ docker-compose up -d
{{< /highlight >}}

With the instance launched, you can open your browser and type the system's IP followed by the default filestash port which is `8334`:

`http://your_ip:8334`

{{< image src="https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/screenshots/setup_password.png" >}}

Enter the admin password you want to use to protect the admin console. The admin console is available at `/admin`.
