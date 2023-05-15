import React, { useEffect, useMemo, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import './App.css';
import data from './data/data.json'
import RequestCard from './components/RequestCard';
import { filterOptions } from './data/filterOptions'
import NewRequestForm from "./components/NewRequestForm";

function App() {
  let [isOpen, setIsOpen] = useState(false)
  const [requests, setRequests] = useState([]);
  const [selectedBusinessArea, setSelectedBusinessArea] = useState();

  useEffect(() => {
    setRequests([]);
  }, []);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
        <button onClick={openModal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New User Request
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <NewRequestForm closeModal={closeModal} requests={requests} setRequests={setRequests} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* List Filter Options */}
      <div className='flex justify-center items-center gap-4'>
        {filterOptions.map((item, index) => (
          <button
            id={item.id}
            key={index}
            onClick={handleBusinessChange}
            className={`${(selectedBusinessArea === item.value) ? 'bg-violet-500 text-white hover:bg-violet-400' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'} rounded-md py-1 px-3`}
          >
            {item.value}
          </button>
        ))}
      </div>
      
      <div className='flex flex-row flex-wrap justify-center items-center gap-4 mt-10'>
        {(filteredList.length > 0) ? filteredList.map((element, index) => (
          <RequestCard {...element} key={index} requests={requests} setRequests={setRequests} />
        )) :
        (
          <p className="text-sm text-slate-400">No Requests</p>
        )}
      </div>
    </div>
  );
}

export default App;



// export default function MyModal() {

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center">
//         <button
//           type="button"
//           onClick={openModal}
//           className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//         >
//           Open dialog
//         </button>
//       </div>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Payment successful
//                   </Dialog.Title>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       Your payment has been successfully submitted. We’ve sent
//                       you an email with all of the details of your order.
//                     </p>
//                   </div>

//                   <div className="mt-4">
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       onClick={closeModal}
//                     >
//                       Got it, thanks!
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   )
// }

