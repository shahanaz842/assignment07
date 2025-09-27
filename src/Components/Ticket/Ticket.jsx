import React from 'react';
import { toast } from 'react-toastify';

const Ticket = ({ticket, handleStatusCard, handleTaskCard}) => {
    // console.log(ticket)
    
    const handleTicket =()=>{
        
        handleStatusCard(ticket)
        handleTaskCard(ticket)
        toast('Task in progress')
    }
   
   
  const {title, description, id ,customer, priority, status, createdAt} = ticket;
  return (
    <div onClick={handleTicket} className='p-5 rounded-sm shadow-sm bg-white shadow-gray-300 mb-5 space-y-2'>
      <div className='flex justify-between items-center gap-5'>
         <h1 className='text-[20px]'>{title}</h1>
         <p className={`py-1 px-2 rounded-2xl ${status === 'Open'? 'bg-green-300 text-green-700': 'bg-amber-300 text-amber-700'}`}>{status} </p>
      </div>
      <p className='text-gray-500 text-[18px]'>{description} </p>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <p className='text-gray-500'>{id} </p>
          <p className={`py-1 px-2 rounded-2xl ${priority === 'Medium'? ' text-green-700': ' text-red-700'}`}>{priority} </p>
        </div>
        <div className='flex gap-2'>
          <p className='text-gray-500'>{customer} </p>
          <p className='text-gray-500'>{createdAt} </p>
        </div>
      </div>
   
    </div>
    
  );
};

export default Ticket;