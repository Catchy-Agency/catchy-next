import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { PrimaryPageBySlug_footer } from '../gql/types/PrimaryPageBySlug';
import { pageview } from '../util/gtag';

export const Footer: FC<{
  footer: PrimaryPageBySlug_footer;
}> = ({ footer }) => (
  <footer className="section Footer _has-background-grey-darker" data-footer>
    <div className="container is-max-widescreen">
      <div className="columns">
        <div className="column is-flex-direction-column information">
          <div className="is-flex-direction-column">
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
                          'has-text-turquoise',
                          'color-hover',
                        )}
                      />
                    </span>
                  </a>
                ),
            )}
            <div className="control mt-4">
              <Link href={'/newsletter'}>
                <a className="button is-primary" type="submit">
                  Join Our Mailing List
                </a>
              </Link>
            </div>
          </div>
          <div className="catchy-privacy">
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
                className="content privacy"
                dangerouslySetInnerHTML={{ __html: footer.richText }}
              />
            )}
          </div>
        </div>
        <div className="column mt-3">
          {footer.formTitle && (
            <h3 className="has-text-white mb-6">{footer.formTitle}</h3>
          )}
          <form
            id="contact-form"
            action={footer.destinationEmail || ''}
            method="POST"
          >
            <div className="field is-grouped pb-5 info-personal">
              <div className="control is-expanded _has-icons-left mr-5 input-name">
                <input
                  className="input px-2 pb-4"
                  type="text"
                  name="firstname"
                  placeholder={footer.firstNameLabel || 'First Name'}
                />
              </div>
              <div className="control is-expanded _has-icons-left ml-5 input-lastName">
                <input
                  className="input px-2 pb-4"
                  type="text"
                  name="lastname"
                  placeholder={footer.lastNameLabel || 'Last Name'}
                />
              </div>
            </div>
            <div className="field pb-5">
              <div className="control is-expanded _has-icons-left">
                <input
                  className="input px-2 pb-4"
                  type="email"
                  name="_replyto"
                  placeholder={footer.emailAddressLabel || undefined}
                />
              </div>
            </div>
            <div className="field mb-6">
              <div className="control">
                <textarea
                  className="textarea px-2 pb-4 scroll-text"
                  name="message"
                  placeholder={footer.messageLabel || undefined}
                  rows={1}
                />
              </div>
            </div>
            <div className="field is-grouped pt-2">
              <div className="control submit-btn">
                <button
                  type="submit"
                  className="button is-ghost"
                  onClick={() => pageview('/contact')}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
);
