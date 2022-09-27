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
            <div className="field form-notice my-5">
              <label className="wrap">
                {footer.formNotice && (
                  <span
                    className="content"
                    dangerouslySetInnerHTML={{ __html: footer.formNotice }}
                  />
                )}
                <input type="checkbox" />
                <span className="checkmark">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="15.5"
                      fill="#1DBC83"
                      stroke="#1DBC83"
                    />
                    <path
                      d="M12.727 20.075L8.427 15.687L7 17.149L12.727 23L25 10.463L23.568 9L12.727 20.075Z"
                      fill="#0D202C"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div className="field is-grouped">
              <div className="control submit-btn">
                <input
                  onClick={() => pageview('/contact')}
                  className="button is-primary"
                  type="submit"
                  value="Send"
                />
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.64197 0L0.147949 1.41L5.00139 6L0.147949 10.59L1.64197 12L8.00004 6L1.64197 0Z"
                    fill="#0D202C"
                  />
                </svg>
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
        <p className="mb-0">
          © {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </div>
  </footer>
)
