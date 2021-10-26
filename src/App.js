import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './views/Contact';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Blog from './components/Blog';
import Booking from './views/Booking';
import Coming from './views/Coming';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact render={(props) => <Coming {...props} />} />
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route
          path="/contact"
          exact
          render={(props) => <Contact {...props} />}
        />
        <Route
          path="/booking"
          exact
          render={(props) => <Booking {...props} />}
        />
        <Route path="/about" exact render={(props) => <About {...props} />} />
        <Route path="/blog" exact render={(props) => <Blog {...props} />} />
        <Route
          path="/not-found"
          exact
          render={(props) => <NotFound {...props} />}
        />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
