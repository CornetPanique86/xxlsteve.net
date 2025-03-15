---
title: Search Component and Page for NextJS App Router
date: 2025-03-15T12:47:17+01:00
lastmod: 2025-03-15T16:32:58.457Z
draft: false
image: search-component-and-page-for-nextjs/img/thumbnail.jpg
author: XXL Steve
description: null
ogtype: article
images:
    - /blog/search-component-and-page-for-nextjs/img/thumbnail.jpg
tableOfContents:
    - h1: Getting the search results
      h2:
          - t2: Install Fuse
          - t2: Search function
    - h1: Search component
      h2:
          - t2: api/search
          - t2: Add component to website
    - h1: Search page
    - h1: Configuring fuzzy search
    - h1: Styling
tags:
    - Javascript
    - Typescript
    - React
categories:
    - Tutorial
---

Build a search component in the navigation bar that updates results on user input, as well as a search page to show all results!

{{< imgslider "finalResult" >}}
  {{< image slider="true" src="img/styled-page.jpg" caption="Search page" >}}
  {{< image slider="true" src="img/styled-search.jpg" caption="Search component in navigation bar" >}}
{{< /imgslider >}}

There are two parts to this project:
- the search component, which is embedded in the navigation bar (or wherever you want to put it), that fetches the search results from an API: it's client-side
- the search page, like `/search` which is server-side

So first of all, let's make the search function.

{{< hanchor h="3" >}}
Getting the search results
{{< /hanchor >}}

This function is responsible for searching a query in the dataset, and returning the results.

