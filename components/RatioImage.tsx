import { FC } from 'react'

export const RatioImage: FC<{
  src?: string
  title?: string
}> = ({ src, title }) => (
  <figure
    title={title}
    style={{
      height: 0,
      paddingTop: 'calc(9/16 * 100%)',
      background: `url(${src || ''}) no-repeat center center scroll`,
      backgroundSize: 'cover',
    }}
  />
)
