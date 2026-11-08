<script lang="ts">
  import Blocks from '#lib/blocks/Blocks.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
  const page = $derived(data.page)
</script>

<svelte:head>
  <title>{page.seo.title}</title>
  <meta name="description" content={page.seo.description} />
  <link rel="canonical" href={page.seo.canonical} />
</svelte:head>

<main>
  <Blocks blocks={page.components} />
</main>
