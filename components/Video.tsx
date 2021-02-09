import { FC } from 'react'

export const Video: FC<{
  video: any // TODO
}> = ({ video }) => {
  switch (video.provider) {
    case 'youtube':
      // Via https://kevinsimper.medium.com/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf
      return (
        <div
          className="video"
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src={`https://www.youtube.com/embed/${video.providerUid}`}
            frameBorder="0"
          />
        </div>
      )
    default:
      console.error('Unhandled Video Provider:', video.provider)
      return <></>
  }
}
