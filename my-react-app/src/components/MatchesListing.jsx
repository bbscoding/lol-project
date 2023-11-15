import React from "react";

const MatchesListing = (props) => {
    const { detail, index } = props;

    const selectedPlayer = detail.info.participants.find(participant => participant.summonerName.toLowerCase() === props.inputValue.toLowerCase());
    const winCondition = selectedPlayer.win
    return (

        <div className={`match-listing-container my-2 flex bg-opacity-30 rounded border-solid border-2 backdrop-blur-lg p-5 ${winCondition ? "bg-blue-500 border-blue-500" : " bg-red-600 border-red-600"}`}>

            {/* Eşleşen oyuncunun bazı değerlerini göster */}
            {selectedPlayer && (
                <div className="selected-player-detail-container flex">
                    <div className="selected-player-champion-image">
                        <img className="player-icon w-20 rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${selectedPlayer.championName}.png`} alt="" />
                    </div>
                    <div className="selected-player-champion-details flex">
                        <div className="selected-player-kda-details flex flex-col">
                            <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">Oyuncu Adı: {selectedPlayer.summonerName}</p>
                            <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">{selectedPlayer.kills} / {selectedPlayer.deaths} / {selectedPlayer.assists}</p>
                            <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">KDA: {selectedPlayer.challenges.kda}</p>
                        </div>
                        <div className="flex flex-col relative items-container">
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
                            <div className="trinket-area absolute right-[74px] top-[14px]">
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
