import { FC } from 'react'

import { ContentPostBySlug_contentPost } from '../gql/types/ContentPostBySlug'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ColumnSet } from './blocks/ColumnSet'
import { ContentLinkSet } from './blocks/ContentLinkSet'
import { ImageSet } from './blocks/ImageSet'
import { RichText } from './blocks/RichText'
import { Title } from './blocks/Title'
import { VideoBlock } from './blocks/VideoBlock'

export const ContentBlocks: FC<{
  blocks: ContentPostBySlug_contentPost['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
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
