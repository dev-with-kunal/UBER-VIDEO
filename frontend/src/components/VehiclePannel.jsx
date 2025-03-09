import React from 'react';

const VehiclePannel = (props) => {
    return (
        <div>
            <h5 className=' text-center' onClick={() => { props.setVehiclePannelOpen(false); }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
            </h5>
            <h2 className='text-2xl font-semibold mb-5'>Choose a Vechicle</h2>
            <div className='flex item-center justify-between bg-white-200 p-3 border-2 active:border-black rounded-xl mb-2' onClick={()=>{props.setConfirmRidePannel(true);}
            }>
                <img className="h-20 w-21" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base '>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm '>2 mins away</h5>
                    <p className='font-normal text-xs text-black'>Affordable, compact rides</p>

                </div>
                <h2 className='text-xl font-semibold'>$193.00</h2>
            </div>
            <div className='flex item-center justify-between bg-white-200 p-3 border-2 active:border-black rounded-xl mb-2' onClick={()=>{
                props.setConfirmRidePannel(true);
            }}>
                <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base '>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm '>3 mins away</h5>
                    <p className='font-normal text-xs text-black'>Affordable, motorcycle rides</p>

                </div>
                <h2 className='text-xl font-semibold'>$65.00</h2>
            </div>
            <div className='flex item-center justify-between bg-white-200 p-3 border-2 active:border-black rounded-xl mb-2' onClick={()=>{
                props.setConfirmRidePannel(true);
            }}>
                <img className="h-20" src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base '>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm '>2 mins away</h5>
                    <p className='font-normal text-xs text-black'>Affordable, auto rides</p>

                </div>
                <h2 className='text-xl font-semibold'>$185.00</h2>
            </div>
        </div>
    );
};

export default VehiclePannel;