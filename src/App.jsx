import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'

import MyParallax from './components/parallax/Parallax'
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

      <MyParallax />

      </div>
      
  )
}

export default App
