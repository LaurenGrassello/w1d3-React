import React from 'react'

const Hello = (props) => {
    const { word } = props
    if(isNaN(+'35')){
    return (
        <h3 className='d-flex justify-content-center m-2'>The word is: {word}</h3>
    )
}
return (
    <h3 >Error. Please enter a word!</h3>
)
}

export default Hello