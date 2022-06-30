import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ListOfGifs } from '../../Components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

import './home.scss'

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { gifs } = useGifs()

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={keyword} placeholder='Search Here' onChange={handleChange} />
            </form>
            <h3>Last Search</h3>
            <ListOfGifs gifs={gifs} />
            <h3>Popular gifs</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { Home }
