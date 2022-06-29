import { Gif } from '../Gif'
import './listofgifs.scss'


const ListOfGifs = ({ gifs }) => {

    return <div className='listofgifs'>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />
            )
        }
    </div>

}

export { ListOfGifs }