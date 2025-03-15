---
title: React Leaflet on Next.js 15 (App router)
date: 2025-03-15T21:19:39+01:00
lastmod: 2025-03-15T20:55:13.814Z
draft: false
image: react-leaflet-on-next-15/img/thumbnail.jpg
author: XXL Steve
description: How to add a React Leaflet map to your Next.js 15 website
ogtype: article
images:
  - /blog/react-leaflet-on-next-15/img/thumbnail.jpg
tableOfContents:
  - h1: Prerequisites
  - h1: Map component
  - h1: Map page
  - h1: Marker icons
    h2:
      - t2: The quick fix
      - t2: The adding-a-custom-icon fix
tags:
  - Javascript
  - Typescript
  - React
categories:
  - Tutorial
---

{{< hanchor h="3" >}}
Prerequisites
{{< /hanchor >}}

Install the necessary packages:

```sh
npm install react@rc react-dom@rc leaflet
npm install react-leaflet@next
```

And add Typescript definitions:

```sh
npm install -D @types/leaflet
```

{{< hanchor h="3" >}}
Map component
{{< /hanchor >}}

The map will be placed in a client-side component.

`app/map/Map.tsx`:
```tsx {linenos=table}
"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[46.861505, 2.496587]}
      zoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.56295237, 1.46810716]}>
        <Popup>
          Hello world!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
```

{{< hanchor h="3" >}}
Map page
{{< /hanchor >}}

Now, import the component to your page **dynamically** with server-side rendering turned off ([`ssr: !!false`](https://github.com/PostHog/posthog/issues/26016#issuecomment-2629036307)):

`app/map/page.tsx`:
```tsx {linenos=table}
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), {
  loading: () => (
    <p>Loading map...</p>
  ),
  ssr: !!false,
});

export default function Page() {
  return (
    <article className={styles.article}>
        <div className={styles.container}>
          <DynamicMap />
        </div>
    </article>
  );
}
```

And finally, give the map a width and height other than 0 for it to appear:

`app/map/page.module.css`:
```css {linenos=table}
.article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1345px;
    margin: 2rem auto;
}

.container {
    width: 50vw;
    height: 60vh;
    display: flex;
}
.container > div {
    flex: 1;
}
```

{{< image src="img/map-page.jpg" caption="And you have a working map!" >}}

{{< hanchor h="3" >}}
Marker icons
{{< /hanchor >}}

It works, but the marker icons don't (idk why).

There are 2 solutions:

{{< hanchor h="4" >}}
The quick fix
{{< /hanchor >}}

Add `marker-icon.png` in your `public` folder under the same path as the URL path, so for instance it would be `public/map/marker-icon.png` in my example.

{{< hanchor h="4" >}}
The adding-a-custom-icon fix
{{< /hanchor >}}

Or a better way to fix it is by adding a custom marker icon to your markers:

`app/map/Map.tsx`:
```tsx {linenos=table}
import L from "leaflet";
/* ... */

const Map = () => {
    const markerIcon = new L.Icon({
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
        iconSize: [22, 32],
        shadowSize:   [41, 41], // size of the shadow
        iconAnchor:   [22, 64], // point of the icon which will correspond to marker's location
        shadowAnchor: [24, 72],  // the same for the shadow
        popupAnchor:  [-11, -62] // point from which the popup should open relative to the iconAnchor
    });
    return (
    {/* ... */}
      <Marker position={[43.56295237, 1.46810716]} icon={ markerIcon }>
        <Popup>
          Hello world!
        </Popup>
      </Marker>
    {/* ... */}
    );
};
/* ... */
```

Then add 

{{< image src="img/marker-icon.png" caption="marker-icon.png" >}}

and

{{< image src="img/marker-shadow.png" caption="marker-shadow.png" >}}

to the `public` folder.

&nbsp;

Or you can use the default marker [icon](https://github.com/Leaflet/Leaflet/blob/main/src/images/marker.svg) and [shadow](https://github.com/Leaflet/Leaflet/blob/main/src/images/marker-shadow.svg) from leaflet.

{{< image src="img/map-marker-icons.jpg" caption="Custom map marker icons!" >}}
