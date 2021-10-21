import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Company from './components/pages/company/Company';
import Contact from './components/pages/contact/Contact';
import NewProject from './components/pages/projects/newproject/NewProject';
import Container from './components/layout/container/Container';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass='min-height'>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/company'>
            <Company />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/newproject'>
            <NewProject />
          </Route>
        </Container>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
