import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { PrimaryPageBySlug_header } from '../gql/types/PrimaryPageBySlug'
import { scrollToContact } from '../util/scrollToContact'

export const Header: FC<{
  header: PrimaryPageBySlug_header
}> = ({ header }) => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!isOpen)
    if (!isOpen) {
      setTimeout(() =>
        document.addEventListener('click', () => setOpen(false), {
          once: true,
        }),
      )
    }
  }

  return (
    <nav className="navbar is-fixed-top">
      <div className="container is-max-widescreen">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img
                src={header.logo?.url}
                alt={header.logo?.alt || undefined}
                title={header.logo?.title || undefined}
              />
            </a>
          </Link>
          <a
            role="button"
            className={classNames('navbar-burger', { 'is-active': isOpen })}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className={classNames('navbar-menu', { 'is-active': isOpen })}>
          <div className="navbar-end">
            {header.links.map((link) => {
              const href = `/${link.slug || ''}`
              const isActive =
                router.pathname === '/[slug]'
                  ? link.slug === router.query.slug
                  : router.pathname.startsWith(href)
              return (
                <Link key={href} href={href}>
                  <a
                    className={classNames('navbar-item', 'is-tab', {
                      'is-active': isActive,
                    })}
                  >
                    {link.title}
                  </a>
                </Link>
              )
            })}
            <a
              className="navbar-item is-tab button is-primary"
              onClick={scrollToContact}
            >
              {header.contactLinkLabel}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
