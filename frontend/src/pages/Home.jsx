import React, { useState, useContext, useRef } from 'react';
import { userDataContext } from '../context/UserContext';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';
import VehiclePannel from '../components/VehiclePannel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriving from '../components/WaitingForDriving';
const Home = () => {
    const [pickUp, setPickUp] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [ConfirmRidePannel, setConfirmRidePannel] = useState(false);
    const [lookingForDriver, setLookingForDriver] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePannelRef = useRef(null);
    const ConfirmRidePannelRef = useRef(null);
    const lookingForDriverRef = useRef(null);
    const waitingForDriverRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    }
    const { user, setUser } = useContext(userDataContext);
    const [vehiclePannelOpen, setVehiclePannelOpen] = useState('');
    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, { height: '70%', padding: '20' });
            gsap.to(panelCloseRef.current, { opacity: 1 });
        } else {
            gsap.to(panelRef.current, { height: '0%', padding: '0' });
            gsap.to(panelCloseRef.current, { opacity: 0 });
        }
    }, [panelOpen]);
    useGSAP(function () {
        if (vehiclePannelOpen) {
            gsap.to(vehiclePannelRef.current, { transform: 'translateY(0)' });
        } else {
            gsap.to(vehiclePannelRef.current, { transform: 'translateY(100%)' });
        }
    }, [vehiclePannelOpen]);


    useGSAP(function () {
        if (lookingForDriver) {
            gsap.to(lookingForDriverRef.current, { transform: 'translateY(0)' });
        } else {
            gsap.to(lookingForDriverRef.current, { transform: 'translateY(100%)' });
        }
    }, [lookingForDriver]);

    
    useGSAP(function () {
        if (ConfirmRidePannel) {
            gsap.to(ConfirmRidePannelRef.current, { transform: 'translateY(0)' });
        } else {
            gsap.to(ConfirmRidePannelRef.current, { transform: 'translateY(100%)' });
        }
    }, [ConfirmRidePannel]);

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, { transform: 'translateY(0)' });
        } else {
            gsap.to(waitingForDriverRef.current, { transform: 'translateY(100%)' });
        }
    }, [waitingForDriver]);
    return (
        <div className='h-screen relative overflow-hidden' >
            <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
                <img className="h-full w-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-screen absolute flex flex-col justify-end top-0 w-full'>
                <div className='h-[30%]  p-5 bg-white relative'>
                    <h5 onClick={() => { setPanelOpen(false); }} ref={panelCloseRef} className='text-2xl absolute top-6 right-6 opacity-0'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={
                        (e) => {
                            submitHandler(e);
                        }
                    }>
                        <div className=' line absolute h-16 w-1 bg-gray-900 top-[45%] left-10 rounded-full'>   </div>
                        <input type="text" className='bg-[#eee] text-lg px-8 py-2 text-base rounded-lg w-full mt-5' placeholder="Add a pick-up location"
                            value={pickUp}
                            onChange={(e) => {
                                setPickUp(e.target.value);
                            }}
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                        />
                        <input type="text" className='bg-[#eee] text-lg px-8 py-2 text-base rounded-lg w-full mt-3' placeholder="Enter you Destination"
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                        />
                    </form>
                </div>
                <div className='h-0 bg-white' ref={panelRef}>
                    <LocationSearchPannel setPanelOpen={setPanelOpen} setVehiclePannelOpen={setVehiclePannelOpen}></LocationSearchPannel>
                </div>
            </div>
            <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12' ref={vehiclePannelRef}>
                <VehiclePannel setVehiclePannelOpen={setVehiclePannelOpen} setConfirmRidePannel={setConfirmRidePannel}></VehiclePannel>
            </div>
            <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12' ref={ConfirmRidePannelRef}>
                <ConfirmRide setLookingForDriver={setLookingForDriver} setConfirmRidePannel={setConfirmRidePannel}></ConfirmRide>
            </div>
            <div  className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12' ref={lookingForDriverRef}>
                <LookingForDriver setLookingForDriver={setLookingForDriver} ></LookingForDriver>
            </div>
            <div  ref={waitingForDriverRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <WaitingForDriving setWaitingForDriver={setWaitingForDriver}></WaitingForDriving>
            </div>
        </div>
    );
}
export default Home;