<script lang="ts">
  import Blocks from './Blocks.svelte'
  import type { BlockProps } from './registry'

  type FeatureGridFields = { heading: string; intro?: string }

  let { block }: BlockProps = $props()
  const fields = $derived(block.fields as FeatureGridFields)
</script>

<section data-cms-id={block.id} class="feature-grid">
  <h2>{fields.heading}</h2>
  {#if fields.intro}<p>{fields.intro}</p>{/if}
  <div class="grid">
    <Blocks blocks={block.children.items} />
  </div>
</section>
