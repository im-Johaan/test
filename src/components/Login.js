import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const Login = ()=>{
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(email, password){
        try {
            const response = await fetch('https://finalapp.johaan-samsanil.workers.dev/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                    email: `${email}`,
                    password: `${password}`
               })
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            
      
            const data = await response.json();
            if(data.exists === 0) alert("Email entered is wrong. Please check and try again.")
            else if(data.exists === 1 && data.password === 0) alert("The entered password is wrong.");
            else{
                setIsAuthenticated(true);
                localStorage.setItem('name',`${data.name}`);
                navigate('/message')
            }
            console.log(data);
          } catch (err) {
            console.log(err.message);
          }
    }
    return(
        <>
        <div>
        <div className='flex-col bg-red-500 rounded min-w-96 w-auto h-auto'>
            <div className='flex justify-center text-2xl font-bold'>
                <div className='mt-2'>Login</div>
            </div>
            
            <div className='flex justify-center'><input placeholder='Email' className='p-4 m-4 rounded w-6/12'
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            ></input></div>
            <div className='flex justify-center'><input placeholder='Password' type='password' className='p-4 m-4 rounded w-6/12'
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            ></input></div>
            <div className='flex justify-center'><button className='bg-blue-500 m-4 p-4 rounded w-6/12 '
            onClick={()=>{
                if(email === '' | password === '') alert("Please fill in all fields.")
                handleSubmit(email, password);
            }}
            >Login</button></div>
            
        </div>
        <div className='flex justify-center'> 
            <div className='pr-2'>Don't have an account? </div>
            <button 
                onClick={()=>{
                    navigate('/signup')
                }}
            >Sign In</button>
        </div>
        </div>
    </>
    )
}

export default Login;