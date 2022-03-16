import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const People = (props) => {
    const [response, setResponse] = useState([])
    const [getHomeWorld, setGetHomeWorld] = useState('')
    const { id } = useParams()


        useEffect(() => {
            axios.get(`https://swapi.dev/api/people/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setResponse(response.data)
                })
                .catch(err => console.log(err))
        }, [id])
    
    
        useEffect(() => {
            axios.get(`https://swapi.dev/api/planets/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setGetHomeWorld(response.data)
                })
                .catch(err => console.log(err))
        }, [id])
    
    



return (
    <div className='container'>
        {
            response ?
            <>
                < table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">{response.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Birth Year</th>
                            <td>{response.birth_year}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gender</th>
                            <td>{response.gender}</td>

                        </tr>
                        <tr>
                            <th scope="row">Height</th>
                            <td colspan="2">{response.height}</td>
                        </tr>

                        <tr>
                            <th scope="row">Mass</th>
                            <td>{response.mass}</td>

                        </tr>

                        <tr>
                            <th scope="row">Homeworld</th>
                            <td>{getHomeWorld.name}</td>

                        </tr>

                    </tbody>
                    </table >
                    </>
                :
                <>
                <img src="http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg"  alt='obi-wan kenobi' />
                </>
        
                
        }
                </div>
    )}

export default People