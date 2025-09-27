import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default Container;