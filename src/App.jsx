import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/nav/NavBar'
import Home from './pages/Home'
import Galeria from './pages/Galeria'

function App() {

  return (  
    <div className='App'>
      <Router>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/galeria">
          <Galeria />
        </Route>
      </Switch>
      </Router>

      <Footer />

      </div>
      
  )
}

export default App
