import '../styles/app.scss'
import { Layout } from '~/components/layout/layout.module'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
