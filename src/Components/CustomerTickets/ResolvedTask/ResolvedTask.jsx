import React from 'react';

const ResolvedTask = ({resolved}) => {
    console.log(resolved)
    return (
        <div className='bg-[#E0E7FF] p-3 mt-3 rounded'>
            <h2>{resolved.title}</h2>
        </div>
    );
};

export default ResolvedTask;