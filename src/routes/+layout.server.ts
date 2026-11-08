import { cms } from '#lib/server/cms.ts'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals }) => ({
  preview: locals.preview,
  bridge: `${cms.origin}/bridge.js`,
})
