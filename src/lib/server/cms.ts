import { createCmsClient, type CmsResolution } from '@bifrost-orbit-cms/sdk'
import { CMS_API_URL, CMS_DEFAULT_REGION, CMS_PREVIEW_KEY, CMS_PUBLIC_KEY } from '$app/env/private'

export const cms = createCmsClient({
  baseUrl: CMS_API_URL,
  apiKey: CMS_PUBLIC_KEY,
  previewKey: CMS_PREVIEW_KEY,
  defaultRegion: CMS_DEFAULT_REGION,
})

const MAX_AGE_MS = 60_000
const pages = new Map<string, { at: number; result: Promise<CmsResolution> }>()

export function resolvePage(path: string, preview: boolean): Promise<CmsResolution> {
  if (preview) return cms.resolve({ path, preview: true })
  const cached = pages.get(path)
  if (cached && Date.now() - cached.at < MAX_AGE_MS) return cached.result
  const result = cms.resolve({ path })
  pages.set(path, { at: Date.now(), result })
  result.catch(() => pages.delete(path))
  return result
}

export function purge(path?: string) {
  if (path) pages.delete(path)
  else pages.clear()
}
