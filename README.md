# CMS Orbit starter for SvelteKit

A SvelteKit website, rendered on the server with the Node adapter, that reads its pages from [CMS Orbit](https://bifrostorbit.com/products/cms-orbit/), the headless CMS in Bifröst Orbit. It is the finished project from the [SvelteKit quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-sveltekit/): every published page at its own address, your own Svelte components for the blocks editors place, drafts in the live preview, and a signed webhook that clears cached pages when editors publish.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/bifrost-orbit/cms-starter-sveltekit?quickstart=1)

## Set up

1. **Create your copy.** Select **Use this template** on GitHub, or run `gh repo create my-website --template bifrost-orbit/cms-starter-sveltekit --private --clone`.
2. **Add your settings.** Copy `.env.example` to `.env` and fill in the API address, keys and region from **Configuration › API keys** and **Configuration › Environments** in CMS Orbit.
3. **Run it.** Run `npm install`, then `npm run dev`, and open `http://localhost:5173`.

## What's inside

| File | What it does |
| --- | --- |
| `src/env.ts` | The settings, all private, so the browser never sees a key |
| `src/lib/server/cms.ts` | The CMS Orbit client and a 60-second page cache |
| `src/routes/[...path]/` | One route for every page: redirects, not found, gone, title and description |
| `src/lib/blocks/` | The components, `hero`, `action`, `featureGrid` and `featureItem`, and the registry that picks one for each block |
| `src/hooks.server.ts`, `src/lib/server/preview.ts`, `src/routes/api/preview/` | Drafts in the editor's live preview |
| `src/routes/api/cms-webhook/+server.ts` | The signed webhook that clears cached pages when editors publish |

## Make it yours

- Draw your components in `src/lib/blocks/` and register them in `src/lib/blocks/registry.ts`, using the component keys from your own space. Run `npm run cms:types` to write types for your space's components to `src/lib/cms-types.ts`.
- For the live preview, set **Preview URL** in the space's **Settings**. For refresh on publish, add a webhook to `https://your-website/api/cms-webhook` and put its secret in `CMS_WEBHOOK_SECRET`. The [quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-sveltekit/) explains both.
- To run it in production, run `npm run build`, then `node --env-file=.env build`, or `npm start` when the settings are already in the environment. Any adapter with a server works; a static build cannot preview drafts or receive webhooks.

Needs Node.js 20 or later and `@bifrost-orbit-cms/sdk` 0.12.

## Licence

MIT. See [LICENSE](LICENSE).
