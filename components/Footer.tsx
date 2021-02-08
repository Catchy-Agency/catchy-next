import { FC } from 'react'

import { PrimaryPageBySlug_footer } from '../gql/types/PrimaryPageBySlug'

export const Footer: FC<{
  footer: PrimaryPageBySlug_footer
}> = ({ footer }) => {
  console.log(footer)
  return <>Footer</>
}
