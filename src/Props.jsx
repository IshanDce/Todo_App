import React, { useState } from 'react';
import App from './App';
import Data from './Data';

const Props = () => {

    const [arr,setarr]=useState([])
    const addvalue=(value)=>{
        setarr([...arr,value])
    }

    const ondelete=(indextoremove)=>{
        let new_data= [...arr]
        new_data.splice(indextoremove,1)
        setarr(new_data)
    }
    return (
        <div >
            <App addvalue={addvalue}/>
            <Data arr={arr} ondelete={ondelete} />
           
        </div>
    );
};

export default Props;