import { ResponsiveImageType } from 'react-datocms'

export interface LinkData {
  id: string
  url: string | null
  title: string | null
  description: string | null
  callToAction: string | null
  image: ResponsiveImageType | null
}
