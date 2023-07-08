import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Upload() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ shayariData, setShayariData ] = useState({
    shayari:"",
    category:""
  });
  


  const setShayariDataFunc = (e)=>{
    const { name, value} = e.target;
    setShayariData({ ...shayariData, [name]: value })
  }



  const logData = ()=>{
    console.log(shayariData);
  }
  const uploadPoetry = () => {
    axios.post(`/add`, shayariData)
      .then(({ text: 'Added' }));
    navigate("/")
  }


  return (
    <div style={{ height: '79vh' }}>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <h1>Upload Poetry</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ display: 'inline-block' }}>
          <textarea placeholder='Category'
            name='category'
            onChange={(e)=>{
              setShayariDataFunc(e)
            }}
            style={{
              width: '50vh',
              height: '52px',
              padding: '12px 20px',
              boxSizing: 'borderBox',
              border: '2px solid #ccc',
              borderRadius: '4px',
              backgroundColor: ' #f8f8f8',
              fontSize: '16px',
              resize: 'none',
            }}>
          </textarea><br></br>
          <textarea placeholder='Poetry...'
            name='shayari'
            onChange={setShayariDataFunc}
            style={{
              width: '50vh',
              height: '150px',
              padding: '12px 20px',
              boxSizing: 'borderBox',
              border: '2px solid #ccc',
              borderRadius: '4px',
              backgroundColor: ' #f8f8f8',
              fontSize: '16px',
              resize: 'none',
              marginTop: '10px'
            }}>
          </textarea><br></br>

          <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary m-2" onClick={() => {
              uploadPoetry();
            }}>Upload</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
