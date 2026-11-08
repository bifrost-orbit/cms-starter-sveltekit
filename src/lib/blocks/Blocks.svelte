<script lang="ts">
  import type { CmsComponent } from '@bifrost-orbit-cms/sdk'
  import Fallback from './Fallback.svelte'
  import { registry } from './registry'

  let { blocks = [] }: { blocks?: CmsComponent[] } = $props()
</script>

{#each blocks as block (block.id)}
  {@const Block = registry[block.type] ?? Fallback}
  <Block {block} />
{/each}
