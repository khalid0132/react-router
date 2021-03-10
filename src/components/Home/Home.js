import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';



const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])

    return (
            <div className ="home-design">
                <h1 className ="top-header">Sports Mania </h1>
                {/* <h2>Number of leagues: {leagues.length} </h2> */}
               <div className="league-design">
               {
                    leagues.map(league => <League league = {league}></League>)
                }
               </div>
            </div>
    );
};

export default Home;