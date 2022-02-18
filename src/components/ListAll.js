import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//import { useNavigate } from 'react-router-dom';




const ListAll = (props) => {
  //const navigate = useNavigate(); 

  const [data, setData] = useState([])
  console.log('data :', data);

  
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_ALL_USER, {
    headers: {
      'app-id': process.env.REACT_APP_KEY
    }
  }).then(data=>{console.log(data.data)
    setData(data.data)  
  })
  .catch(err=>console.log(err));
  }, [])



  return (
    <Container fluid="md">          
      <Row className='mt-4'> 
          {data?.data?.map((user,i) => (
            <>
             <Col xs={3} className='text-center mt-4'>
             <img 
             key={i}
             src={user.picture}
             alt="profile"
             style={{
                   width: '150px',
                   height: '150px',
                   borderRadius: '50%',
                   objectFit: 'cover'
             }}
              />
             </Col>
             <Col xs={3} className='mt-4'>
                   <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
                        <p className='text-center'><b>Nombre: </b>{user.firstName}</p> 
                        <p className='text-center'><b>Titulo: </b>{user.title}</p>
                        
                        <Button 
                        as={Link} 
                        to='/perfilUsuario'
                        variant="success">
                         Ver Perfil Completo
                         </Button>
                   </Card>                              
             </Col>
             </>
             ))}
             </Row>   
    </Container>);
};

export default ListAll;
