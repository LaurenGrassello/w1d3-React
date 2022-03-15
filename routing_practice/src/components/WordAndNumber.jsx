import React from 'react'
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const { input } = useParams();
    if(isNaN(input)){
        return (
            <h3 className='d-flex justify-content-center m-2'>The word is: {input}</h3>
        )
    }
    return (
        <h3 className='d-flex justify-content-center m-2'>The number is: {input}</h3>
    );
}

export default Number