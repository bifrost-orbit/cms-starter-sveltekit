import type { Handle } from '@sveltejs/kit/hooks'
import { cms } from '#lib/server/cms.ts'
import { PREVIEW_COOKIE } from '#lib/server/preview.ts'

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.url.searchParams.get('preview')
  if (token && !event.url.pathname.startsWith('/api/')) {
    const target = new URLSearchParams({ preview: token, path: event.url.pathname })
    return new Response(null, { status: 307, headers: { location: `/api/preview?${target}` } })
  }

  const { valid } = await cms.checkPreview(event.cookies.get(PREVIEW_COOKIE))
  event.locals.preview = valid
  return resolve(event)
}
