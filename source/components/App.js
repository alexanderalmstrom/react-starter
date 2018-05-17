import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="main">
          <header className="header">
            <Link to="/" className="logo">React Starter</Link>
          </header>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
