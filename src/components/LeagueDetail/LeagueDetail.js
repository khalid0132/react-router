import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarker, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeagueDetail.css';
import maleImg from './male.png';
import femaleImg from './female.png';

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
    
    //IMAGE SHOWS ON PAGE DEPENDING ON MALE OR FEMALE
    let leagueImage = leagueDetail.strGender;
    const imgUrl = leagueImage === 'Male' ? maleImg : femaleImg;
    // let imgUrl;
    // if(leagueImage === 'Male'){
    //     imgUrl = maleImg;
    // }
    // else{
    //     imgUrl = femaleImg;
    // }
    
    return (
        <Container>
            <img className="image-responsive" src={strBanner} alt=""/>
            <Row className="justify-content-md-center text-left rounded bg-success text-white">
                <Col md="8" className="w-50 ">
                        <h4>{strLeague} </h4>
                        <p><FontAwesomeIcon icon={faMapMarker}/> Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                </Col>
                <Col md="4" className="pt-4">
                    <p><img style={{width: '300px'}} src={imgUrl} alt=""/></p> 
                </Col>
            </Row>
                <Row className="mt-5">
                    <Col className="ml-5 mr-5 text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed hic sit quidem. Quisquam illo, molestiae pariatur quod impedit magnam dolores ut eveniet, illum distinctio totam quidem numquam! Pariatur voluptates repellat temporibus recusandae unde doloribus perspiciatis expedita corrupti at, neque debitis rerum laudantium quasi consequuntur esse, sunt aperiam reiciendis ipsam in. Repellat, beatae. Mollitia itaque illum tempora voluptatum earum totam voluptate optio iusto ab alias omnis esse debitis nesciunt recusandae, voluptatem corrupti adipisci laboriosam possimus incidunt perferendis distinctio! Cupiditate consectetur tempore aut, voluptatem rerum dolores nemo quo numquam similique ipsum error commodi ex nesciunt inventore dolore rem vel! Tempora, autem consequuntur?
                    </Col>
                    </Row>
                <Row className="pt-5">
                    <Col>
                        
                       <a href="https://www.facebook.com/groups/completewebdevelopment3/?multi_permalinks=495133901506539"> <span><FontAwesomeIcon icon={faFacebook}/></span></a>
                       <a href="https://twitter.com/jhankarmahbub"> <span><FontAwesomeIcon icon={faTwitter}/></span></a>
                       <a href="https://www.youtube.com/channel/UCs2cWnd7Sb1eXT-50oMOxlw"> <span><FontAwesomeIcon icon={faYoutube}/></span></a>
                       <a href="https://www.instagram.com/jhankarmahbub/"> <span><FontAwesomeIcon icon={faInstagram}/></span></a>
                  
                    </Col>
                </Row>
        </Container>
    );
};
export default LeagueDetail;