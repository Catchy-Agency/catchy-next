import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const MediumLinks: FC<{
  links: LinkData[]
  hasBackgroundColor?: boolean
}> = ({ links, hasBackgroundColor }) => (
  <div className="medium-links">
    {links.map((link) => (
      <div
        key={link.id}
        className={classNames('columns', 'is-gapless', {
          'has-background-grey-darker': hasBackgroundColor,
        })}
        style={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        <div className="column is-7">
          <div className="p-6">
            {link.title && <div className="title is-2">{link.title}</div>}
            {link.description && (
              <div className="content">{link.description}</div>
            )}
            <Link href={link.url || ''}>
              <a className="button is-primary" title={link.title || undefined}>
                {link.callToAction}
              </a>
            </Link>
          </div>
        </div>
        <div className="column is-5">
          <Link href={link.url || ''}>
            <a>{link.image && <Image data={link.image} />}</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
)
