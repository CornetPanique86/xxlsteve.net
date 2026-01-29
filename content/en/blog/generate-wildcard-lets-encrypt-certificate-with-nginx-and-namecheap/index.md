---
title: Generate Wildcard Let's Encrypt Certificate with nginx and Namecheap
date: 2023-11-02T17:27:46+01:00
lastmod: 2026-01-29T20:54:18.433Z
draft: false
image: generate-wildcard-lets-encrypt-certificate-with-nginx-and-namecheap/img/thumbnail.jpg
author: XXL Steve
description: Tired of paying $10 to Namecheap PositiveSSL? Learn how to get free TLS/SSL using Let's Encrypt and Certbot with Namecheap DNS and a nginx webserver!
ogtype: article
images:
  - /blog/generate-wildcard-lets-encrypt-certificate-with-nginx-and-namecheap/img/thumbnail.jpg
tableOfContents:
  - h1: Prerequisites
  - h1: Installing Certbot
    h2:
      - t2: Remove certbot-auto and any Certbot OS packages
      - t2: Install Certbot
  - h1: Generate certificate
    h2:
      - t2: Run Certbot command
      - t2: Add TXT record
      - t2: nginx
  - h1: Renewal
tags:
  - Linux
categories:
  - Tutorial
---

Namecheap offers SSL certificates support but it costs around $10 for the first year, where as there are free solutions to getting SSL for your website like [Let's Encrypt](https://letsencrypt.org/) using [Certbot](https://certbot.eff.org/).  So, that's why after 1 year with namecheap's PositiveSSL I tried switching to the free Certbot solution.

&nbsp;
In this tutorial we will cover how to generate a {{< helphint "Wildcard certificates are valid for all subdomains: *.example.com will offer HTTPS for all subdomains" >}}wildcard{{< /helphint >}} Let's Encrypt certificate using Namecheap as the {{< helphint "Domain Name Server" >}}DNS{{< /helphint >}} and nginx as the web server on Ubuntu (22.04.3 for me).
Since there is no certbot plugin for namecheap, the method is more manual.

{{< hanchor h="3" >}}
Prerequisites
{{< /hanchor >}}

| Category | Required  |
|----------|-----------|
| System   | Ubuntu in this tutorial |
| Software | [snapd](https://snapcraft.io/docs/installing-snapd/), [OpenSSH](https://www.openssh.com/) - both are preinstalled on Ubuntu |
| Access   | Root privileges - user root or with `sudo` |

{{< hanchor h="3" >}}
Installing Certbot
{{< /hanchor >}}

{{< hanchor h="4" >}}
Remove certbot-auto and any Certbot OS packages
{{< /hanchor >}}

If you have any Certbot packages installed using an OS package manager like apt, dnf, or yum, you should remove them before installing the Certbot snap to ensure that when you run the command certbot the snap is used rather than the installation from your OS package manager:

```sh
$ sudo apt-get remove certbot
```

{{< hanchor h="4" >}}
Install Certbot
{{< /hanchor >}}

```sh
$ sudo snap install --classic certbot
certbot 2.7.4 from Certbot Project (certbot-eff✓) installed
```

Make sure that the `certbot` command can be run with this command:
```sh
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

{{< hanchor h="3" >}}
Generate certificate
{{< /hanchor >}}

{{< hanchor h="4" >}}
Run Certbot command
{{< /hanchor >}}

Now we have to manually generate the certificate which requires a lot of steps.
First, because we're trying to get a wildcard cert, we need to add a certain TXT DNS record value to our Namecheap domain.
We can obtain a value for the TXT record from Let’s Encrypt with:

```sh {linenos=table,hl_lines=[3]}
$ sudo certbot certonly \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --manual --preferred-challenges dns -d "*.example.com" -d "example.com"
```

And replace `example.com` with your own domain (`xxlsteve.net` for me).
Here, `-d "*.example.com" -d "example.com"` assures that all subdomains will be allowed HTTPS, but also the root domain, `example.com`. If for instance you don't need {{< helphint "The protocol for HTTPS" >}}TLS/SSL{{< /helphint >}} for `example.com` for example because you access your site via `www.example.com`, you can simply put: `-d *.example.com`.

{{< hanchor h="4" >}}
Add TXT record
{{< /hanchor >}}

After entering your email address, it should give you a value to add to a TXT record under the name:
_acme-challenge.example.com.

Go to your namecheap domain's advanced DNS settings, and under host records, add a new `TXT record`.
Add `_acme-challenge` for the Host value and the given value to Value.

{{< image src="img/txt-record-dns.jpg" >}}

Now, wait until Namecheap has synced the new record (might take a minute). To test if it's done, you can run this command on a command prompt:

```powershell
nslookup -type=TXT _acme-challenge.example.com
```
(Of course, replace example.com with your domain)

If it succeeds it should return the following:
```powershell
Server:         192.XXX.XXX.XXX
Address:        192.XXX.XXX.XXX
Non-authoritative answer:
_acme-challenge.example.com    text =

        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Alternatively, you can use this online tool: 
https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.example.com (replace example.com at the end).

Since it succeeded, you can now press <kbd>Enter</kbd> back in Ubuntu to continue the certificate creation process.

When that's done, `fullchain.pem` and `privkey.pem` will be generated most likely in `/etc/letsencrypt/live`.

{{< spoiler "Command response and steps" >}}
```sh {linenos=table,hl_lines=[3,10,19,30,42,"60-61"]}
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): email@gmail.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.3-September-21-2022.pdf. You must
agree in order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: Y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: Y
Account registered.
Requesting a certificate for *.example.com and example.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.example.com.

with the following value:

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.example.com.

with the following value:

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

(This must be set up in addition to the previous challenges; do not remove,
replace, or undo the previous challenge tasks yet. Note that you might be
asked to create multiple distinct TXT records with the same name. This is
permitted by DNS standards.)

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.example.com.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/example.com/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/example.com/privkey.pem
This certificate expires on 20XX-XX-XX.
These files will be updated when the certificate renews.

NEXT STEPS:
- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
{{< /spoiler >}}

{{< hanchor h="4" >}}
nginx
{{< /hanchor >}}

Now you just need to include the newly generated certificate in your nginx website's configuration. The most basic (but not secure!) implementation would be these 2 lines in your server block:

```nginx {linenos=table}
server {
  ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```

{{< hanchor h="3" >}}
Renewal
{{< /hanchor >}}

The certificate needs renewal every 90 days, though preferably every 60.
While the default Cerbot installation methods provide automatic renewal, the manual installation needs to be combined with an authentication hook script via `--manual-auth-hook`. That is, running the original command would instead be:

```sh {linenos=table,hl_lines=["3-4"]}
$ sudo certbot certonly \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --manual --manual-auth-hook /path/to/dns/authenticator.sh \
  --manual-cleanup-hook /path/to/dns/cleanup.sh \
  -d secure.example.com --preferred-challenges dns -d "*.example.com" -d "example.com"
```

This will run the `authenticator.sh` script, attempt the validation, and then run the `cleanup.sh` script.

&nbsp;
However, these scripts need access to Namecheap's API to perform the otherwise manually done task of validation. But the criteria to qualify for API access is the following:
*"Account balance of $50+, 20+ domains in your account, or purchases totaling $50+ within the last 2 years."*
...which is probably not the case for you.

Since automatic renewal is not possible because of Namecheap API criteria, the only option left is the manual way. That means running the same command every 60 to 90 days, and therefore repeating the task of adding a TXT record to your domain, etc.

Personally, Google calendar notifies me every 90 days to renew the certificate by running the command from [Run Certbot command](#run-certbot-command).
