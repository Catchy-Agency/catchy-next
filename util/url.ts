export const prefixByTypename = {
  BlogPostRecord: '/blog/',
  CaseStudyRecord: '/work/',
  ContentPageRecord: '/',
  DownloadPageRecord: '/downloads/',
  PrimaryPageRecord: '/',
} as const

export const reservedPaths = new Set(['/blog', '/work'])
