import React from 'react'

const ColorBoxDisplay = (props) => {

    return (
        <div className='d-flex justify-content-center m-2'>
        {
        props.box.map((box, i) => {
            return(
                <div className='colorClass m-2' key={i} style={{backgroundColor: box}}>
                </div>
            )
        } 
        )
        }
    </div>
    );
}

export default ColorBoxDisplay