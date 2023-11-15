import React from "react";
import warwickBg from '../assets/warwickBg.mp4'

const Main = () =>{
    return(
        <div className="main">
            <video className="w-full h-screen object-cover brightness-50" src={warwickBg} autoPlay loop muted />
        </div>
    )
}

export default Main