import { AppProps } from 'next/app'
import '../styles/bootstrap-icons.css'
import '../styles/bootstrap.min.css'
import '../styles/tooplate-crispy-kitchen.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
