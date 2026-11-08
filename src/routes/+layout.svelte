<script lang="ts">
  import favicon from '#lib/assets/favicon.svg'
  import type { LayoutProps } from './$types'

  let { data, children }: LayoutProps = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  {#if data.preview}
    <script src={data.bridge} defer></script>
  {/if}
</svelte:head>

{@render children()}
