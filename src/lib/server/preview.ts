export const PREVIEW_COOKIE = 'cms_preview'

export function safePath(path: string | null): string {
  return path && path.startsWith('/') && !path.startsWith('//') && !path.includes('\\') ? path : '/'
}
