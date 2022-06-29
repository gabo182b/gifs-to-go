import React from 'react'
import { Route } from "wouter";
import { Home } from '../Home'
import { SearchResults } from '../SearchResults'
import { Detail } from '../Detail'
import './main.scss'

const Main = () => {
    return (
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
    );
}


export { Main }