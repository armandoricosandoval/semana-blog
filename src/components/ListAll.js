import React, { useEffect,useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//import { useNavigate } from 'react-router-dom';




const ListAll = (props) => {
  //const navigate = useNavigate(); 
  
  const [data,setData]=useState('')
  console.log('data :', data);

  useEffect(() => {
    setData('log')
  },[])



  return (
    <Container>
    <Row className='mt-4'>       
          <Col className='mt-4'>
            {data.map(datos=>(
            <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
                     <p className='text-center'><b>Nombre: </b>{datos.name}</p> 
                     <p className='text-center'><b>Tipo: </b>{datos.category}</p>                      
                     <Button 
                      onClick={()=>console.log('datos')}
                      variant="success">
                      Consultar 
                      </Button>
                </Card>)) }
                                             
          </Col>
    </Row>
</Container>);
};

export default ListAll;
