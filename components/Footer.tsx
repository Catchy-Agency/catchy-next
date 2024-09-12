import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { PrimaryPageBySlug_footer } from '../gql/types/PrimaryPageBySlug'
import { pageview } from '../util/gtag'

export const Footer: FC<{
  footer: PrimaryPageBySlug_footer
}> = ({ footer }) => (
  <footer className="section _has-background-grey-darker">
    <div className="container is-max-widescreen">
      <div className="columns">
        <div className="column">
          <div className="is-flex is-align-items-center">
            {footer.contactEmail && (
              <a
                href={`mailto:${footer.contactEmail}`}
                rel="noreferrer"
                className="mr-5"
              >
                {footer.contactEmail}
              </a>
            )}
            {footer.socialLinks?.map(
              (link) =>
                link && (
                  <a
                    key={link.fontAwesomeIcon}
                    href={link.url || undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="is-size-3"
                  >
                    <span className="fa-stack">
                      <i
                        className={classNames(
                          link.fontAwesomeIcon,
                          'fa-stack-1x',
                          'has-text-turquoise',
                        )}
                      />
                    </span>
                  </a>
                ),
            )}
          </div>
          <div className="mt-6">
            {footer.contactText && (
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: footer.contactText || '',
                }}
              />
            )}
          </div>
          {footer.directionsUrl && (
            <div className="mt-5">
              <a href={footer.directionsUrl} rel="noreferrer">
                directions
              </a>
            </div>
          )}
        </div>
        <div className="column mt-3">
          {footer.formTitle && (
            <h4 className="has-text-primary mb-6">{footer.formTitle}</h4>
          )}
          <form
            id="contact-form"
            action={footer.destinationEmail || ''}
            method="POST"
          >
            <div className="field is-grouped">
              <div className="control is-expanded _has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  placeholder={footer.firstNameLabel || 'First Name'}
                />
              </div>
              <div className="control is-expanded _has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  placeholder={footer.lastNameLabel || 'Last Name'}
                />
              </div>
            </div>
            <div className="field">
              <div className="control is-expanded _has-icons-left">
                <input
                  className="input"
                  type="email"
                  name="_replyto"
                  placeholder={footer.emailAddressLabel || undefined}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder={footer.messageLabel || undefined}
                  rows={7}
                />
              </div>
            </div>
            <div className="field is-grouped pt-2">
              <div className="control submit-btn">
                <button
                  className="button is-ghost"
                  onClick={() => pageview('/contact')}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href="/">
          <a className="navbar-item">
            <img
              src={footer.footerLogo?.url}
              alt={footer.footerLogo?.alt || undefined}
              title={footer.footerLogo?.title || undefined}
            />
          </a>
        </Link>
        {footer.richText && (
          <div
            className="mb-0 content"
            dangerouslySetInnerHTML={{ __html: footer.richText }}
          />
        )}
      </div>
    </div>
  </footer>
)
