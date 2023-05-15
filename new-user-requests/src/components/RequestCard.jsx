import React from 'react'

const RequestCard = ({id, businessArea, firstName, lastName, jobTitle, lineManager, startDate, completed, requests, setRequests}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        setRequests(reqs => { return reqs.filter(r => r.id !== id) })
    }

    const handleComplete = (e) => {
        e.preventDefault()
        const newRequests = [...requests];
        const item = newRequests.find(i => i.id === id);
        item.completed = true;
        setRequests(newRequests);
    }

    return (
        <div className='max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left'>
            <span className={`bg-teal-100 mb-1 inline-flex text-teal-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}>
                {businessArea}
            </span>
            <h2 className="mt-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {firstName} {lastName}
            </h2>
            <h3 className="mb-4 text-md font-semibold tracking-tight text-pink-500 dark:text-white">
                {jobTitle}
            </h3>
            <h3 className="mt-2 mb-2 text-xs font-normal tracking-tight text-gray-500 dark:text-white">
                Manager {lineManager}
            </h3>
            <p className='mb-3 text-xs text-gray-500'>Start Date: {startDate}</p>
            <div className='flex justify-start items-center gap-3 mt-8'>
                <button 
                    onClick={handleComplete} 
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center hover:text-white rounded-lg hover:bg-emerald-600 ${completed ? 'bg-emerald-500 text-white' : 'text-slate-800 bg-slate-100'} transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                    {completed ? (
                    <>
                        <span>Completed</span>
                    </>
                    ) : (
                    <>
                        <span>Complete</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 -mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </>
                    )}
                </button>
                <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:text-white bg-red-500 rounded-lg hover:bg-red-700 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Delete
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 -mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default RequestCard
