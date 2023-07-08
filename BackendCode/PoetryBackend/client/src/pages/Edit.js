import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ shayariData, setShayariData ] = useState({
    shayari:"",
    category:""
  });


  const getShayari = async () => {
    const { data } = await axios.get(`/shayari/${id}`);
    setShayariData({ ...shayariData, shayari:data.shayari, category:data.category })
    console.log(data);

  }
  

  useEffect(()=>{
    getShayari();
  },[])



  const setShayariDataFunc = (e)=>{
    const { name, value} = e.target;
    setShayariData({ ...shayariData, [name]: value })
  }



  const logData = ()=>{
    console.log(shayariData);
  }
  const updatePoetry = (id) => {
    axios.put(`/update/${id}`, shayariData)
      .then(({ text: 'Updated' }));
    navigate("/")
  }


  const deletePoetry = (id) => {
    axios.delete(`/delete/${id}`, shayariData)
      .then(({ text: 'Deleted' }));
    navigate("/")
  }


  return (
    <div style={{ height: '79vh' }}>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <h1>Edit Poetry</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ display: 'inline-block' }}>
          <textarea placeholder='Category'
            name='category'
            value={shayariData.category}
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
            value={shayariData.shayari}
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
              updatePoetry(id);
            }}>Update</button>
             <button type="button" className="btn btn-primary m-2" onClick={() => {
              deletePoetry(id);
            }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
