import { FC } from 'react'

import {
  ContentPostBySlug_contentPost_blocks_ColumnSetRecord,
  ContentPostBySlug_contentPost_blocks_ColumnSetRecord_columns,
} from '../../gql/types/ContentPostBySlug'

export const ColumnSet: FC<{
  block: ContentPostBySlug_contentPost_blocks_ColumnSetRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        {block.columns.map((column) => (
          <div key={column.id} className={`column ${column.sizeModifier}`}>
            <ColumnBlocks blocks={column.blocks} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ColumnBlocks: FC<{
  blocks: ContentPostBySlug_contentPost_blocks_ColumnSetRecord_columns['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'ButtonExternalRecord':
          return <div>{block.__typename}</div>
        case 'ButtonInternalRecord':
          return <div>{block.__typename}</div>
        case 'ImageRecord':
          return <div>{block.__typename}</div>
        case 'RichTextRecord':
          return <div>{block.__typename}</div>
        case 'TitleRecord':
          return <div>{block.__typename}</div>
        case 'VideoRecord':
          return <div>{block.__typename}</div>
        case 'VideoRecord':
        default:
          return null
      }
    })}
  </>
)
