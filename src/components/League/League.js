import React, { useState } from 'react';
import './League.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
// import { Container } from 'react-bootstrap';

const League = (props) => {
    const [leagues, setLeagues] = useState([])
    const {strLeague, strSport, idLeague} = props.league;
    const history = useHistory();
    const handleClick = (idLeague) =>{
        const url = `/league/${idLeague}`;
        history.push(url);
    }

    useEffect( () =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues[0]))
    },[idLeague])
    const {strBadge} = leagues;

    return (
        <div className="single-design">
            <img style={{width: '100px'}} src={strBadge} alt=""/>
            <p> {strLeague} </p>
            <p> <small>Sports Type: {strSport}</small></p>
            <Button onClick= {()=> handleClick(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    );
};

export default League;