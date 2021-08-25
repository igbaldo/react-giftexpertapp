import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon Ball', 'One Piece']

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = (e) => { 
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( categs => [...categories, 'HunterXHunter'] );
    // }

    return (
        <div>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category=> 
                        <GifGrid 
                            key= {category}
                            category = {category} >
                        </GifGrid>
                    )
                }
            </ol>


        </div>
    )
}
