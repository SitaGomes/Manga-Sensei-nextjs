import  {Header} from 'components/Header'
import {GlobalStyle} from "style/global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
