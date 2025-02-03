# Catchy Website

https://catchyagency.com/

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

# Overview

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

## Frontend Code

- Next.js routes/pages — `pages/*`
- React components — `components/*`
- Apollo queries — `gql/*`
- Bulma styles — `styles/*`

# Initial Setup

## DatoCMS API Token

This token is protected/private, to prevent unauthorized use of our API.

It's already added to Vercel for deployments, but we also need it locally for development:

1. Copy `.env.local.sample` to `.env.local` (will by ignored by git)
2. Update `DATOCMS_API_TOKEN` with our [Read-only API token](https://catchy.admin.datocms.com/admin/access_tokens/84520/edit) value
3. Update `DATOCMS_API_ENVIRONMENT` with the correct environment name value for development

## Node.js & NPM versions

The `node` and `npm` versions for this project are defined by the `engines` field in `package.json`. Their use is enforced with `engine-strict=true` in `.npmrc`. This helps prevent compatibility issues with the Next.js build.

If you're running this locally on your machine, it's recommended to use a tool like `nvm` or `n` to help manage installed versions.

## Dev Environment

These tools help protect us from ourselves:

- [TypeScript](https://www.typescriptlang.org/) for type checking (`tsconfig.json`)
- [Prettier](https://prettier.io/) for formatting (`.prettierrc`)
- [ESLint](https://eslint.org/) for linting (`.eslintrc.js`)

They can be run from `npm` scripts, but it's easier if you install corresponding editor plugins for each.

This repo also has `.vscode` files to [recommend](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) & [configure](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) extensions, if you're using that editor:

- `.vscode/extensions.json`
- `.vscode/settings.json`

# Common Workflows

## Updating Site Pages & Components

These changes involve both DatoCMS and the frontend site.

First, in the [DatoCMS Admin UI](https://catchy.admin.datocms.com/):

1. Update models & blocks in `Settings`
   - _[Models](https://www.datocms.com/docs/content-modelling) — independent schemas (pages, posts, categories)_
   - _[Blocks](https://www.datocms.com/docs/content-modelling/blocks) — child components (sections, cards, rich text, images)_
   - _[When to use blocks instead of models?](https://www.datocms.com/docs/content-modelling/blocks#when-to-use-blocks-instead-of-models)_
   - _Note: Some of our models could've been blocks, but [they didn't have Nested Blocks](https://community.datocms.com/t/nested-blocks/283/37) when we created them. Newer additions [do leverage Nested Blocks](https://community.datocms.com/t/nested-blocks/283/58) (yay!). Someday, it would be nice to take the time and fully migrate over._
1. Test your GraphQL queries in `API Explorer`

Then, on your computer:

1. Update GraphQL queries (in `gql/queries/*`)
1. Update TS GraphQL types (run `npm run schema`)
   - _downloads latest schema from DatoCMS_
   - _constructs types based on `gql/queries/*`_
   - _writes type definitions to `gql/types/*`_
1. Update corresponding `pages/*` and/or `components/*`

## Updating Site Styles

The frontend site uses Bulma, plus a modified version of the [Darkly theme](https://jenil.github.io/bulmaswatch/darkly/).

Theme styles are in:

- `styles/theme_variables.scss`
- `styles/theme_overrides.scss`

Site-specific styles are in:

- `styles/global.scss`

## Updating Social Media Trackers

- Social tracking tags (Google, LinkedIn, Twitter) are injected in `pages/_document.tsx`.
- Route changes in `pages/_app.tsx` trigger `util/gtag.ts` tracking.

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

- Write build locally — `npm run build`
- Serve build locally — `npm run start`
- Deploy local to dev — `npm run deploy:dev`
- Deploy local to prod — `npm run deploy:prod`

# Previewing CMS updates

DatoCMS + Next.js support a "Preview" feature with [live real-time updates](https://github.com/datocms/react-datocms#live-real-time-updates), circumventing static site generation. This is accomplished via the DatoCMS `useQuerySubscription()` hook for fetching data, which will either work with SSG or live preview data, depending on a preview cookie.

The preview cookie is set/unset by two endpoints, using Next.js [built-in helpers](https://nextjs.org/docs/advanced-features/preview-mode):

- `/api/preview?slug=<destination path>`
- `/api/exit-preview`

We use the [Next.js Preview Links](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-nextjs-preview) plugin to generate a "Preview" button for content editors within the CMS, to view their unpublished updates.

# Updated to Node 22 - 02/03/2025

Vercel dropped support for Node 16, in order for us to the site to the latest version we had to deprecate and remove Apollo CLI as they don't have a valid option for newer versions of Node.

> [!IMPORTANT]
> This site needs to replace Apollo CLI if changes are needed.
