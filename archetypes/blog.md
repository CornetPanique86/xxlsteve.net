---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
image: {{ .Name }}/img/header-image.png
author: XXL Steve
description:
ogtype: article
ogimage: /blog/{{ .Name }}/img/header-image.png

tableOfContents:
- h1:
  n1: 1
  h2:
    - t2:
      n2: 1.1

tags:
categories:
- Blog
---

