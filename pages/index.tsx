import { GetStaticProps, NextPage } from 'next'

import { createSubscription, Subscription } from '../util/dato-cms'
import { primaryPageBySlug } from '../gql/queries/primary-pages'
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug'
import { PrimaryPage } from '../components/pages/PrimaryPage'

interface PageProps {
  subscription: Subscription<PrimaryPageBySlug>
}

const HomePage: NextPage<PageProps> = ({ subscription }) => (
  <PrimaryPage subscription={subscription} />
)

export const getStaticProps: GetStaticProps<PageProps> = async (context) => ({
  props: {
    type: 'primary',
    subscription: await createSubscription<PrimaryPageBySlug>(
      context,
      primaryPageBySlug,
      { slug: 'home' },
    ),
  },
})

export default HomePage
