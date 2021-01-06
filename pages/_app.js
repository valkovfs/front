import '../styles/globals.css'
import {Provider} from 'react-redux'
import { useStore } from '../redux/store'
import '../styles/header.scss'
import '../styles/burger.scss'
import '../styles/menu.scss'
import '../styles/signin.scss'
import '../styles/adminProjectsTab.scss'
import '../styles/projects.scss'
import '../styles/typing-text.scss'
import '../styles/main.scss'


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
