import { error, redirect } from '@sveltejs/kit'
import { resolvePage } from '#lib/server/cms.ts'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, locals }) => {
  const result = await resolvePage('/' + params.path, locals.preview)

  if (result.kind === 'redirect') redirect(result.status, result.to)
  if (result.kind === 'gone') error(410, 'This page has been removed')
  if (result.kind === 'notFound') error(404, 'Page not found')

  return { page: result.page }
}
