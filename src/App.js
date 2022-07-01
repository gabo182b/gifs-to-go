import React from 'react'
import { Route } from "wouter";
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Detail } from './pages/Detail'
import { Context } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <Context.Provider
        value=
        {
          {
            name: 'gabriel',
            learning: true
          }
        }
      >
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
      </Context.Provider>
    </div>
  );
}

export default App;
