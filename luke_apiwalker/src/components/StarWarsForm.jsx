import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const StarWarsForm = () => {
    const [option, setOption] = useState('')
    const [objectId, setObjectId] = useState('')

    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (option === 'people') {
            history.push(`/people/${objectId}`)
        } else { 
                history.push(`/planet/${objectId}`)
            }
        if (option === 'species')
            history.push(`/species/${objectId}`)
        } 
    
    

    return (
        <div>
            <form className='display' onSubmit={handleSubmit}>
                <label className='form-label'>Search For:</label>
                <select onChange={(e) => { setOption(e.target.value) }}>
                    <option hidden />
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                    <option value='species'>Species</option>
                </select>
                <div>
                    <label>ID:</label>
                    <input className='idSearch form-text' type='number' value={objectId} onChange={(e) => { setObjectId(e.target.value) }} />
                    <button className='btn btn-dark'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default StarWarsForm