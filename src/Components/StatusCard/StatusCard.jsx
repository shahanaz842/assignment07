import React from 'react';
import Container from './Container/Container';

const StatusCard = ({countProgress, resolvedCount}) => {
    // console.log(countProgress)
    return (
        <Container>
           <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-[100px] mx-[35px] justify-between'>
        <div
          className='h-[250px] rounded-sm flex gap-5 flex-col items-center justify-center bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] '
        >
          <img className='absolute left-[40px]' src="/src/assets/vector1.png" alt="" />
          <img className='transform scale-x-[-1] absolute left-[360px]' src="/src/assets/vector1.png" alt="" />
          
          <h2 className='text-2xl text-white'>In Progress</h2>
          <p className='text-5xl font-bold text-white'>{countProgress.length}</p>
        </div>
        <div className='h-[250px] rounded-sm flex flex-col items-center justify-center bg-linear-to-bl from-[#54CF68] to-[#00827A]'>
             <img className='absolute right-[360px]' src="/src/assets/vector1.png" alt="" />
          <img className='transform scale-x-[-1] absolute right-[70px]' src="/src/assets/vector1.png" alt="" />
          
          <h2 className='text-2xl text-white '>Resolved</h2>
          <p className='text-5xl font-bold text-white'>{resolvedCount.length}</p>
        </div>
      </div>
    </div>
       </Container>
    );
};

export default StatusCard;