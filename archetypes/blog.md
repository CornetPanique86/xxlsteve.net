---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
image: {{ .Name }}/img/
author: XXL Steve
description:
ogtype: article
ogimage: /blog/{{ .Name }}/img/

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

< hanchor h="3" >
< /hanchor >

< figure src="/blog/{{ .Name }}/img/" caption="" alt="" class="figurePopup" >