import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 export default function 
() {

    const [values,setvalues] = useState({
        question: "",
        answer: ""
    })
    const navigate = useNavigate();
    const handlesubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/newquestion',values)
        .then(res => {
            console.log(res)
            navigate('/admin');
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handlesubmit}>
                <h2>ADD QUESTION</h2>
                <div className='mb-2'>
                    <label htmlFor=''>QUESTION</label>
                    <input type="text" placeholder='Enter the question' className='form-control' onChange={e => setvalues({... values, question: e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>ANSWER</label>
                    <input type="text" placeholder='Enter the answer' className='form-control' onChange={e => setvalues({... values, answer: e.target.value})}></input>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>

        </div>

    </div>
  )
}
