# mjones.network

[![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=mjones.network)](https://mjones.network) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

Next.js website hosted on Vercel, using Notion as a CMS.

Based on [nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit).

It uses Notion as a CMS, fetching content from Notion and then uses [Next.js](https://nextjs.org/) and [react-notion-x](https://github.com/NotionX/react-notion-x) to render everything.

The site is then deployed to [Vercel](http://vercel.com).

## Features

- Setup only takes a few minutes ([single config file](./site.config.js)) 💪
- Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Next.js / TS / React / Notion
- Excellent page speeds
- Sexy LQIP image previews
- Embedded GitHub comments
- Automatic open graph images
- Automatic pretty URLs
- Automatic table of contents
- Full support for dark mode
- Quick search via CMD+P just like in Notion
- Responsive for desktop / tablet / mobile
- Optimized for Next.js and Vercel

## Setup

**All config is defined in [site.config.js](./site.config.js).**

1. Fork / clone this repo
2. Change a few values in [site.config.js](./site.config.js)
3. `yarn`
4. `yarn dev` to test locally
5. Merge to master to deploy to Vercel
