---
title: "Upgrading to PAYG to Fix 'Out of Capacity' Error - My experience (Oracle Cloud)"
date: 2025-05-04T19:31:33+02:00
lastmod: 2025-05-04T19:58:55+02:00
draft: false
image: upgrading-to-payg-to-fix-out-of-capacity-error/img/thumbnail.jpg
author: XXL Steve
description: I recently faced an 'Out of Host Capacity' error every time I started my Oracle Cloud instance, so as an Always Free account I upgraded to a Pay As You Go account and this is how much time it took before I could start the instance.
ogtype: article
images:
- /blog/upgrading-to-payg-to-fix-out-of-capacity-error/img/thumbnail.jpg

tableOfContents:
- h1: Upgrading to PAYG
- h1: Setting a budget

tags:
- Hosting
---

I had an Always Free Oracle Cloud account running an instance with a VM.Standard.E2.1.Micro shape in the EU Paris 1 region.

However Oracle Cloud shut down my VPS on the 13th of april for maintenance. Then when I tried starting it, an error displayed "Out of host capacity".

&nbsp;

There are 2 solutions:

- using an automated script that will run on your personal computer and request to Oracle's API to start the instance every 5 minutes

- upgrading to Pay As You Go to be prioritized when starting an instance

{{< hanchor h="3" >}}
Upgrading to PAYG
{{< /hanchor >}}

I chose the latter: I had to pay 93€, and after a week was finally refunded.

The account seemed like it was officially PAYG, but I still faced the same error when starting the instance.

But today, the 4th of may, the VPS is finally on!

{{< hanchor h="3" >}}
Setting a budget
{{< /hanchor >}}

But as a PAYG account, Oracle Cloud can bill you without you noticing, so create a budget in the *Cost Management* section of 1€ (for example) to be emailed whenever Oracle bills you morer than 1€.

{{< image src="img/budget.jpg" caption="A 2€ budget restriction" >}}
