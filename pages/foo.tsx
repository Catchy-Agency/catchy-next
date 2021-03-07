import { GetStaticProps, NextPage } from 'next'

const Foo: NextPage = () => <h1>Hello World</h1>

export const getStaticProps: GetStaticProps = async () => {
  const thing = await new Promise((r) => r(null))
  console.log(thing)
  return { notFound: true }
}

export default Foo
