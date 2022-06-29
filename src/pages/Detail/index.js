import React from 'react'

const Detail = ({ params }) => {
    console.log(params)
    return <h1>GIF con id {params.id}</h1>
}

export { Detail }
