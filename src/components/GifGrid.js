import React, {Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs( category );

    return (
        <Fragment>
            <h3 className="animate__fadeIn">{category}</h3>

            {loading && <p className="animate__bounce">Loading</p>}

            <div className="card-grid animate__fadeIn">              
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }>

                            </GifGridItem>
                        ))
                    }              
            </div>
        </Fragment>       
    )
}
