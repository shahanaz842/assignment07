import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';
import StatusCard from '../TaskStatus/TaskStatus'
import Container from '../StatusCard/Container/Container';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from './ResolvedTask/ResolvedTask';


const CustomerTickets = ({ fetchPromise, handleStatusCard, handleTaskCard, countProgress, handleResolvedCard, resolvedCount }) => {



    const tickets = use(fetchPromise);



    // console.log(tickets)
    return (

        <div className='bg-gray-100'>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 container mx-auto
             bg-gray-100 p-10'>
                <div className='grid col-span-4'>
                    <h2 className='text-2xl font-semibold p-3'>Customer Tickets</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            tickets.map(ticket => <Ticket key={ticket.id}
                                handleStatusCard={handleStatusCard}
                                handleTaskCard={handleTaskCard}
                                ticket={ticket}></Ticket>)
                        }
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-2xl font-semibold p-3'>Task Status</h2>
                    <div>
                        {
                            countProgress.map(count => <TaskStatus key={count.id} count={count} handleResolvedCard={handleResolvedCard}
                            ></TaskStatus>)
                        }
                    </div> 
                    <div>
                    <h2 className='text-2xl font-semibold p-3'>Resolved Task</h2>
                    <div>
                        {
                            resolvedCount.map(resolved => <ResolvedTask key={resolved.id}
                                resolved={resolved}></ResolvedTask>)
                        }
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default CustomerTickets;