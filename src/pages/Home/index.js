import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ListOfGifs } from '../../Components/ListOfGifs'
import { Category } from '../../Components/Category'
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
            <form className='form' onSubmit={handleSubmit}>
                <button className='form__button'>Search</button>
                <input className='form__input' type='text' value={keyword} placeholder='Search' onChange={handleChange} />
            </form>
            <div className='home'>
                <div className='home__search-results'>
                    <h3>Last Search</h3>
                    <ListOfGifs gifs={gifs} />
                </div>

                <div className='home__categories'>
                    <Category
                        name='Popular Searchs'
                        options={POPULAR_GIFS}
                    />
                    <Category
                        name="Mascotas"
                        options={['Perros', 'Gatos', 'Hamster']}
                    />
                </div>
            </div>


        </>
    )
}

export { Home }
