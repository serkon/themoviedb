import Head from 'next/head'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/movie/list"><a>this page!</a></Link>
      </main>
    </div>
  )
}

export default Home;