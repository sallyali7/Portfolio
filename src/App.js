import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './common/Home'
import NavBar from './common/NavBar'
import Skills from './common/Skills'


function App() {
  return (
    <div> 
      <NavBar />
      <Home />
      <BrowserRouter>
        <Switch>
          <Route>
            <Skills />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  )
}   

export default App
