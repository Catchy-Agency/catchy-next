import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

interface Link {
  id: string
  url: string | null
  title: string | null
  description: string | null
  callToAction: string | null
  image: ResponsiveImageType | null
  backgroundColor?: string | null
  textColor?: string | null
}

export const CardLinks: FC<{ links: Link[] }> = ({ links }) => (
  <div className="columns">
    {links.map((link) => (
      <div key={link.id} className="column">
        <div
          className="card"
          style={{
            backgroundColor: link.backgroundColor || undefined,
            color: link.textColor || undefined,
          }}
        >
          {link.image && (
            <div className="card-image">
              <Image data={link.image} />
            </div>
          )}
          <div className="card-content">
            {link.title && (
              <div
                className="title is-6"
                style={{ color: link.textColor || undefined }}
              >
                {link.title}
              </div>
            )}
            {link.description && (
              <div className="content">{link.description}</div>
            )}
            <a href={link.url || undefined} title={link.title || undefined}>
              {link.callToAction}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
)
