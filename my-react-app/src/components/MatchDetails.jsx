// MatchDetails.jsx

import React from 'react';

const MatchDetails = (props) => {
    const { detail, index } = props;

    return (
        <div className='flex flex-col  w-3/4'>
            <div className='flex flex-wrap justify-around'>
                <div className='flex flex-col items-center' key={index}>
                    <h2 className='text-center'>Match {index + 1}</h2>
                    <div className='flex flex-col' key={index}>
                        <div className="first-five m-4 flex">
                            {detail.info.participants.slice(0, 5).map((participant, pIndex) => (
                                <div className='player-stats-container w-25' key={pIndex}>
                                    <p className='text-center text-gray-500 dark:text-gray-400 my-1.5 mr-2' key={pIndex}>
                                        Oyuncu {pIndex + 1} :  <br />
                                        {/* {participant.championName} <br />
                                        {participant.summonerName}  <br /> */}
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${participant.championName}.png`} alt="" />
                                    </p>
                                    <p className='text-center text-gray-700 dark:text-gray-500 my-1.5'>
                                        {participant.kills}  / {participant.deaths} / {participant.assists}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="second-five m-4 flex">
                            {detail.info.participants.slice(5, 10).map((participant, pIndex) => (
                                <div className='player-stats-container w-25' key={pIndex}>
                                    <p className='text-center text-gray-500 dark:text-gray-400 my-1.5 mr-2' key={pIndex}>
                                        Oyuncu {pIndex + 1} :  <br />
                                        {/* {participant.championName} <br />
                                        {participant.summonerName}  <br /> */}
                                        <img className='w-10' src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${participant.championName}.png`} alt="" />
                                    </p>
                                    <p className='text-center text-gray-700 dark:text-gray-500 my-1.5'>
                                        {participant.kills}  / {participant.deaths} / {participant.assists}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className='text-left text-gray-500 dark:text-gray-400 my-1.5'>Toplam Süre: {Math.round(detail.info.gameDuration / 60)} Dakika</p>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
