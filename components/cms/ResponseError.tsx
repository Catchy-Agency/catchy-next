import { FC } from 'react'
import { ChannelErrorData } from 'datocms-listen'

export const ResponseError: FC<{
  error: ChannelErrorData | null
}> = ({ error }) =>
  error ? (
    <article className="message is-danger">
      <div className="message-header">Error: {error.code}</div>
      <div className="message-body">
        {error.message}
        {error.response && (
          <pre className="block">{JSON.stringify(error.response, null, 2)}</pre>
        )}
      </div>
    </article>
  ) : null
