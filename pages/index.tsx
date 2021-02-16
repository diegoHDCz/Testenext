import { InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Navigation from '@components/navigation';
import { getPostList } from '@shared/util';

type PostList = string[]

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>

      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`post/${slug}`}>
                <a>
                {slug.replace('-', ' ')}
                </a>
                </Link>
                
              </li>
            ))}
          </ul>
        )}
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