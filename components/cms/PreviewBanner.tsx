import classNames from 'classnames'
import { FC } from 'react'

export const PreviewBanner: FC<{
  status: RTCSctpTransportState
}> = ({ status }) =>
  status === 'closed' ? null : (
    <div
      className={classNames('notification', {
        'is-success': status === 'connected',
        'is-warning': status === 'connecting',
      })}
      style={{
        position: 'fixed',
        right: '10px',
        bottom: '10px',
        zIndex: 1000,
        margin: 0,
        padding: '0.75rem 1.25rem',
        opacity: 0.8,
      }}
    >
      <div className="level">
        <div className="has-text-weight-bold">
          {status === 'connecting' && 'Connecting...'}
          {status === 'connected' && 'Preview Mode'}
        </div>
        &nbsp;&nbsp;&nbsp;
        <button className="button is-dark is-small" onClick={exitPreview}>
          Exit
        </button>
      </div>
    </div>
  )

const exitPreview = () => {
  if (typeof window !== 'undefined') {
    const loc = window.location
    window.location.replace(
      `${loc.origin}/api/exit-preview?slug=${loc.pathname}`,
    )
  }
}
