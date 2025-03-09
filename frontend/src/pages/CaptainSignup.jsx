import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {CaptainDataContext} from '../context/CaptainContext';
const CaptainSignup = () => {
    const {captain,setCaptain} = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        });
        const captainData = {
            fullname: { firstname: firstName, lastname: lastName }, 
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <img className='w-16 mb-10' src="https://cdn1.iconfinder.com/data/icons/transportation-85/65/uber-512.png" alt="" />

                    <h3 className='text-lg font-medium mb-2'>What's our captain's name</h3>
                    <div className='flex gap-2 mb-6'>
                        <input type="text" required placeholder='First Name' className='bg-[#eeeeee] w-1/2 px-4 py-2 border rounded text-lg placeholder:text-base' value={firstName} onChange={(e) => { setFirstName(e.target.value); }} />

                        <input type="text" required placeholder='First Name' className='bg-[#eeeeee] w-1/2 px-4 py-2 border rounded text-lg placeholder:text-base' value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input type="email" required placeholder='example@gmail.com' className='w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-6' value={email} onChange={(e) => { setEmail(e.target.value); }} />

                    <h3 className='text-lg font-medium mb-2'>Password</h3>
                    <input className="w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-6" type="password" required placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value); }} />

                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                            type="text"
                            placeholder='Vechile Color'
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleColor}
                            onChange={(e) => { setVehicleColor(e.target.value); }}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type="text"
                            placeholder='Vehicle Plate'
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex gap-4 mb-7'>
                        <input 
                        type='text'
                        placeholder='Vehicle Capacity'
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        value={vehicleCapacity}
                        onChange={(e) => { setVehicleCapacity(e.target.value); }}
                        >
                        </input>
                        <select
                            placeholder='Vechile Type'
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => { setVehicleType(e.target.value); }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>    
                            <option value="car">car</option>
                            <option value="auto">auto</option>
                            <option value="moto">moto</option>

                        </select>
                        
                    </div>
                    <button className='w-full bg-[#111] text-white font-semibold px-4 py-2 rounded text-xl mb-3'>Create captain account</button>
                    <p className='text-center'> Already have an Account ?<Link to="/captain-login" className='text-blue-700'> Login here</Link> </p>
                </form>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    );
};

export default CaptainSignup;

// captainuser@gmail.com