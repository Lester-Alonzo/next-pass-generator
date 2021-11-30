import '../styles/globals.css'
import PassProvider from '../context/Pass.jsx'
import Layout from '../components/layout.jsx'

function MyApp({ Component, pageProps }) {
  return(
  <PassProvider>
  <Layout>
   <Component {...pageProps} />
  </Layout>
  </PassProvider>
  
  )
}

export default MyApp
