import React from 'react'
import { Spinner } from '../../Components/Spinner'
import { ListOfGifs } from '../../Components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3>{keyword}</h3>
                <ListOfGifs gifs={gifs} />
            </>
        }
    </>
}

export { SearchResults }