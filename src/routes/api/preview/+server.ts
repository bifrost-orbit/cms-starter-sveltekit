import { error, redirect } from '@sveltejs/kit'
import { cms } from '#lib/server/cms.ts'
import { PREVIEW_COOKIE, safePath } from '#lib/server/preview.ts'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url, cookies }) => {
  const token = url.searchParams.get('preview') ?? url.searchParams.get('token')
  if (!token) error(400, 'A preview token is required')
  const preview = await cms.checkPreview(token)
  if (!preview.valid) error(401, 'That preview link is invalid or has expired')

  cookies.set(PREVIEW_COOKIE, token, { path: '/', httpOnly: true, secure: true, sameSite: 'none', maxAge: 60 * 60 })
  redirect(307, safePath(url.searchParams.get('path') ?? preview.path))
}
