import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug'
import { COLOR_DARK, COLOR_LIGHT } from '../../styles/colors'

export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord
}> = ({ block }) => (
  <section
    className="section"
    key={block.id}
    style={{
      position: 'relative',
      backgroundColor: block.backgroundColor?.hex || COLOR_DARK,
      color: block.textColor?.hex || COLOR_LIGHT,
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
          style={{ color: block.textColor?.hex || COLOR_LIGHT }}
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
