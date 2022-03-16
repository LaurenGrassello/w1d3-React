import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planet = () => {
    const [response, setResponse] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response.data)
                setResponse(response.data)
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
                                <th scope="row">Population</th>
                                <td>{response.population}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gravity</th>
                                <td>{response.gravity}</td>

                            </tr>
                            <tr>
                                <th scope="row">Climate</th>
                                <td colspan="2">{response.climate}</td>
                            </tr>

                            <tr>
                                <th scope="row">Diameter</th>
                                <td>{response.diameter}</td>

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
    )
}

export default Planet