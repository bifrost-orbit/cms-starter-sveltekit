<script lang="ts">
  import type { CmsLink } from '@bifrost-orbit-cms/sdk'
  import type { BlockProps } from './registry'

  type ActionFields = { label: string; link?: CmsLink | null }

  let { block }: BlockProps = $props()
  const fields = $derived(block.fields as ActionFields)
</script>

{#if fields.link?.href}
  <a data-cms-id={block.id} href={fields.link.href} target={fields.link.target ?? undefined}>{fields.label}</a>
{/if}
