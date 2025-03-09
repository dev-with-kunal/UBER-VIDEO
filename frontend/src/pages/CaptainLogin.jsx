import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainLogin = () => {
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
        console.log(React.useContext(CaptainDataContext));
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleSubmit = async (e) => {
            e.preventDefault();
            const captainData ={
                email: email,
                password: password
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
            if(response.status === 200){
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
            setEmail('');
            setPassword('');
        }
    
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <img className='w-16 mb-10' src="https://cdn1.iconfinder.com/data/icons/transportation-85/65/uber-512.png" alt="" />
                    
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={ (e)=>{
                        setEmail(e.target.value);
                    }} type="email" required placeholder='example@gmail.com' className='w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-7'/>

                    <h3 className='text-lg font-medium mb-2'>Password</h3>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value);    
                    }} className="w-full bg-[#eeeeee] px-4 py-2 border rounded text-xl placeholder:text-base mb-7" type="password" required placeholder='Password' />

                    <button className='w-full bg-[#111] text-white font-semibold px-4 py-2 rounded text-xl mb-3'>Login</button>
                    <p className='text-center'> Join a fleet ? <Link to="/captain-signup" className='text-blue-700'> Register as Captain</Link> </p>
                </form>
            </div>
            <div>
                <Link to="/login" className='w-full bg-[#ff8d07] flex items-center justify-center text-white font-semibold px-4 py-2 rounded text-xl mb-7'>Sign in as User</Link>
            </div>
        </div>
    );
};

export default CaptainLogin;