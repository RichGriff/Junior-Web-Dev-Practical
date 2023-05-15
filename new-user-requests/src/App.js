import React, { useEffect, useMemo, useState } from "react";
import './App.css';
import data from './data/data.json'
import RequestCard from './components/RequestCard';
import { filterOptions } from './data/filterOptions'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [requests, setRequests] = useState([]);
  const [selectedBusinessArea, setSelectedBusinessArea] = useState();

  useEffect(() => {
    setRequests(data);
  }, []);

  function getFilteredList() {
    if (!selectedBusinessArea) {
      return requests;
    }
    return requests.filter((item) => item.businessArea === selectedBusinessArea);
  }

  var filteredList = useMemo(getFilteredList, [selectedBusinessArea, requests]);

  function handleBusinessChange(event) {
    if(selectedBusinessArea === event.target.innerText) {
      return setSelectedBusinessArea(null)
    }
    return setSelectedBusinessArea(event.target.innerText);
  }

  return (
    <div className="flex flex-col justify-center items-center w-3/4 m-auto">

      {/* New User Request Form */}
      <div className='w-full h-16 flex justify-between items-center my-4'>
        <img src='/pobl-logo.png' className="w-28" alt="logo" />
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New User Request
        </button>
      </div>

      <div className='flex justify-center items-center gap-4'>
        {filterOptions.map((item, index) => (
          <button
            id={index}
            onClick={handleBusinessChange}
            className={`${(selectedBusinessArea === item.value) ? 'bg-violet-500 text-white hover:bg-violet-400' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'} rounded-md py-1 px-3`}
          >
            {item.value}
          </button>
        ))}
      </div>
      
      <div className='flex flex-row justify-center items-center gap-4 mt-10'>
        {filteredList.map((element, index) => (
          <RequestCard {...element} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
