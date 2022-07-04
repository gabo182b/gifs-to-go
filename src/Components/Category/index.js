import React from 'react'
import { Link } from 'wouter'
import './category.scss'

const Category = ({ name, options = [], ...props }) => {
    return <div className='category'>
        <h3 className='category__title'>{name}</h3>
        <ul className='category__list'>
            {options.map((popularGif) => (
                <li key={popularGif}>
                    <Link
                        className='category__link'
                        to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
        </ul>
    </div>

}

export { Category }