import React from 'react'
import { useParams } from 'react-router-dom'

const HelloColor = (props) => {
    const {word, fontColor, bgColor} =useParams()
    if (isNaN(word)){
        return (
            <h3 className='d-flex justify-content-center m-2' style={{color: fontColor, backgroundColor: bgColor}}>
            The word is: {word}
            </h3>
        )
    } else{
        return(
            <h3>Error! Add a word not number</h3>
        )
    }

}

export default HelloColor