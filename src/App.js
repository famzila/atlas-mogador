import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './views/Contact'
import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
import Blog from './components/Blog'
import Booking from './views/Booking'
import Coming from './views/Coming'

function App(props) {
  const { t, i18n } = useTranslation('common')
  // Switch to chosen language
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <BrowserRouter>
      <Header t={t} switchLanguage={switchLanguage} />
      <Switch>
        <Route path='/' exact>
          <Coming t={t} />
        </Route>
        <Route path='/home' exact>
          <Home t={t} />
        </Route>
        <Route path='/contact' exact>
          <Contact t={t} />
        </Route>
        <Route path='/booking' exact>
          <Booking t={t} />
        </Route>
        <Route path='/about' exact>
          <About t={t} />
        </Route>
        <Route path='/blog' exact>
          <Blog t={t} />
        </Route>
        <Route path='/not-found' exact>
          <NotFound t={t} />
        </Route>
        <Redirect to='/not-found' />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
