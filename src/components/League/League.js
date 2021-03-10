import React, { useState } from 'react';
import './League.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import LeagueDetail from '../LeagueDetail/LeagueDetail';
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


    const [gender, setGender] = useState(false);
    return (
        <div className="single-design">

            {gender.toString()}

            <img style={{width: '100px'}} src={strBadge} alt=""/>
            <h3> {strLeague} </h3>
            <p> <small>Sports Type: {strSport}</small></p>
            <Button onClick= {()=> handleClick(idLeague) && setGender(!gender)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            <LeagueDetail gender ={gender}></LeagueDetail>
        </div>
    );
};

export default League;