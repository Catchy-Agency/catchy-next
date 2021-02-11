import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks } from '../gql/types/PrimaryPageBySlug'
import { ContentPostBySlug_contentPost_blocks } from '../gql/types/ContentPostBySlug'
import { Banner } from './blocks/Banner'
import { ClientSet } from './blocks/ClientSet'
import { ContentLinkSet } from './blocks/ContentLinkSet'
import { Formula } from './blocks/Formula'
import { ServiceSet } from './blocks/ServiceSet'
import { Team } from './blocks/Team'
import { TitleText } from './blocks/TitleText'
import { ViewMoreLink } from './blocks/ViewMoreLink'
import { ImageSet } from './blocks/ImageSet'
import { RichText } from './blocks/RichText'
import { Title } from './blocks/Title'
import { VideoBlock } from './blocks/VideoBlock'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ColumnSet } from './blocks/ColumnSet'

export const BlockSections: FC<{
  blocks: ReadonlyArray<
    | PrimaryPageBySlug_primaryPage_blocks
    | ContentPostBySlug_contentPost_blocks
    | null
  >
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
        case 'ButtonExternalRecord':
          return <ButtonExternal key={block.id} block={block} />
        case 'ButtonInternalRecord':
          return <ButtonInternal key={block.id} block={block} />
        case 'ColumnSetRecord':
          return <ColumnSet key={block.id} block={block} />
        case 'ContentLinkSetRecord':
          return <ContentLinkSet key={block.id} block={block} />
        case 'ImageSetRecord':
          return <ImageSet key={block.id} block={block} />
        case 'RichTextRecord':
          return <RichText key={block.id} block={block} />
        case 'TitleRecord':
          return <Title key={block.id} block={block} />
        case 'VideoRecord':
          return <VideoBlock key={block.id} block={block} />
        default:
          return null
      }
    })}
  </>
)
