import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function Administrator() {
    const [data, setdata] = useState([{}]);

    useEffect(() => {
        async function getData() {
            await axios.get('http://localhost:8080/questions')
                .then(res => setdata(res.data))
                .catch(err => console.log(err))
        }

        getData();

    }, [])


    const handledelete = (id) => {
        axios.delete('http://localhost:8080/delete/' + id)
            .then(res => {
                window.location.reload();
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-danger bg-gradient justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Database</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create +</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>QUESTION</th>
                            <th>ANSWER</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return <tr key={index}>
                                <td className='h6'>{element.id}</td>
                                <td className='h6'>{element.question}</td>
                                <td className='h6'>{element.answer}</td>
                                <td className='h5 d-flex justify-content-center'>
                                    <Link to={`/update/${element.id}`} className='btn btn-sm btn-primary mx-2'>Update</Link>
                                    <button onClick={() => handledelete(element.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Administrator