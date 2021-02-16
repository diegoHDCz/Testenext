import {InferGetStaticPropsType} from 'next'
import Head from 'next/head';
import Header from '@components/Header';
import Navigation from '@components/navigation';
import {getPostList} from '@shared/util'

type PostList = string[]

function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>

      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.map((slug)=>(
          <li key={slug}>
            {slug.replaceAll('-',' ')}
          </li>
        ))}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts: PostList = getPostList()
  return {
    props: {
      posts
    }
  }
}

export default Home