import React from 'react';

const WaitingForDriving = (props) => {
    return (
        <div>
            <h5 className='text-center w-[93%] absolute top-0' onClick={() => { props.setWaitingForDriver(false); }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
            </h5>
            <div className='flex items-center justify-between'>
                <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" className='h-12' />
                <div>
                    <h2 className='text-lg font-medium'>Kunal </h2>
                    <h4 className='text-xl font-semibold -mb-1 -mt-1'>MP 37 MV 1925</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>
            <div className='flex justify-between flex-col'>
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

export default WaitingForDriving;