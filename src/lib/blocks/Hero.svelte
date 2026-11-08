<script lang="ts">
  import Blocks from './Blocks.svelte'
  import type { BlockProps } from './registry'

  type HeroFields = { eyebrow?: string; heading: string; description?: string }

  let { block }: BlockProps = $props()
  const fields = $derived(block.fields as HeroFields)
  const actions = $derived([...(block.children.primaryAction ?? []), ...(block.children.secondaryAction ?? [])])
</script>

<section data-cms-id={block.id} class="hero">
  {#if fields.eyebrow}<p>{fields.eyebrow}</p>{/if}
  <h1>{fields.heading}</h1>
  {#if fields.description}{@html fields.description}{/if}
  <Blocks blocks={actions} />
</section>
