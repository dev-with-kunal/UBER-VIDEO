import React ,{useState,useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {userDataContext} from '../context/UserContext';
const UserSignup = () => {
    const navigate = useNavigate();
    const {user,setUser} = useContext(userDataContext);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = {
            fullname:{
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
        if(response.status === 201){
            localStorage.setItem('token',response.data.token);
            const data = response.data;
            setUser(data.User);
            navigate('/home');
        }
        setEmail('');
        setPassword('');
        setFirstName('');   
        setLastName('');
    }
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userData,setUserData] = useState({});
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    
                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-2 mb-6'>
                        <input  type="text" required placeholder='First Name' className='bg-[#eeeeee] w-1/2 px-4 py-2 border rounded text-lg placeholder:text-base' value={firstName} onChange={(e)=>{setFirstName(e.target.value);}}/>

                        <input  type="text" required placeholder='First Name' className='bg-[#eeeeee] w-1/2 px-4 py-2 border rounded text-lg placeholder:text-base'  value={lastName} onChange={(e)=>{setLastName(e.target.value);}}/>
                    </div>
                    
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input type="email" required placeholder='example@gmail.com' className='w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-6'  value={email} onChange={(e)=>{setEmail(e.target.value);}}/>

                    <h3 className='text-lg font-medium mb-2'>Password</h3>
                    <input className="w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-6" type="password" required placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

                    <button className='w-full bg-[#111] text-white font-semibold px-4 py-2 rounded text-xl mb-3'>Create Account</button>
                    <p className='text-center'> Already have an Account ?<Link to="/login" className='text-blue-700'> Login here</Link> </p>
                </form>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    );
};

export default UserSignup;