import { FC } from 'react'
import { ChannelErrorData } from 'datocms-listen'

export const PageError: FC<{
  error: ChannelErrorData
}> = ({ error }) => (
  <section className="section">
    <div className="container">
      <article className="message is-danger">
        <div className="message-header">Error: {error.code}</div>
        <div className="message-body">
          <div className="block">{error.message}</div>
          {error.response && (
            <pre className="block">
              {JSON.stringify(error.response, null, 2)}
            </pre>
          )}
        </div>
      </article>
    </div>
  </section>
)
