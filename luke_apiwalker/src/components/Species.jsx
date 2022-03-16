import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Species = () => {
    const [response, setResponse] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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
                                <th scope="row">Language</th>
                                <td>{response.language}</td>
                            </tr>
                            <tr>
                                <th scope="row">Average Lifespan</th>
                                <td>{response.average_lifespan}</td>

                            </tr>
                            <tr>
                                <th scope="row">Classification</th>
                                <td colspan="2">{response.classification}</td>
                            </tr>

                            <tr>
                                <th scope="row">Designation</th>
                                <td>{response.designation}</td>

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

export default Species