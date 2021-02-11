import classNames from 'classnames'
import { FC } from 'react'
import { Image } from 'react-datocms'

import {
  ContentPostBySlug_contentPost_blocks_ColumnSetRecord,
  ContentPostBySlug_contentPost_blocks_ColumnSetRecord_columns,
} from '../../gql/types/ContentPostBySlug'
import { ButtonExternal } from './ButtonExternal'
import { ButtonInternal } from './ButtonInternal'
import { RichText } from './RichText'
import { Title } from './Title'
import { Video } from './Video'

export const ColumnSet: FC<{
  block: ContentPostBySlug_contentPost_blocks_ColumnSetRecord
}> = ({ block }) => (
  <div
    className={classNames('columns', {
      'is-vcentered': block.verticallyCenterAcrossColumns,
    })}
  >
    {block.columns.map((column) => (
      <div key={column.id} className={`column ${column.sizeModifier}`}>
        <ColumnBlocks blocks={column.blocks} />
      </div>
    ))}
  </div>
)

const ColumnBlocks: FC<{
  blocks: ContentPostBySlug_contentPost_blocks_ColumnSetRecord_columns['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'ButtonExternalRecord':
          return <ButtonExternal key={block.id} block={block} />
        case 'ButtonInternalRecord':
          return <ButtonInternal key={block.id} block={block} />
        case 'ImageRecord':
          return (
            block.image?.responsiveImage && (
              <Image
                key={block.id}
                data={block.image?.responsiveImage as any}
              />
            )
          )
        case 'RichTextRecord':
          return <RichText key={block.id} block={block} />
        case 'TitleRecord':
          return <Title key={block.id} block={block} />
        case 'VideoRecord':
          return <Video key={block.id} block={block} />
        default:
          return null
      }
    })}
  </>
)
