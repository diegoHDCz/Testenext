import Head from 'next/head';
import Image from 'next/image';

const Hello = () =>(
    <>
    <Head>
        <title>Hello There :: Blog</title>
        <meta property="og:title" content="Hello There :: Blog" />
    </Head>
    <article>
        <h1>Helo There!</h1>
        <Image 
        src="/post/hello-there/back.jpg" 
        width={640}
        height={427}
        />
    </article>
    </>
)

export default Hello 