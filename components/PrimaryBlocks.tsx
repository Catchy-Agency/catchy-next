import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage } from '../gql/types/PrimaryPageBySlug'
import { Banner } from './blocks/Banner'
import { ClientSet } from './blocks/ClientSet'
import { ContentLinkSet } from './blocks/ContentLinkSet'
import { Formula } from './blocks/Formula'
import { ServiceSet } from './blocks/ServiceSet'
import { Team } from './blocks/Team'
import { TitleText } from './blocks/TitleText'
import { ViewMoreLink } from './blocks/ViewMoreLink'

export const PrimaryBlocks: FC<{
  blocks: PrimaryPageBySlug_primaryPage['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'BannerRecord':
          return <Banner block={block} />
        case 'ClientSetRecord':
          return <ClientSet block={block} />
        case 'ContentLinkSetRecord':
          return <ContentLinkSet block={block} />
        case 'FormulaRecord':
          return <Formula block={block} />
        case 'ServiceSetRecord':
          return <ServiceSet block={block} />
        case 'TeamRecord':
          return <Team block={block} />
        case 'TitleTextRecord':
          return <TitleText block={block} />
        case 'ViewMoreLinkRecord':
          return <ViewMoreLink block={block} />
        default:
          return null
      }
    })}
  </>
)
