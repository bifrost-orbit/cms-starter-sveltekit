import { verifyWebhook } from '@bifrost-orbit-cms/sdk'
import { CMS_WEBHOOK_SECRET } from '$app/env/private'
import { purge } from '#lib/server/cms.ts'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  if (!CMS_WEBHOOK_SECRET) return new Response(null, { status: 401 })

  const result = await verifyWebhook({
    body: await request.text(),
    timestamp: request.headers.get('x-orbit-timestamp'),
    signature: request.headers.get('x-orbit-signature'),
    secret: CMS_WEBHOOK_SECRET,
  })
  if (!result.valid) return new Response(null, { status: 401 })

  const { event, data } = result
  if (event === 'webhook.test') return new Response(null, { status: 204 })

  const url = typeof data.url === 'string' ? data.url : null
  const moved = typeof data.previousUrl === 'string' && data.previousUrl !== url
  if (event.startsWith('content.') && url && !moved) purge(url)
  else purge()

  return new Response(null, { status: 204 })
}
