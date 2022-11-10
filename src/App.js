import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'


function App() {
  
  const [buttonContent,setButtonContent] = useState("Reload");
  const fetchData = async ()=>{
    const res = await fetch("https://api.imgflip.com/get_memes");
    
    const resJson = await res.json();
    return resJson.data.memes;
  };

  const {data,isLoading,isError,error,refetch} = useQuery(['getdata'],fetchData);

  const refetchData = ()=>{
    refetch();
    console.log("reloaded-Iamge-data");
    console.log(data);
    setButtonContent("Reloaded !!! reseted Image and print reset-data in console");
  }

  if (isLoading) {
    return (
      <div>
        loading...
      </div> // loading data
    )
  }
  if (isError) {
    return <div>
              <Button variant="danger" onClick={refetchData}>{buttonContent}</Button> 
              {error.message}
            </div> // error data
  }
  return (
    <div className='App'>
      <Button variant="danger" onClick={refetchData}>{buttonContent}</Button> 
      <div className="container">
        <div className="row">
          {data?.map((item,index)=>
            <div key={index} className="col-sm">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Button variant="success">{item.id}</Button>
                </Card.Body>
              </Card>
            </div>
            )}
        </div>
      </div>
    </div>
      
  );
}

export default App;
