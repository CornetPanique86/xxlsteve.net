---
title: How to Install Filestash on Linux for Local Storage
date: 2023-09-24T17:00:25+02:00
lastmod: 2023-10-01T14:40:42.820Z
draft: false
aliases:
  - how-to-install-filestash-on-linux-for-local-storage
image: how-to-install-filestash/img/thumbnail.jpg
author: XXL Steve
description: A complete guide on installing Filestash on a Linux Ubuntu system for your local storage!
ogtype: article
images:
  - /blog/how-to-install-filestash/img/thumbnail.jpg
tableOfContents:
  - h1: What is Filestash?
  - h1: Prerequisites
    h2:
      - t2: Install Docker
      - t2: Install SFTP
  - h1: Install Filestash
    h2:
      - t2: Configure Filestash
      - t2: Configure Webserver
      - t2: Configure backend
tags:
  - Tutorial
categories:
  - Blog
---

{{< hanchor h="3" >}}
What is Filestash?
{{< /hanchor >}}

[Filestash](https://www.filestash.app/) is a frontend File Management service which provides an interface for modifying, uploading and downloading files for various web services, like Google Drive, Dropbox, or local storage.

{{< image src="img/filestash_demo.jpg" caption="Filestash in all its glory!" >}}

In this tutorial you will learn how to install Filestash on an **Ubuntu server** to **manage your local files**.

We will be using **SFTP as the backend** service because I couldn't get the "Local" backend option to work...

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

```sh
docker -v
docker compose version
```

{{< hanchor h="4" >}}
Install SFTP
{{< /hanchor >}}

*Guide inspired by: https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-20-04-focal-fossa-linux*

{{< hanchor h="5" >}}
Change SSH config
{{< /hanchor >}}

First, you'll need to change the configuration of SSHD. Open it using nano for example:

```sh
$ sudo nano /etc/ssh/sshd_config
```

And add the following config at the **end** of the file:

```aconf {linenos=table}
Match group sftp
ChrootDirectory /home
X11Forwarding no
AllowTcpForwarding no
ForceCommand internal-sftp
```

Now, save and exit the file (<kbd>Ctrl</kbd> + <kbd>X</kbd> ; <kbd>Ctrl</kbd> + <kbd>Y</kbd> ; <kbd>Enter</kbd> on Nano).

{{< boxnotice type="tip" >}}With this code, users in the `sftp` group only have permission to access their home directories via SFTP, and are denied any shell/command access.{{< /boxnotice >}}

&nbsp;

Now, restart the SSH service:

```sh
$ sudo systemctl restart ssh
```

{{< hanchor h="5" >}}
Create a user
{{< /hanchor >}}

First, create the group called `sftp`: the SFTP user will belong to it, to restrain its permissions.

```sh
$ sudo addgroup sftp
```

<hr>

Now, create the user that will serve as SFTP connection for filestash. Name it however you want, I chose `myfiles`.

```sh
$ sudo useradd -m myfiles -g sftp
```

Notice that I added it to the group `sftp`.

&nbsp;

Add a password for the user:

```sh
$ sudo passwd myfiles
New password: 
Retype new password: 
passwd: password updated successfully
```

Creating the user automatically generated the directory `/home/myfiles/`, which is where all filestash files will be stored. Make sure to only allow access to it by the user and therefore deny access by anyone else:

```sh
$ sudo chmod 700 /home/myfiles/
```

Here you go, the SFTP setup part is done! 

Filestash will be using the newly created SFTP user to connect to your system's files using the SFTP protocol.

{{< boxnotice type="tip" >}}To test the SFTP connection, you can establish a connection by opening a terminal and typing:
```sh
$ sftp myfiles@127.0.0.1
```
And replacing the local placeholder IP with the system's IP if necessary.{{< /boxnotice >}}

{{< hanchor h="3" >}}
Install Filestash
{{< /hanchor >}}

*Official guide: https://www.filestash.app/docs/install-and-upgrade/*

It's finally time to install Filestash!

Don't worry, you just need 3 commands:

```sh {hl_lines=["1-2"]}
~/$ mkdir filestash && cd filestash
~/filestash$ curl -O https://downloads.filestash.app/latest/docker-compose.yml
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
Dload  Upload   Total   Spent    Left  Speed
100   322  100   322    0     0     98      0  0:00:03  0:00:03 --:--:--    98
```

And to launch an instance:

```sh
~/filestash$ docker-compose up -d
```

{{< boxnotice type="tip" >}}Useful docker commands:
```sh
docker logs filestash # show logs
docker ps # running docker containers
```
{{< /boxnotice >}}

With the instance launched, you can open your browser and type the system's IP followed by the default filestash port which is `8334`:

`http://your_ip:8334`

{{< image src="https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/screenshots/setup_password.png" >}}

Enter the admin password you want to use to protect the admin console. The admin console is available at `/admin`.

&nbsp;

__**Filestash web structure:**__
**/admin** - *Access admin interface*
**/files** - *Access files*
**/login** - *Access login*

{{< hanchor h="4" >}}
Configure Filestash
{{< /hanchor >}}

These are basic configuration steps to get the service setup.

&nbsp;

Put your domain name under `Configure` > `General`. example: `files.xxlsteve.net`/`your_ip:port`

You probably don't need the API so disable it.

If watching videos doesn't work, disable `Transcoding` under video options.

{{< hanchor h="4" >}}
Configure Webserver
{{< /hanchor >}}

{{< boxnotice type="tip" >}}It is still possible to use Filestash without a domain. You will connect with the URL: `http://your_ip:port`{{< /boxnotice >}}

Now configure the webserver for it to link a URL to filestash. NGINX will be used in the examples.

Please note that linking filestash with a URL in root like: `example.com/filestash` currently doesn't work (see issue [#625](https://github.com/mickael-kerjean/filestash/issues/625)). It either has to be linked to the domain itself: `example.com` or to a subdomain: `filestash.example.com`.

{{< hanchor h="5" >}}
Using a reverse proxy with https
{{< /hanchor >}}

See official example: https://www.filestash.app/docs/install-and-upgrade/#optional-using-a-reverse-proxy

{{< hanchor h="4" >}}
Configure backend
{{< /hanchor >}}

Go back to the admin console: `url/admin` and to the "Dashboard" tab.

&nbsp;

Now it is time to choose the backend option, or in other words where the files will be stored.

Filestash supports a lot of services like Google Drive, Dropbox, AWS S3, and local.

&nbsp;

Delete the already-enabled backends if necessary, and then add `SFTP`.

{{< image src="img/storage_backend.jpg" caption="Storage Backend selected: SFTP" >}}

Scroll to the bottom and now choose the **middleware**. It is the intermediary service that allows to access to your file system, basically the login system.

I use the **passthrough** method. You can choose either connection with a username and a password, with just a password, or without any authentification.

&nbsp;

Fill in the information:

1. **Related Backend**: you will be using `SFTP`
2. **Hostname**: put your IP address
3. **Username**: if you selected 'password-only', put the username of your SFTP user: `myfiles`, and if you want the user to type it in; put `{{ .user }}`
4. **Password**: if you want automatic authentification, type the password for the sftp user, otherwise put: `{{ .password }}`
5. **Path**: put `/myfiles/` to place the user directly into the correct directory

You can leave the other inputs blank.

{{< image src="img/auth_middleware.jpg" caption="Passthrough configuration example" >}}

&nbsp;

Now, going to the default URL you made should show a login page for SFTP.

{{< image src="img/login_page.jpg" caption="Yes, you can add custom CSS in the admin settings!" alt="Login page screenshot" >}}

And you should be succesfully entered into your file system!
I hope this tutorial was helpful 🙂