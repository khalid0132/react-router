import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarker, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeagueDetail.css';

const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeagueDetail(data.leagues[0])
            console.log(data.leagues[0]);
        })
    },[idLeague])
    const {strSport, strLeague, dateFirstEvent, strCountry, strGender, strBanner} = leagueDetail;
    return (
        <div>
            <Container>
            <img className="top-header" src={strBanner} alt=""/>
            
                <Row className= "club-history">
                    <Col>
                        <h4>{strLeague} </h4>
                        <p><FontAwesomeIcon icon={faMapMarker}/> Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium vel sequi sint similique laborum fugiat numquam, esse eius. Aliquid corporis debitis et officia, ex tempora iste nam vitae! Veniam quae molestias doloremque exercitationem modi, minima ad iure! Blanditiis iste quidem est aspernatur odio. Enim.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed hic sit quidem. Quisquam illo, molestiae pariatur quod impedit magnam dolores ut eveniet, illum distinctio totam quidem numquam! Pariatur voluptates repellat temporibus recusandae unde doloribus perspiciatis expedita corrupti at, neque debitis rerum laudantium quasi consequuntur esse, sunt aperiam reiciendis ipsam in. Repellat, beatae. Mollitia itaque illum tempora voluptatum earum totam voluptate optio iusto ab alias omnis esse debitis nesciunt recusandae, voluptatem corrupti adipisci laboriosam possimus incidunt perferendis distinctio! Cupiditate consectetur tempore aut, voluptatem rerum dolores nemo quo numquam similique ipsum error commodi ex nesciunt inventore dolore rem vel! Tempora, autem consequuntur?
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                        <span><FontAwesomeIcon icon={faMapMarker}/></span>
                        <span><FontAwesomeIcon icon={faMapMarker}/></span>
                        <span><FontAwesomeIcon icon={faMapMarker}/></span>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default LeagueDetail;