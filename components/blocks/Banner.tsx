import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug'

export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord
}> = ({ block }) => (
  <section
    className="section"
    key={block.id}
    style={{
      position: 'relative',
      backgroundColor: block.backgroundColor?.hex || '#0D202C',
      color: block.textColor?.hex || '#F6F6F6',
    }}
  >
    {block.backgroundImage?.url && (
      <div
        style={{
          background: `url(${block.backgroundImage.url}) no-repeat center bottom`,
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
    )}
    <div className="container">
      {block.title && (
        <div
          className="title is-2"
          style={{ color: block.textColor?.hex || '#F6F6F6' }}
        >
          {block.title}
        </div>
      )}
      {block.text && (
        <div className="content">
          <ReactMarkdown>{block.text}</ReactMarkdown>
        </div>
      )}
    </div>
  </section>
)
