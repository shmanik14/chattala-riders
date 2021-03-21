import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';


export default function Rider({rider}){
  // const {title, img, type} = props.rider;
  const history = useHistory()
    const handleBook = (riderType) => {
        history.push(`/destination/${riderType}`);
    }
  return (
    <Col xs={12} md={3}>
            <Card>
                <Card.Img variant="top" src={rider.img} />
                <Card.Body>
                    <Card.Title onClick={() => handleBook(rider.riderType)} >{rider.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col> 
  );
}
