export const GA_TRACKING_ID = 'UA-75221843-1'

export const pageview = (path: string): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  const gtag: (...args: any[]) => void = (window as any).gtag
  gtag && gtag('config', GA_TRACKING_ID, { page_path: path })
}
