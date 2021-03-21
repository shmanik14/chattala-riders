import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImage from '../../images/Map.png';
import fakeData from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const {riderType} = useParams();

    let result = fakeData.find(vehicle => vehicle.riderType === riderType);
    console.log(result)
    const {img, title,capacity, price} = result;
    const containerStyle = {
        width: '100%',
        height: '500px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };

    return (
        <div className="common">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="search-result">
                            <h4><strong>Riding with {title} <img src={img} alt=""/></strong></h4>
                            <div className="destination">
                                <p>Agrabad</p>
                                <p>To</p>
                                <p>GEC Circle</p>
                            </div>
                            <ul>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            <li><img src={img} alt=""/>  {title} <FontAwesomeIcon icon={faUserFriends} /> {capacity} <span>${price}</span></li>
                            </ul>
                            <ul>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <div>
                        <LoadScript
                            googleMapsApiKey="AIzaSyADfaOM4xCTYBzK3cHSDU5d9ip-68KSJ60"
                        >
                            <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            >
                            { /* Child components, such as markers, info windows, etc. */ }
                            <></>
                            </GoogleMap>
                        </LoadScript>
                            {/* <img src={mapImage} alt=""/> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;