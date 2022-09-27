import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { IconPlus } from '../icons'
import { LinkData } from './LinkData'

export const CardColumns: FC<{
  links: LinkData[]
}> = ({ links }) => (
  <div className="card-columns">
    <div
      className="columns"
      style={{
        flexWrap: 'wrap',
        alignItems: 'stretch',
      }}
    >
      {links.map((link) => (
        <div key={link.id} className="column">
          <div
            className="card has-background-grey-darker"
            style={{ height: '100%' }}
            tabIndex={1}
          >
            {link.image && (
              <div className="card-image">
                {link.image && <Image data={link.image} lazyLoad={false} />}
              </div>
            )}
            <div className="card-title">
              {link.title && (
                <h5 className="title is-5">
                  {link.title}
                  <IconPlus />
                </h5>
              )}
            </div>
            <div className="card-content">
              {link.title && <h5 className="title is-5">{link.title}</h5>}
              {link.description && (
                <div className="content">{link.description}</div>
              )}
              {/* Shadow link to take up space //! */}
              {/* <button
                className="button is-ghost"
                style={{ visibility: 'hidden', padding: 0 }}
              >
                {link.callToAction}
              </button> */}
              {/* Real link, pinned to bottom */}
              <Link href={link.url || ''}>
                <a>
                  <button
                    className="button is-ghost mt-3"
                    style={{
                      padding: 0,
                    }}
                  >
                    {link.callToAction}
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
