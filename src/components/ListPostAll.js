import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/styles.css';
import { BsHandThumbsUpFill } from "react-icons/bs";
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

const ListPostAll = () => {
      const [data, setData] = useState([])
      console.log('data :', data);


      useEffect(() => {
            axios.get(process.env.REACT_APP_URL_ALL_POST, {
                  headers: {
                        'app-id': process.env.REACT_APP_KEY
                  }
            }).then(data => {
                  console.log(data.data)
                  setData(data.data)
            })
                  .catch(err => console.log(err));
      }, [])


      return (
            <Container>
                  <Row className='mt-4'>
                        {data?.data?.map((post) =>
                              <Col key={post.id} className='mt-4'>
                                    <div className="card-post">
                                          <img src={post.image} alt="postOne" />
                                          <div className="info" >
                                                <h2>{post.text}</h2>
                                                <h3><BsHandThumbsUpFill />{post.likes}</h3>
                                                <h3>{`${post.owner.firstName} ${post.owner.lastName}`}</h3>
                                                <Button as={Link}
                                                to='/perfilUsuario'
                                                variant="success">Ver Mas</Button>
                                          </div>
                                    </div>
                              </Col>
                        )}
                  </Row>
            </Container>
      )
}

export default ListPostAll