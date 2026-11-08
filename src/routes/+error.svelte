<script lang="ts">
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</title>
</svelte:head>

<main>
  <h1>{page.status === 404 ? 'We could not find that page' : 'Something went wrong'}</h1>
  <p><a href="/">Back to the home page</a></p>
</main>
