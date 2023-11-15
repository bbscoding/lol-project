import React from 'react';

const HomepageDiv = (props) => {
  return (
    <div className='homepageDiv'>
      <div className="mb-6">
        <div className='text-center mb-20'>
          <p className="text-white text-2xl lg:text-6xl uppercase leading-none font-compressed">BBS REACT API AXIOS PROJECT</p>
          <h1 className="text-6xl lg:text-8xl text-white font-black uppercase leading-none">SEE YOUR LOL STATS </h1>
        </div>
        <input type="text" value={props.inputValue} onChange={props.handleChange} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <button onClick={props.handleButtonClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get Last 5 Matches
        </span>
      </button>
    </div>
  );
}

export default HomepageDiv;
