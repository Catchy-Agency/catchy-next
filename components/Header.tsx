import { FC } from 'react'

import { PrimaryPageBySlug_header } from '../gql/types/PrimaryPageBySlug'

export const Header: FC<{
  header: PrimaryPageBySlug_header
}> = ({ header }) => {
  console.log(header)
  return <>Header</>
}
