import { defineEnvVars } from '@sveltejs/kit/env'

const optional = (value: string | undefined) => value || undefined

export const variables = defineEnvVars({
  CMS_API_URL: {},
  CMS_PUBLIC_KEY: {},
  CMS_PREVIEW_KEY: { schema: optional },
  CMS_WEBHOOK_SECRET: { schema: optional },
  CMS_DEFAULT_REGION: {},
})
