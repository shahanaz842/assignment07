import React from 'react';
import Ticket from '../Ticket/Ticket';
import { toast } from 'react-toastify';

const TaskStatus = ({ count, handleResolvedCard}) => {
    // console.log(count)
    const handleTaskBtn = () =>{
        toast('Task Completed');
        handleResolvedCard(count)
    }

    return (
        <div className='mb-3 shadow-sm'>
            
            <div className='bg-white p-3 rounded'>
               <h1>{count.title}</h1>
               <button onClick={handleTaskBtn} className='btn bg-green-500 text-md
                text-white py-2 w-full mt-3'>Complete</button>
             
            </div>
        
        </div>
    );
};

export default TaskStatus;