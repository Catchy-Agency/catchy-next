# Catchy Website

https://catchyagency.com/

## JAMstack architecture

### `data` — Headless CMS

- [DatoCMS](https://datocms.com/) (with [GraphQL API](https://www.datocms.com/docs/content-delivery-api))

### `view` — Frontend Site

- [Vercel](https://vercel.com/) — _hosting, deployment_
- [Next.js](https://nextjs.org/) — _build, server, routes_
- [React](https://reactjs.org/)
  - [Apollo GraphQL](https://www.apollographql.com/)
  - [Bulma CSS](https://bulma.io/)
- [TypeScript](https://www.typescriptlang.org/)

# Development

## DatoCMS API Token

This token is protected/private, to prevent unauthorized use of our API.

It's already added to Vercel for deployments, but we also need it locally for development:

1. Copy `.env.local.sample` to `.env.local` (will by ignored by git)
2. Update `DATOCMS_API_TOKEN` with our [Read-only API token](https://catchy.admin.datocms.com/admin/access_tokens/84520/edit) value

## NPM Scripts

```sh
# Installation
npm run i # install dependencies

# Development
npm run dev # start development server

# Type-checking
npm run types # start typescript compiler --watch
npm run types:once # run typescript compiler once

# Linting / Formatting
npm run format # run prettier
npm run lint # run eslint --fix
npm run fix # run format & lint

# Updating generated GraphQL types
npm run schema # download graphql schema & codegen types

# Manually building / deploying
npm run build # write production version to ./build
npm run start # start production server
npm run deploy:prod # deploy to prod
npm run deploy:dev # deploy to dev

# Debugging dev/build
npm run clean # removes .next cache
```

## Developer Environment

These tools help protect us from ourselves:

- TypeScript for type checking (`tsconfig.json`)
- Prettier for formatting (`.prettierrc`)
- ESLint for linting (`.eslintrc.js`)

They can be run from `npm` scripts, but it's easier if you install corresponding editor plugins for each.

This repo also has `.vscode` files to recommend & configure extensions, if you're using that editor:

- `.vscode/extensions.json`
- `.vscode/settings.json`

## Code Overview

- Next.js routes — `pages/*`
- React components — `components/*`
- Apollo queries — `gql/*`
- Bulma styles — `styles/*`

## Site Pages & Components

When changes involve both DatoCMS and the frontend site.

First, in the DatoCMS Admin UI:

1. Update/add models & blocks in `Settings`
   - _[Models](https://www.datocms.com/docs/content-modelling) — independent schemas (pages, posts, categories)_
   - _[Blocks](https://www.datocms.com/docs/content-modelling/blocks) — child components (sections, cards, rich text, images)_
   - _[When to use blocks instead of models?](https://www.datocms.com/docs/content-modelling/blocks#when-to-use-blocks-instead-of-models)_
1. Test your GraphQL queries in `API Explorer`

Then, on your computer:

1. Update/add GraphQL queries (in `gql/queries/*`)
1. Update/add TS GraphQL types (run `npm run schema`)
   - _downloads latest schema from DatoCMS_
   - _constructs types based on `gql/queries/*`_
   - _writes type definitions to `gql/types/*`_
1. Update/add corresponding `pages/*` and/or `components/*`

## Site Styles

The frontend site uses Bulma, plus a modified version of the [Darkly theme](https://jenil.github.io/bulmaswatch/darkly/).

Theme styles are in:

- `styles/theme_variables.scss`
- `styles/theme_overrides.scss`

Site-specific styles are in:

- `styles/global.scss`

## Social Media Trackers

- Social tracking tags (Google, LinkedIn, Twitter) are injected in `pages/_document.tsx`.
- Route changes in `pages/_app.tsx` trigger `util/gtag` tracking.

# Deployment

The frontend site is hosted as a Vercel project. It builds Next.js and deploys the results.

All `prod` builds and deployments should happen automatically.

## Automatically

Automatic deployments are triggered by integrations

- **GitHub**
  - Commit to `main` branch — builds & deploys to prod
  - Commit to other branches — builds & deploys to new preview
- **DatoCMS**
  - Publish/unpublish content — rebuilds `main` & deploys to prod URL
    - _This keeps the prod site up-to-date with CMS data_

## Manually / Locally

- Write build — `npm run build`
- Serve build — `npm run start`
- Deploy dev — `npm run deploy:dev`
- Deploy prod — `npm run deploy:prod`

# Previewing CMS updates

DatoCMS + Next.js support a "Preview" feature with [live real-time updates](https://github.com/datocms/react-datocms#live-real-time-updates), circumventing static site generation. This is accomplished via the DatoCMS `useQuerySubscription()` hook for fetching data, which will either work with SSG or live preview data, depending on a preview cookie.

The preview cookie is set/unset by two endpoints, using Next.js [built-in helpers](https://nextjs.org/docs/advanced-features/preview-mode):

- `/api/preview?slug=<destination path>`
- `/api/exit-preview`

We use the [Next.js Preview Links](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-nextjs-preview) plugin to generate a "Preview" button for content editors within the CMS, to view their unpublished updates.
