import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImage from '../../images/Map.png'


const Book = () => {
    const {riderType} = useParams();
    const history = useHistory()
    const handleBooks = (riderType) => {
        history.push(`/search-result/${riderType}`);
    }
    
    return (
        <div className="common">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="search-ride">
                            <h4><strong>Riding with {riderType}</strong></h4>
                            <label htmlFor="pick-from">Pick From</label>
                            <input type="text" name="pick-from" placeholder="Argabad"/>
                            <label htmlFor="pick-To">Pick To</label>
                            <input type="text" name="pick-To" placeholder="GEC Circle"/>
                            <label htmlFor="date-from">Date From</label>
                            <input type="date" name="date-from"/>
                            <label htmlFor="date-to">Date To</label>
                            <input type="date" name="date-to"/>
                            <button onClick={() => handleBooks(riderType)} className="rider-btn">
                                 Search {riderType}</button>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <div>
                            <img src={mapImage} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;