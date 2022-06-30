import React from 'react'
import { Gif } from '../../Components/Gif'
import { useGlobalGifs } from '../../hooks/useGlobalGifs'
const Detail = ({ params }) => {
    const gifs = useGlobalGifs()

    const gif = gifs.find(currentGif => currentGif.id === params.id)

    return <Gif {...gif} />
}

export { Detail }
