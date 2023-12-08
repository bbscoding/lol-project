import axios from 'axios';
import React, { useState, useEffect } from 'react';
const MatchesListing = (props) => {
    const { detail, index } = props;
    const [matchingPerk, setMatchingPerk] = useState(null);

    const selectedPlayer = detail.info.participants.find(participant => participant.summonerName.toLowerCase() === props.inputValue.toLowerCase());
    // console.log(selectedPlayer)

    const winCondition = selectedPlayer.win
    // useEffect(() => {
    //     axios.get('https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/runesReforged.json')
    //         .then(response => {
    //             const runes = response.data;
    //             selectedPlayer.perks.styles.forEach(item => {
    //                 const valueToMatch = item.selections[0].perk.toString().slice(0, -2) + '00';
    //                 runes.forEach(rune => {
    //                     console.log(rune)
    //                     console.log("dur")
    //                     // rune.slots.forEach(slot => {
    //                     //     slot.runes.forEach(perk => {
    //                     //         if (rune.id == valueToMatch) {
    //                     //             console.log(rune)
    //                     //             setMatchingPerk(`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/${perk.icon}`);
    //                     //             console.log("dur")
    //                     //         }
    //                     //     });
    //                     // });
    //                 });
    //             });
    //             console.log("cycle ends")
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);
    return (
        <div className={`match-listing-container my-2 flex bg-opacity-30 rounded border-solid border-2 backdrop-blur-lg p-5 ${winCondition ? "bg-blue-500 border-blue-500" : " bg-red-600 border-red-600"}`}>

            {/* Eşleşen oyuncunun bazı değerlerini göster */}
            {selectedPlayer && (
                <div className="selected-player-detail-container flex">

                    <div className="selected-player-champion-details flex flex-col">
                        <div className="flex">
                            <div className="selected-player-champion-image">
                                <img className="player-icon w-12 rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${selectedPlayer.championName}.png`} alt="" />
                                <div>
                                    {/* {console.log(matchingPerk)}
                                    {console.log("matchingPerk")} */}
                                    {/* {matchingPerk && <img className="player-icon w-12 rounded-full" src={matchingPerk} alt="" />} */}
                                </div>

                            </div>
                            <div>
                                {/* <div>
                                    {selectedPlayer.perks.styles && selectedPlayer.perks.styles
                                        .filter(item => item)
                                        .map(item => (
                                            <p key={item.style}>{item.style}</p>
                                        ))}
                                </div> */}
                            </div>
                            {/* Selected Player adı 
                            <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">Oyuncu Adı: {selectedPlayer.summonerName}</p> 
                            */}
                            <div className="flex flex-col">
                                <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">{selectedPlayer.kills} / {selectedPlayer.deaths} / {selectedPlayer.assists}</p>
                                <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">KDA: {selectedPlayer.challenges.kda.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex  relative items-container">
                            <div className="first-items-row flex">
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item0}.png`} alt="" />
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item1}.png`} alt="" />
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item2}.png`} alt="" />
                            </div>
                            <div className="second-items-row flex">
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item3}.png`} alt="" />
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item4}.png`} alt="" />
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item5}.png`} alt="" />
                            </div>
                            <div className="trinket-area">
                                <img className="w-8" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/item/${selectedPlayer.item6}.png`} alt="" />
                            </div>
                        </div>

                    </div>
                    {/* Diğer değerleri ekleyebilirsiniz */}
                </div>
            )}
            <div className="player-icons flex flex-col justify-center">
                <div className='team-1 flex' key={`team-1-${index}`}>
                    {detail.info.participants.slice(0, 5).map((participant, pIndex) => (
                        <div className='player-icon-container w-10' key={`team-1-${index}-${pIndex}`}>
                            <img className="player-icon" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${participant.championName}.png`} alt="" />
                        </div>
                    ))}
                </div>

                <div className='team-2 flex' key={`team-2-${index}`}>
                    {detail.info.participants.slice(5, 10).map((participant, pIndex) => (
                        <div className='player-icon-container w-10' key={`team-2-${index}-${pIndex}`}>
                            <img className="player-icon" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${participant.championName}.png`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MatchesListing;
