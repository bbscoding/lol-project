import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import './index.css'
import Main from './components/Main';
import HomepageDiv from './components/HomepageDiv';
import MatchDetails from './components/MatchDetails';
import MatchesListing from './components/MatchesListing';

function App() {
  const apiKey = "RGAPI-d5deefc3-6a82-4361-b411-05798abc12c6";
  const [inputValue, setInputValue] = useState('');
  const [clicked, setClicked] = useState(false)
  const [matchIds, setMatchIds] = useState([]);
  const [matchDetails, setMatchDetails] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleButtonClick = () => {
    setClicked(true)
    axios.get(`https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputValue}?api_key=${apiKey}`)
      .then(response => {
        const puuid = response.data.puuid;
        console.log(response.data);

        // İkinci API çağrısını yap
        return axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${apiKey}`);
      })
      .then(matchResponse => {
        console.log("Match IDs:");
        console.log(matchResponse.data); // Tüm maç ID'lerini göster
        setMatchIds(matchResponse.data); // Maç ID'lerini state'e kaydet

        // Üçüncü API çağrısını yap
        return Promise.all(matchResponse.data.map(id =>
          axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${apiKey}`)
        ));
      })
      .then(matchDetailsResponse => {
        console.log("Match Details:");
        console.log(matchDetailsResponse.map(response => response.data)); // Tüm maç detaylarını göster
        setMatchDetails(matchDetailsResponse.map(response => response.data)); // Maç detaylarını state'e kaydet
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Main />
      <div className='w-full h-screen flex flex-col justify-center items-center absolute top-0 text-white'>
        {!clicked &&
          <HomepageDiv
            inputValue={inputValue}
            handleChange={handleChange}
            handleButtonClick={handleButtonClick}
            clicked={clicked}
            matchIds={matchIds}
            matchDetails={matchDetails}
          />
        }

        {clicked && (

          <div>
            {/* <div>
              <p>Match IDs:</p>
              <div>
                {matchIds.map((id, index) => (
                  <div key={index}>{id}</div>
                ))}
              </div>
            </div> */}
            <div className='flex flex-col'>
              <div>
                <h2 className='text-5xl text-purple-800 my-2.5 text-center'>Match Details</h2>
              </div>
              <div className='flex flex-wrap justify-around'></div>
            </div>
            <div className='matchDetails-wrapping-container flex flex-col'>
              {/* {matchDetails.map((detail, index) => (
                <MatchDetails key={index} detail={detail} index={index} />
              ))} */}
              {matchDetails.map((detail, index) => (
                <div className="matches-listing-container">
                  <MatchesListing inputValue={inputValue} key={index} detail={detail} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;


