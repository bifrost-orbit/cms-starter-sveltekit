<script lang="ts">
  import type { CmsLink } from '@bifrost-orbit-cms/sdk'
  import type { BlockProps } from './registry'

  type FeatureItemFields = { title: string; body?: string; link?: CmsLink | null }

  let { block }: BlockProps = $props()
  const fields = $derived(block.fields as FeatureItemFields)
</script>

<article data-cms-id={block.id}>
  <h3>{fields.title}</h3>
  {#if fields.body}<p>{fields.body}</p>{/if}
  {#if fields.link?.href}<a href={fields.link.href}>Read more</a>{/if}
</article>
