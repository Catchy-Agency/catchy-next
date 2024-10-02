import classNames from 'classnames';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { FC, useMemo, useState } from 'react';

import { PrimaryPageBySlug_header } from '../gql/types/PrimaryPageBySlug';
import { scrollToContact } from '../util/scrollToContact';
import { AngleDown } from './icons';

export const Header: FC<{
  header: PrimaryPageBySlug_header;
}> = ({ header }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() =>
        document.addEventListener('click', () => setOpen(false), {
          once: true,
        }),
      );
    }
  };

  const isServicesActive = useMemo(() => {
    return header.whatWeDoLinks?.some((link) => {
      const href = `/${link.slug || ''}`;
      const isActive =
        router.pathname === '/[slug]'
          ? link.slug === router.query.slug
          : router.pathname.startsWith(href);
      return isActive;
    });
  }, [header.whatWeDoLinks, router.pathname, router.query.slug]);

  const isResourcesActive = useMemo(() => {
    return header.aboutCatchyLinks?.some((link) => {
      const href = `/${link.slug || ''}`;
      const isActive =
        router.pathname === '/[slug]'
          ? link.slug === router.query.slug
          : router.pathname.startsWith(href);
      return isActive;
    });
  }, [header.aboutCatchyLinks, router.pathname, router.query.slug]);

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
            {/* Services dropdown */}
            {header.whatWeDoLinks?.length > 0 && (
              <DropdownLinks
                title={header.whatWeDoPageLink?.title || 'What We Do'}
                links={header.whatWeDoLinks}
                isDropdownActive={isServicesActive}
                router={router}
                slug={header.whatWeDoPageLink?.slug || ''}
              />
            )}
            {/* Top-level links */}
            {header.links.map((link) => {
              const href = `/${link.slug || ''}`;
              const isActive =
                router.pathname === '/[slug]'
                  ? link.slug === router.query.slug
                  : router.pathname.startsWith(href);
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
              );
            })}
            {/* Resources dropdown */}
            {header.aboutCatchyLinks?.length > 0 && (
              <DropdownLinks
                title={header.aboutCatchyPageLink?.title || 'About Catchy'}
                links={header.aboutCatchyLinks}
                isDropdownActive={isResourcesActive}
                router={router}
                slug={header.aboutCatchyPageLink?.slug || ''}
              />
            )}
            {/* Contact link */}
            <a
              className="navbar-item is-tab button is-ghost"
              onClick={scrollToContact}
            >
              {header.contactLinkLabel}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const DropdownLinks: FC<{
  title: string;
  links:
    | PrimaryPageBySlug_header['whatWeDoLinks']
    | PrimaryPageBySlug_header['aboutCatchyLinks'];
  isDropdownActive: boolean;
  router: NextRouter;
  slug: string;
}> = ({ title, links, isDropdownActive, router, slug }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleExpand(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 1024) return;
    setExpanded((prevExpanded) => (prevExpanded === title ? null : title));
  }
  const isPrimaryPageActive = slug === router.query.slug;
  const isExpanded = expanded === title;

  return (
    <div
      className="navbar-item has-dropdown is-hoverable"
      onClick={(e) => {
        // Prevent dropdown from hanging around
        (e.target as HTMLElement).blur();
      }}
    >
      <a
        className={classNames('navbar-item', 'is-tab', {
          'is-active': isDropdownActive || isPrimaryPageActive,
        })}
        {...(slug ? { href: `/${slug}` } : {})}
      >
        {title}
        <button
          className={classNames('header-link-button', {
            'is-expanded': isExpanded,
          })}
          onClick={handleExpand}
        >
          {AngleDown}
        </button>
      </a>
      <div className={`navbar-dropdown ${isExpanded ? 'is-expanded' : ''}`}>
        {links.map((link) => {
          const href = `/${link.slug || ''}`;
          const isActive =
            router.pathname === '/[slug]'
              ? link.slug === router.query.slug
              : router.pathname.startsWith(href);
          return (
            <Link key={href} href={href}>
              <a
                className={classNames('navbar-item', {
                  'is-active': isActive,
                })}
              >
                {link.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
