import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';
function Update() {


    const {id} = useParams();
    const navigate = useNavigate();
    const [values,setvalues] = useState({
        question: "",
        answer: ""
    })


    const handleupdate = (event)=>{
        event.preventDefault();
        axios.put('http://localhost:8080/update/'+id,values)
        .then(res => {
           console.log(res)
           navigate('/admin')
        }).catch(err=>console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-danger bg-gradient justify-content-center align-items-center' >
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleupdate}>
                <h2>{`UPDATE QUESTION WITH ID ${id}`}</h2>
                <div className='mb-2'>
                    <label htmlFor=''>QUESTION</label>
                    <input type="text" placeholder='Enter the question' className='form-control' value={values.question} onChange={e => setvalues({... values, question: e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>ANSWER</label>
                    <input type="text" placeholder='Enter the answer' className='form-control' value={values.answer} onChange={e => setvalues({... values, answer: e.target.value})}></input>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>

        </div>

    </div>
  )
}

export default Update