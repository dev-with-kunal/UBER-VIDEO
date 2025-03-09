import React from 'react';

const LocationSearchPannel = (props) => {
    const locations = [
        {
            id: 1,
            location: 'Narbada Hospital bhopal road,Jabalpur'
        },
        {
            id: 2,
            location: 'C21 Mall Near ravi shop,Bhopal'
        },
        {
            id: 3,
            location: 'Kriti hospital ,Jabalpur'
        },
        {
            id: 4,
            location: 'Shivam talkies mall road, Manali'
        },
        {
            id: 5,
            location: 'S12 Near Alpha Mall Behind Sharma Medical,Jabalpur'
        },
    ];
    return (
        <div>
            {locations.map((location) => {
                return (
                    <div key={location.id} className='flex gap-4 border-2 rounded-xl border-grey-400 active:border-black p-3 items-center justify-start my-2' onClick={()=>{
                        props.setVehiclePannelOpen(true);
                        props.setPanelOpen(false);
                    }}>
                        <h2 className='h-8 w-12 bg-[#eee] rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className="font-medium">{location.location}</h4>
                    </div>
                );
            })}
            
        </div>
    );
};

export default LocationSearchPannel;