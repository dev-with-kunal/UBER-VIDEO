import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);
        setUserData({email: email, password: password});
        console.log(userData.email, userData.password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input value={email} onChange={ (e)=>{
                        setEmail(e.target.value);
                    }} type="email" required placeholder='example@gmail.com' className='w-full bg-[#eeeeee] px-4 py-2 border rounded text-lg placeholder:text-base mb-7'/>

                    <h3 className='text-lg font-medium mb-2'>Password</h3>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value);    
                    }} className="w-full bg-[#eeeeee] px-4 py-2 border rounded text-xl placeholder:text-base mb-7" type="password" required placeholder='Password' />

                    <button className='w-full bg-[#111] text-white font-semibold px-4 py-2 rounded text-xl mb-3'>Login</button>
                    <p className='text-center'> New here ? <Link to="/signup" className='text-blue-700'> Create New Account</Link> </p>
                </form>
            </div>
            <div>
                <Link to="/captain-login" className='w-full bg-[#10b461] flex items-center justify-center text-white font-semibold px-4 py-2 rounded text-xl mb-7'>Sign in as captain</Link>
            </div>

        </div>
    );
};

export default UserLogin;