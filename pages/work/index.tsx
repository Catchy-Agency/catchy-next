import { GetStaticProps } from 'next'
import {
  CaseStudyListPage,
  CaseStudyListPageProps,
} from '../../components/pages/CaseStudyListPage'
import { allCaseStudies } from '../../gql/queries/case-studies'
import { AllCaseStudies } from '../../gql/types/AllCaseStudies'
import { createSubscription } from '../../util/dato-cms'

export const getStaticProps: GetStaticProps<CaseStudyListPageProps> = async (
  context,
) => ({
  props: {
    subscription: await createSubscription<AllCaseStudies>(
      context,
      allCaseStudies,
    ),
    path: '/work',
  },
})

export default CaseStudyListPage
