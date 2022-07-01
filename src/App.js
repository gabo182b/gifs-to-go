import React from 'react'
import { Link, Route } from "wouter";
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Detail } from './pages/Detail'
import { Context } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import logo from './assets/images/logo.png'
import './App.scss'

function App() {
  return (
    <Context.Provider
      value=
      {
        {
          name: 'gabriel',
          learning: true
        }
      }
    >
      <div className="App">
        <section className="App__content">
          <Link to="/">
            <figure className="App__logo">
              <img src={logo} alt='gifs to go logo' />
            </figure>
          </Link>
          <GifsContextProvider>
            <div className="main">
              <Route
                component={Home}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword"
              />
              <Route
                component={Detail}
                path="/gif/:id"
              />
            </div>
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
