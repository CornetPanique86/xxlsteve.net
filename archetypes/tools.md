---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description:
ogtype: article
images:
- /tools/{{.Name}}/img/thumbnail.jpg
---