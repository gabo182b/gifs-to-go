import React, { useEffect, useState } from 'react'
import { Spinner } from '../../Components/Spinner'
import { getGifs } from '../../api/getGifs'
import { ListOfGifs } from '../../Components/ListOfGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}

export { SearchResults }