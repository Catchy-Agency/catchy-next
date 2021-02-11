import { FC } from 'react'

import { ContentPostBySlug_contentPost } from '../gql/types/ContentPostBySlug'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ColumnSet } from './blocks/ColumnSet'
import { ContentLinkSet } from './blocks/ContentLinkSet'
import { ImageSet } from './blocks/ImageSet'
import { RichText } from './blocks/RichText'
import { Title } from './blocks/Title'

export const ContentBlocks: FC<{
  blocks: ContentPostBySlug_contentPost['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'ButtonExternalRecord':
          return <ButtonExternal block={block} />
        case 'ButtonInternalRecord':
          return <ButtonInternal block={block} />
        case 'ColumnSetRecord':
          return <ColumnSet block={block} />
        case 'ContentLinkSetRecord':
          return <ContentLinkSet key={block.id} block={block} />
        case 'ImageSetRecord':
          return <ImageSet block={block} />
        case 'RichTextRecord':
          return <RichText block={block} />
        case 'TitleRecord':
          return <Title block={block} />
        case 'VideoRecord':
          return <div className="section">{block.__typename}</div>
        default:
          return null
      }
    })}
  </>
)
