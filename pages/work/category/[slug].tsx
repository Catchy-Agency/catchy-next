import { GetStaticPaths, GetStaticProps } from 'next'
import {
  CaseStudyListPage,
  CaseStudyListPageProps,
} from '../../../components/pages/CaseStudyListPage'
import { caseStudiesByCategoryId } from '../../../gql/queries/case-studies'
import { CaseStudiesByCategoryId } from '../../../gql/types/CaseStudiesByCategoryId'
import {
  createSubscription,
  getWorkCategoryIdBySlug,
  getWorkCategoryPaths,
} from '../../../util/dato-cms'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getWorkCategoryPaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<CaseStudyListPageProps> = async (
  context,
) => {
  const slug = context?.params?.slug
  if (typeof slug !== 'string') return { notFound: true }
  const categoryId = await getWorkCategoryIdBySlug(slug, context.preview)
  if (!categoryId) return { notFound: true }
  const subscription = await createSubscription<CaseStudiesByCategoryId>(
    context,
    caseStudiesByCategoryId,
    { id: categoryId },
  )
  return { props: { subscription, path: `/work/category/${slug}` } }
}

export default CaseStudyListPage
