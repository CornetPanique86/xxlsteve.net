---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description:
ogtype: article
images:
- /tools/{{.Name}}/img/thumbnail.jpg

html: {{ .Name }}.html
css: {{ .Name }}.scss
js: {{ .Name }}.js

tool:
  section1: 
  section2: 
  section3: 
  section4: Info
---