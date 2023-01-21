[Tuto Hugo](https://cloudcannon.com/community/learn/hugo-tutorial)

Les shortcodes pour les markdown:
[Ceux intégrés dans Hugo (youtube, etc)](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)



Image gallery (custom du tuto): {{< gallery figures=false >}}

^ pas conseillé...


header_meta archive:

{{ with .Title }}
  <title>{{ . }} | {{ site.Title }}</title>
  <meta property="og:title" content="{{ . }} | {{ site.Title }}" />
  <meta property="twitter:title" content="{{ . }} | {{ site.Title }}">
{{ else }}
  <title>{{ site.Title }}</title>
  <meta property="og:title" content="{{ site.Title }}" />
  <meta property="twitter:title" content="{{ site.Title }}">
{{ end }}
<link rel="icon" type="image/x-icon" href="/favicon.ico">
{{ with .Description }}
  <meta name="og:description" content="{{ . }}">
  <meta name="description" content="{{ . }}">
  <meta property="twitter:description" content="{{ . }}">
{{ end }}
{{ with $.Params.ogtype }}
  <meta name="og:type" content="{{ . }}">
{{ end }}
{{ with $.Params.ogimage }}
  <meta name="og:image" content="xxlsteve.net{{ . }}">
  <meta property="twitter:image" content="xxlsteve.net{{ . }}">
{{ else }}
<meta name="og:image" content="xxlsteve.net/favicon.png">
<meta property="twitter:image" content="xxlsteve.net/favicon.png">
{{ end }}
<meta name="og:url" content="{{ .Permalink }}">
<meta property="twitter:url" content="{{ .Permalink }}">