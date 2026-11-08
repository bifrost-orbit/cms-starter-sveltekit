<script lang="ts">
  import { dev } from '$app/env'
  import type { BlockProps } from './registry'

  let { block }: BlockProps = $props()
</script>

{#if dev}
  <div data-cms-id={block.id} style="border: 1px dashed; padding: 1rem">
    No component for <code>{block.type}</code> yet
  </div>
{/if}