Now, you can simply iterate through your data and use `content.includes(query)` to keep it simple, but for slightly more advanced search yet just as lightweight, you can use [Fuse.js](https://www.fusejs.io), a very popular library for fuzzy search; meaning typos will still give you search results.

{{< hanchor h="4" >}}
Install Fuse
{{< /hanchor >}}

In your root directory, enter the command:

```sh
npm install fuse.js
```

It should now be installed in your project.

{{< hanchor h="4" >}}
Search function
{{< /hanchor >}}

`lib/search.ts`:

```ts {linenos=table}
import Fuse from "fuse.js";

const fuse = new Fuse(dataset, {
    keys: [
      "metadata.title",
      "metadata.author",
      "content"
    ],
    threshold: 0.3
});

export function getSearchResults(
  text: string | string[] | null | undefined, /* search query */
  limit: number = 15, /* max number of results */
  start: number = 0 /* start index */
) {
    if (!text || text.toString().trim().length < 3 || text.toString().trim().length > 255) return { results: [], totalNumber: 0 };

    const query = text.toString().trim();
    const result = fuse.search(query);
    return {
      results: result
        .slice(start, start + limit)
        .map((result) => ({
          slug: result.item.slug,
          metadata: result.item.metadata
        })),
      totalNumber: result.length
    };
}
```

`limit` and `start` arguments will be useful for pagination later on, but also assure that only a maximum of 15 results are sent to avoid too large responses.

Your dataset is a list containing your data. For a blog for example, it could be:

```json {linenos=table}
[
    {
        "slug": "first-post",
        "metadata": {
            "title": "First Post",
            "date": "2020-01-01",
            "author": "John Doe"
        },
        "content": "This is the first post."
    },
    {
        "slug": "second-post",
        "metadata": {
            "title": "Second Post",
            "date": "2020-01-02",
            "author": "Jane Doe"
        },
        "content": "Lorem ipsum dolor sit amet."
    }
]
```

The keys correspond to the object keys of your data that you'd like Fuse to search in. You can apply different weights to them:

```ts {linenos=table}
const fuse = new Fuse(dataset, {
    keys: [
      {
        name: "metadata.title",
        weight: 3
      },
      {
        name: "metadata.author",
        weight: 2
      },
      "content"
    ],
    threshold: 0.3
});
```

Currently, the fuse configuration has a `threshold` value of `3` which means how strict the search is regarding to typos.

Later on, we will change the config to fix a problem.

{{< hanchor h="3" >}}
Search component
{{< /hanchor >}}

Now, let's write the search component.
We will be using the package "use-debounce" to send requests to the API with a cooldown, instead of every time the input changes:

```sh
npm i use-debounce
```

`app/Search.tsx`:

```tsx {linenos=table,hl_lines=[1,17,23,39]}
"use client";

import { useState } from "react";
import Form from "next/form";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";

type TSearchResult = {
    results: { slug: string, metadata: { title: string, date: string, author: string } }[],
    totalNumber: number
}

export default function Search() {
    const [showSearchbar, setShowSearchbar] = useState(false);
    const [searchResults, setSearchResults] = useState<TSearchResult>({ results: [], totalNumber: 0 });

    const handleInputChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim();
        if (query.length === 0) {
            setSearchResults({ results: [], totalNumber: 0 });
            return;
        }
        fetch(`/api/search?query=${query}&limit=5`)
            .then(res => {
                res.json().then(parsedValue => {
                    setSearchResults(parsedValue);
                });
            });
    }, 300);

    return (
        <>
            <li title="Search">
                <button type="button" onClick={() => setShowSearchbar(!showSearchbar)}>🔎</button>
            </li>
            {showSearchbar && 
                <div>
                    <div>
                        <Form action="/search" role='search'>
                            <label htmlFor="navSearch" title="Search">🔎</label>
                            <input id="navSearch" name="query" type="text" maxLength={255} placeholder="Search..."
                                onChange={handleInputChange}
                            />
                            <button type="submit">SEARCH</button>
                        </Form>
                        <ul>
                            {searchResults.totalNumber > 0 &&
                                searchResults.results.map((result, index) => (
                                    <li key={index}>
                                        <Link href={result.slug}>
                                            <h4>
                                                {result.metadata.title}
                                            </h4>
                                        </Link>
                                    </li>
                                ))
                            }
                            {searchResults.totalNumber > searchResults.results.length &&
                                <li>
                                    +{searchResults.totalNumber - searchResults.results.length} results
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    );
}
```

- `"use client";`: it's a client-side component
- `handleInputChange`: it uses `useDebouncedCallback` with a `300ms` cooldown
- `fetch("/api/search?query=${query}&limit=5")` every time input changes, it makes a call to the search API which we are about to write
- `<Form action="/search" role='search'>`: it uses `Next/Form`, which will move the user to `/search?query=<their query>` if they press <kbd>Enter</kbd> or click the submit button

{{< hanchor h="4" >}}
api/search
{{< /hanchor >}}

Now, let's define the search API:

`app/api/search/route.ts`:

```ts {linenos=table}
import { getSearchResults } from "@/lib/search";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const limit = parseInt(url.searchParams.get("limit") ?? "");

  return Response.json(getSearchResults(query, (limit && !Number.isNaN(limit)) ? limit : undefined));
}
```

{{< hanchor h="4" >}}
Add component to website
{{< /hanchor >}}

Finally, let's include the search component in our website, for example:

`app/layout.tsx`:

```tsx {linenos=table}
import Search from "./Search";
/* ... */
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <Search />
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
/* ... */
```

And there you go, you have a working - albeit ugly - search component!

{{< image src="img/working-search-component.jpg" caption="Search in the home page" >}}

{{< hanchor h="3" >}}
Search page
{{< /hanchor >}}

Located at `example.com/search`, the search page may be entered every time the user presses <kbd>Enter</kbd> in the search bar or clicks on the "Search" submit button.

It's a server-side component, so it doesn't require the API as it directly calls the `getSearchResults` function.

`api/search/page.tsx`:

```tsx {linenos=table}
import Form from "next/form";
import { getSearchResults } from "@/lib/search";
import Link from "next/link";

export default async function SearchPage({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const { query, page } = await searchParams;
    const currentPage = page ? (parseInt(page.toString()) || 1) : 1;
    const searchResults = getSearchResults(query, undefined, (currentPage - 1) * 15);

    return (
        <article>
            <h1>Search results</h1>
            <section>
                <div>
                    <Form action="/search" role='search'>
                        <label htmlFor="search" title="Search">🔎</label>
                        <input id="search" name="query" type="text" maxLength={255} defaultValue={query} placeholder="Search..."/>
                        <button type="submit">Search</button>
                    </Form>
                    <p>
                        {searchResults.totalNumber === 0 
                            ? <>Found no results for <strong>{query}</strong>.</>
                            : <>Found {searchResults.totalNumber} results for <strong>{query}</strong>.</>
                        }
                    </p>
                </div>
                <ul>
                    {searchResults.results.map((result, index) => (
                        <li key={index}>
                            <Link href={result.slug}>
                                <h4>
                                    {result.metadata.title}
                                </h4>
                                <p>by {result.metadata.author} on {result.metadata.date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    {searchResults.totalNumber>0 && `Page ${currentPage}/${Math.ceil(searchResults.totalNumber / 15)} `}
                    {currentPage > 1 && <Link href={`/search?query=${query}&page=${currentPage - 1}`}>Previous</Link>}
                    {searchResults.totalNumber > currentPage * 15 && 
                        <> | <Link href={`/search?query=${query}&page=${currentPage + 1}`}>Next</Link></>
                    }
                </p>
            </section>
        </article>
    )
}
```

- the page gets the initial query from `searchParams`, meaning the text after `/search?query=`
- search pagination uses the limit of results (set to 15) to determine how many pages there are

You can also add a dynamic title to the page:

```tsx {linenos=table}
import { Metadata } from "next";

export async function generateMetadata({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }): Promise<Metadata> {
    const query = (await searchParams).query;
    const page = (await searchParams).page;
    return {
        title: (page ? `Page ${page}: ` : "") + (query
            ? "Searching " + query.toString().trim()
            : "Search") + " | My Website"
    }
}
```

And you're done!

{{< image src="img/working-search-page.jpg" caption="Head over to /search?query=lorem" >}}

{{< hanchor h="3" >}}
Configuring fuzzy search
{{< /hanchor >}}

You may try searching a specific word that only appears once deep inside one of your articles. And, for some reason, Fuse.js does not find anything.

The reason is that with Fuse's default configuration, it will only search in the first 60 characters of every key's value ([why?](https://github.com/krisk/Fuse/issues/569#issuecomment-1120314318)).

If searching everywhere is important to you, you can set `ignoreLocation=true`. However, Fuse not being optimized for large fields of text, it could slow down search.

If so, you could try out other search algorithms like [uFuzzy](https://github.com/leeoniya/uFuzzy).

{{< hanchor h="3" >}}
Styling
{{< /hanchor >}}

All that's left to do is styling.

Below you can find some basic css to achieve this:

{{< image src="img/styled-page.jpg" caption="/search?query=lorem" >}}

{{< hanchor h="4" >}}
Search component & navigation
{{< /hanchor >}}

{{< spoiler "app/layout.tsx" >}}
```tsx {linenos=table}
<nav>
    <ul className="navbar">
        <li>
            <Link href="/">Home</Link>
        </li>
        <Search />
    </ul>
</nav>
```
{{< /spoiler >}}

{{< spoiler "app/Search.tsx" >}}
```tsx {linenos=table}
<>
    <li title="Search" className="searchButton">
        <button type="button" onClick={() => setShowSearchbar(!showSearchbar)}>🔎</button>
    </li>
    {showSearchbar && 
        <div className="searchbar">
            <div className="searchbarContainer">
                <Form action="/search" role='search'>
                    <label htmlFor="navSearch" title="Search">🔎</label>
                    <input id="navSearch" name="query" type="text" maxLength={255} placeholder="Search..."
                        onChange={handleInputChange}
                    />
                    <button type="submit">SEARCH</button>
                </Form>
                <ul>
                    {searchResults.totalNumber > 0 &&
                        searchResults.results.map((result, index) => (
                            <li key={index}>
                                <Link href={result.slug}>
                                    <h4>
                                        {result.metadata.title}
                                    </h4>
                                </Link>
                            </li>
                        ))
                    }
                    {searchResults.totalNumber > searchResults.results.length &&
                        <li>
                            +{searchResults.totalNumber - searchResults.results.length} results
                        </li>
                    }
                </ul>
            </div>
        </div>
    }
</>
```
{{< /spoiler >}}

{{< spoiler "app/globals.css" >}}
```css {linenos=table}
.navbar {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--foreground);
  color: var(--background);
  font-size: 1.2rem;
  position: relative;
}

.searchButton button {
  appearance: none;
  border: none;
  background: var(--background);
  color: var(--foreground);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: inherit;
}

.searchbar {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--foreground);
  color: var(--background);
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.searchbarContainer {
  width: min(100%, 500px);
  position: relative;
}
.searchbarContainer form {
  position: relative;
  display: flex;
  gap: .7rem;
}
.searchbarContainer label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: .7rem;
  cursor: text;
}
.searchbarContainer input {
  appearance: none;
  border: 2px solid gray;
  box-sizing: border-box;
  max-width: 100%;
  padding: .9rem;
  padding-left: 2.8rem;
  transition: all 0.15s ease-in-out;
  background-color: inherit;
  width: 100%;
  color: inherit;
}
.searchbarContainer input:focus {
  border-color: var(--background);
  background-color: #d3d3d3;
  outline: none;
}
.searchbarContainer button {
  background-color: var(--background);
  color: var(--foreground);
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
  border: none;
  padding: .8rem;
  letter-spacing: -1px;
  border-radius: 5px;
}
```
{{< /spoiler >}}

{{< hanchor h="4" >}}
Search page
{{< /hanchor >}}

{{< spoiler "app/search/page.tsx" >}}
```tsx {linenos=table}
import styles from "./page.module.css";
/* ... */
<article className={styles.searchPage}>
    <h1>Search results</h1>
    <section className={styles.searchSection}>
        <div className={styles.searchbarContainer}>
            <Form action="/search" role='search'>
                <label htmlFor="search" title="Search">🔎</label>
                <input id="search" name="query" type="text" maxLength={255} defaultValue={query} placeholder="Search..."/>
                <button type="submit">Search</button>
            </Form>
            <p>
                {searchResults.totalNumber === 0 
                    ? <>Found no results for <strong>{query}</strong>.</>
                    : <>Found {searchResults.totalNumber} results for <strong>{query}</strong>.</>
                }
            </p>
        </div>
        <ul className={styles.searchResults}>
            {searchResults.results.map((result, index) => (
                <li key={index} className={styles.searchResult}>
                    <Link href={result.slug}>
                        <h4>
                            {result.metadata.title}
                        </h4>
                        <p>by {result.metadata.author} on {result.metadata.date}</p>
                    </Link>
                </li>
            ))}
        </ul>
        <p>
            {searchResults.totalNumber>0 && `Page ${currentPage}/${Math.ceil(searchResults.totalNumber / 15)} `}
            {currentPage > 1 && <Link href={`/search?query=${query}&page=${currentPage - 1}`}>Previous</Link>}
            {searchResults.totalNumber > currentPage * 15 && 
                <> | <Link href={`/search?query=${query}&page=${currentPage + 1}`}>Next</Link></>
            }
        </p>
    </section>
</article>
```
{{< /spoiler >}}

{{< spoiler "app/search/page.module.css" >}}
```css {linenos=table}
.searchPage {
    max-width: 700px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem
}
.searchSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.searchbarContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
.searchbarContainer form {
  position: relative;
  display: flex;
  gap: .7rem;
}
.searchbarContainer label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: .7rem;
  cursor: text;
}
.searchbarContainer input {
  appearance: none;
  border: 2px solid gray;
  box-sizing: border-box;
  max-width: 100%;
  padding: .9rem;
  padding-left: 2.8rem;
  transition: all 0.15s ease-in-out;
  background-color: var(--foreground);
  width: 100%;
  color: var(--background);
}
.searchbarContainer input:focus {
  outline: none;
}
.searchbarContainer button {
  background: none;
  color: inherit;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
  border: 1.5px solid var(--foreground);
  padding: .8rem;
  letter-spacing: -1px;
  border-radius: 20px;
}


.searchResults {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}
.searchResult {
    padding: 1rem;
    border-radius: 5px;
    border: 1.5px solid var(--foreground);
}
```
{{< /spoiler >}}

