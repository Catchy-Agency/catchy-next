import classNames from 'classnames'
import { FC } from 'react'
import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'

import {
  ContentPostBySlug_contentPost_blocks_ColumnRowRecord,
  ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns,
} from '../../gql/types/ContentPostBySlug'
import { ButtonExternal } from './ButtonExternal'
import { ButtonInternal } from './ButtonInternal'
import { RichText } from './RichText'
import { Video } from './Video'

export const ColumnRow: FC<{
  block: ContentPostBySlug_contentPost_blocks_ColumnRowRecord
}> = ({ block }) => (
  <div
    className={classNames('columns', {
      'is-vcentered': block.verticallyCenterAcrossColumns,
    })}
  >
    {block.columns.map((column) => (
      <div key={column.id} className={`column ${column.sizeModifier}`}>
        {column.title && <div className="title is-3">{column.title}</div>}
        {column.image?.responsiveImage && (
          <Image data={column.image?.responsiveImage as any} />
        )}
        {column.text && (
          <div className="content">
            <ReactMarkdown>{column.text}</ReactMarkdown>
          </div>
        )}
        <ColumnBlocks blocks={column.blocks} />
      </div>
    ))}
  </div>
)

const ColumnBlocks: FC<{
  blocks: ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'ButtonExternalRecord':
          return <ButtonExternal key={block.id} block={block} />
        case 'ButtonInternalRecord':
          return <ButtonInternal key={block.id} block={block} />
        case 'RichTextRecord':
          return <RichText key={block.id} block={block} />
        case 'VideoRecord':
          return <Video key={block.id} block={block} />
        default:
          return null
      }
    })}
  </>
)