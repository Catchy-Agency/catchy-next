import { FC } from 'react'

import { PrimaryPageBySlug_footer } from '../gql/types/PrimaryPageBySlug'

export const Footer: FC<{
  footer: PrimaryPageBySlug_footer
}> = ({ footer }) => (
  <footer className="section has-background-grey-darker">
    <div className="container is-max-widescreen">
      <div className="columns is-centered">
        <div className="column is-10">
          {footer.title && <div className="title is-3">{footer.title}</div>}
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <form
                id="contact-form"
                action="https://formspree.io/gary@convoke.gg"
                method="POST"
              >
                <div className="field is-grouped">
                  <div className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder={footer.nameLabel || undefined}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <div className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="email"
                      name="_replyto"
                      placeholder={footer.emailAddressLabel || undefined}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
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
                <div className="field is-grouped">
                  <div className="control">
                    <input
                      className="button is-primary"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-one-third">
              {footer.contactText && (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: footer.contactText || '' }}
                />
              )}
              {footer.socialLinks?.map(
                (link) =>
                  link && (
                    <a
                      key={link.fontAwesomeIcon}
                      href={link.url || undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="title is-4"
                    >
                      <span className="fa-stack">
                        <i className="fas fa-circle fa-stack-2x has-text-grey" />
                        <i
                          className={`fab fa-${
                            link.fontAwesomeIcon || ''
                          } fa-stack-1x`}
                        />
                      </span>
                    </a>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
