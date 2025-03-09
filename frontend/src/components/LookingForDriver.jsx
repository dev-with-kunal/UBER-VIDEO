import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='text-center w-[93%] absolute top-0' onClick={() => { props.setLookingForDriver(false); }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
            </h5>
            <h2 className='text-2xl font-semibold mb-5'>Looking for a driver</h2>
            <div className='flex justify-between flex-col'>
                <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" className='h-20' />
                <div className='mt-5 w-full'>
                    <div className='flex item-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className='font-medium text-lg'> 562/11-A</h3>
                            <p className='text-gray-600 text-base'>Khankhariya Talad, Ahemdaabad</p>
                        </div>

                    </div>
                    <div className='flex item-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className='font-medium text-lg'> 562/11-A</h3>
                            <p className='text-gray-600 text-base'>Khankhariya Talad, Ahemdaabad</p>
                        </div>
                    </div>
                    <div className='flex item-center gap-5 p-3 border-b-2'>
                        <i className="ri-cash-line"></i>
                        <div>
                            <h3 className='font-medium text-lg'>$ 193</h3>
                            <p className='text-gray-600 text-base'>Cash</p>
                        </div>
                    </div>
                </div>
                <button className=' mt-5 w-full bg-green-600 text-white p-2 rounded-lg font-semibold border-2 border-solid'>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default LookingForDriver;