import React from 'react';
import { Link } from 'react-router-dom';
const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  w-full pt-8 h-screen flex justify-between flex-col'>
                <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className='bg-white pb-7 px-4 py-4'>
                    <h2 className='text-3xl font-bold'>Get started with uber</h2>
                    {/* <button className='bg-black text-white w-full mt-4 rounded py-3'>Continue</button> */}
                    <Link to="/login" className="bg-black text-white w-full mt-4 rounded py-3 text-center block">Continue</Link>
                </div>
            </div>
        </div>
    );
};

export default Start;