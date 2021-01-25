import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useQuerySubscription } from "react-datocms"

import {
  createSubscription,
  getPagePaths,
  Subscription,
} from "../../utils/dato-cms"

export interface PageData {
  title: string
  slug: string
}

const Page: NextPage<{ subscription: Subscription }> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription)
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  }
  return (
    <div>
      <p>Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1>Error: {error.code}</h1>
          <div>{error.message}</div>
          {error.response && (
            <pre>{JSON.stringify(error.response, null, 2)}</pre>
          )}
        </div>
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription(
      context,
      `
        {
          page(filter: { slug: { eq: "${context?.params?.slug}" } }) {
            title
            slug
          }
        }
      `,
    ),
  },
})

export default Page
