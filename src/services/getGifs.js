const apiKey = 'OU0d4i5dFZ9oKlEnRbQy9VlLw9QOwUPa'

const getGifs = ({ limit = 25, keyword = 'morty' } = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { url } = image.images.downsized_medium
                // const { images, title, id } = image
                const { title, id } = image
                return { title, id, url }
            })
            return gifs
        })
}

export { getGifs }