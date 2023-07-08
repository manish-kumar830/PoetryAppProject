import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home() {

  const [shayari, setShayari] = useState([]);
  const navigate = useNavigate();

  const getShayari = async () => {
    const { data } = await axios.get("/shayari");
    setShayari(data);
    console.log(data);

  }

  useEffect(() => {
    getShayari();

  }, []);


  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <div>
        <div>
          {
            shayari?.map((s) => (

              <div className='container' style={{ width: '22vw', display: 'inline-block', marginTop: '20px', marginBottom: '20px' }}>
                <div className='cards'>
                  <div className='card' onClick={() => {
                    navigate(`/edit/${s._id}`)
                  }} style={{ minHeight: '19vh', maxHeight: '19vh' }}>
                    <p style={{ padding: '7px', margin: '0px', fontWeight: 'bold' }}>{s.shayari.substring(0, 70)}...</p><br></br>
                    <p style={{ padding: '7px', margin: '0px', fontWeight: 'bold' }}>Category : {s.category}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home