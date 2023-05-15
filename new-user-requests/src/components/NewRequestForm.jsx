import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const NewRequestForm = ({ closeModal, requests, setRequests }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [lineManager, setLineManager] = useState('')
    const [startDate, setStartDate] = useState('')
    const [businessArea, setBusinessArea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let newRequest = {
            id: uuidv4(),
            firstName,
            lastName,
            jobTitle,
            lineManager,
            startDate,
            businessArea,
            completed: false
        }
        setRequests([...requests, newRequest])
        closeModal()
    }

    return (
        <div className='w-full p-4 bg-white border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left'>
            <form>
                <div className='flex justify-start items-center gap-4'>
                    <div className="mb-6 w-full">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text" 
                            id="firstName" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John" 
                            required />
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input 
                            value={lastName}
                            onChange={(e) => setLasttName(e.target.value)}
                            type="text" 
                            id="lastName" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Doe" 
                            required />
                    </div>
                </div>
                <div className="mb-6 w-full">
                    <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                    <input 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        type="text" 
                        id="jobTitle" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Junior Web Developer" 
                        required />
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <div className="mb-6 w-full">
                        <label htmlFor="lineManager" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Line Manager</label>
                        <input 
                            value={lineManager}
                            onChange={(e) => setLineManager(e.target.value)}
                            type="text" 
                            id="lineManager" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Jane Doe" 
                            required />
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input 
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            type="date" 
                            id="startDate" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Business Area
                    </label>
                    <select
                        value={businessArea}
                        onChange={(e) => setBusinessArea(e.target.value)}
                        id="businessArea"
                        name="businessArea"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="" disabled hidden>Select an area</option>
                        <option value='IT' label='IT' />
                        <option value='Finance' label='Finance' />
                        <option value='HR' label='HR' />
                        <option value='Housing' label='Housing' />
                        <option value='Care' label='Care' />
                    </select>
                </div>
                <button 
                    onClick={handleSubmit}
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                </button>
            </form>

        </div>
    )
}

export default NewRequestForm
