import React from 'react'
import { Link } from 'wouter'
import './gif.scss'
const Gif = ({ title, url, id }) => {
    return (
        <div className='gif-wrapper'>
            <Link to={`/gif/${id}`} className='gif-link'>
                <h4 className='gif-link__title'>{title}</h4>
                <img className='gif-link__image' src={url} alt={title} />
            </Link>
        </div>
    )
}

export { Gif }