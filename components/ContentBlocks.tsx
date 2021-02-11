import { FC } from 'react'

import { ContentPostBySlug_contentPost } from '../gql/types/ContentPostBySlug'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ColumnSet } from './blocks/ColumnSet'
import { ContentLinkSet } from './blocks/ContentLinkSet'

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
          return <div className="section">{block.__typename}</div>
        case 'RichTextRecord':
          return <div className="section">{block.__typename}</div>
        case 'VideoRecord':
          return <div className="section">{block.__typename}</div>
        default:
          return null
      }
    })}
  </>
)
