export const prefixByTypename = {
  BlogPostRecord: '/insights/',
  CaseStudyRecord: '/work/',
  ContentPageRecord: '/',
  DownloadPageRecord: '/downloads/',
  PrimaryPageRecord: '/',
} as const;

export const reservedPaths = new Set(['/insights', '/work']);
