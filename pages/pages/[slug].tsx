import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getPage, getPagePaths } from "../../utils/dato-cms"

const Page: NextPage<{ page: { title: string } }> = ({ page }) => (
  <h2>{page.title}</h2>
)

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  if (!params) throw new Error("Page missing params")
  if (!params.slug) throw new Error("Page missing params.slug")
  if (typeof params.slug !== "string") throw new Error("Page slug not string")
  return {
    props: {
      preview,
      page: await getPage(params.slug),
    },
  }
}

export default Page
