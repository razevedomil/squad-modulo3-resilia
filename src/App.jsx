import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/nav/NavBar'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Agenda from './pages/Agenda'
import Blog from './pages/Blog'
import { useEffect, useState } from 'react'


function App() {

  const [blackHeader, setBlackHeader] = useState(false)
  
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
     
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (  
    <div className='App'>
      <Router>
    <NavBar black={blackHeader} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/galeria">
          <Galeria />
        </Route >
          <Route path="/agenda">
            <Agenda />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
      </Router>

      <Footer />

      </div>
      
  )
}

export default App
