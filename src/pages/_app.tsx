import '~/src/scss/app.scss'
import { Layout } from '~/src/components/layout/layout.module'
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
