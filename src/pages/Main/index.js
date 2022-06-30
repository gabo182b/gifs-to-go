import React from 'react'
import { Route } from "wouter";
import { Home } from '../Home'
import { SearchResults } from '../SearchResults'
import { Detail } from '../Detail'
import { Context } from '../../context/StaticContext';
import { GifsContextProvider } from '../../context/GifsContext';
import './main.scss'

const Main = () => {
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
    );
}


export { Main }