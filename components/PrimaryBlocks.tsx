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
          return <Banner key={block.id} block={block} />
        case 'ClientSetRecord':
          return <ClientSet key={block.id} block={block} />
        case 'ContentLinkSetRecord':
          return <ContentLinkSet key={block.id} block={block} />
        case 'FormulaRecord':
          return <Formula key={block.id} block={block} />
        case 'ServiceSetRecord':
          return <ServiceSet key={block.id} block={block} />
        case 'TeamRecord':
          return <Team key={block.id} block={block} />
        case 'TitleTextRecord':
          return <TitleText key={block.id} block={block} />
        case 'ViewMoreLinkRecord':
          return <ViewMoreLink key={block.id} block={block} />
        default:
          return null
      }
    })}
  </>
)
