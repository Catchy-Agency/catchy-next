import { GetStaticProps } from 'next'
import {
  CaseStudyListPage,
  CaseStudyListPageProps,
} from '../../components/pages/CaseStudyListPage'
import { allCaseStudies } from '../../gql/queries/case-studies'
import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { createSubscription } from '../../util/dato-cms'

export const getStaticProps: GetStaticProps<CaseStudyListPageProps> = async (
  context,
) => ({
  props: {
    subscription: await createSubscription<AllBlogPosts>(
      context,
      allCaseStudies,
    ),
    path: '/blog',
  },
})

export default CaseStudyListPage
