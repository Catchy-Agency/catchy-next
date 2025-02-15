import classNames from 'classnames';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { FC, useEffect, useMemo, useState } from 'react';

import { useStopInfiniteScroll } from '../contexts/stopInfiniteScroll';
import { PrimaryPageBySlug_header } from '../gql/types/PrimaryPageBySlug';
import avoidSameRouteNavigation from '../util/avoidSameRouteNavigation';
import { scrollToContact } from '../util/scrollToContact';
import { useMediaQuery } from './hooks/useMediaQuery';
import { AngleDown } from './icons';

export const Header: FC<{
  header: PrimaryPageBySlug_header;
}> = ({ header }) => {
  const router = useRouter();
  const { handleStopInfiniteScroll } = useStopInfiniteScroll();
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const device = useMediaQuery();

  const toggleOpen = () => {
    if (!isOpen) {
      setScrollY(window.scrollY);
    }
    setOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() =>
        document.addEventListener('click', () => setOpen(false), {
          once: true,
        }),
      );
    }
  };

  useEffect(() => {
    setIsMobile(
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ),
    );
  }, [device]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      window.scrollTo(0, scrollY);
    } else {
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

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
              <div
                className="logo-mask"
                style={{
                  maskImage: `url(${header.logo?.url || ''})`,
                  WebkitMaskImage: `url(${header.logo?.url || ''})`,
                }}
              />
            </a>
          </Link>
          <a
            role="button"
            className={classNames('burger-menu', { 'is-active': isOpen })}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleOpen}
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
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
                      'is-active-title': isActive,
                    })}
                    onClick={(e) =>
                      avoidSameRouteNavigation(e, href, router.asPath)
                    }
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
              className="navbar-item is-tab is-ghost"
              onClick={() => {
                handleStopInfiniteScroll('[data-is-breakpoint=true]');
                scrollToContact();
              }}
              {...(isMobile && { href: '#contact-form' })}
              tabIndex={0}
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
  const [hovered, setHovered] = useState(false);

  function handleExpand(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 1024) return;
    setExpanded((prevExpanded) => (prevExpanded === title ? null : title));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter') {
      setHovered((prevHovered) => !prevHovered);
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setHovered(false);
    }
  }

  const isPrimaryPageActive = slug === router.query.slug;
  const isExpanded = expanded === title;

  return (
    <div
      className={classNames('navbar-item has-dropdown is-hoverable', {
        'is-hovered': hovered,
      })}
      onClick={(e) => {
        // Prevent dropdown from hanging around
        (e.target as HTMLElement).blur();
      }}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <a
        className={classNames('navbar-item', 'is-tab', {
          'is-active': isDropdownActive || isPrimaryPageActive,
          'is-active-dropdown-title': isPrimaryPageActive,
        })}
        {...(slug ? { href: `/${slug}` } : {})}
        onClick={(e) => avoidSameRouteNavigation(e, `/${slug}`, router.asPath)}
      >
        {title}
        <button
          className={classNames('header-link-button', {
            'is-expanded': isExpanded,
          })}
          onClick={handleExpand}
          onKeyDown={handleKeyDown}
          aria-label={
            isExpanded
              ? 'Collapse navigation dropdown'
              : 'Open navigation dropdown'
          }
        >
          {AngleDown}
        </button>
      </a>
      <div
        className={classNames('navbar-dropdown', {
          'is-expanded': isExpanded,
          'is-hovered': hovered,
        })}
      >
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
                  'is-active-dropdown-item': isActive,
                })}
                onClick={(e) =>
                  avoidSameRouteNavigation(e, href, router.asPath)
                }
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
