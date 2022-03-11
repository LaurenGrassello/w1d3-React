import React, {useState} from 'react'

const ColorBoxForm = (props) => {
    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.colorFunction(color)
        setColor('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>Color: </label>
        <input type='text' value={color} onChange={(e) => setColor(e.target.value)} />
        <button>Add</button>
        </form>
    )
}

export default ColorBoxForm