import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip'

function Home() {
  const [isFlipped,setisFlipped] = useState(false);
  const [data,setdata] = useState([{}]);
  const [index,setindex] = useState(0);
  const navigator = useNavigate();

  useEffect(()=>{
    fetch('https://tuf-sopa.onrender.com/questions')
    .then(res => res.json())
    .then(data => setdata(data))
    .catch(err => console.log(err));
  },[])

  function handleflip(){
    setisFlipped(isFlipped => !isFlipped);
  }
  function handleprevious()
  {
    if(index-1>=0)
      setindex(index => index-1);
    else
      setindex(index=> data.length-1);
  }
  function handlenext(){
    if(index+1<data.length)
    {
      setindex(index => index+1);
      if(isFlipped===true)
        setisFlipped(false);
    }
      
    else
    {
      setindex(0);
      if(isFlipped===true)
        setisFlipped(false);
    }
      
  }


  


  return (
    <div>
        <main className='container'>
            <div className='text'>
                <h4>Please Click on <button className='adminbutton' onClick={()=> navigator('/admin')}>Admin Page</button> button to Add, delete or update values</h4>
            </div>
            <button className='button1' onClick={handleprevious}>Prev</button>
            <div className='card'>
            
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                <div className='card' onClick={handleflip}>
                    <u>Question</u>
                <h1>{data[index].question}</h1>
                </div>
                <div className='card-back' onClick={handleflip}>
                    <u>Answer</u>
                <h1>{data[index].answer}</h1>
                </div>
            </ReactCardFlip>
            </div>
            <button className='button2' onClick={handlenext}>Next</button>
        </main>
        </div>
  )
}

export default Home