import { redirect } from '@sveltejs/kit'
import { PREVIEW_COOKIE, safePath } from '#lib/server/preview.ts'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ url, cookies }) => {
  cookies.delete(PREVIEW_COOKIE, { path: '/', secure: true, sameSite: 'none' })
  redirect(307, safePath(url.searchParams.get('path')))
}
