import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Sign = ()=>{
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');

    async function handleSubmit(name, email, password){
        try {
            const response = await fetch('https://finalapp.johaan-samsanil.workers.dev/sign', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                    name : `${name}`,
                    email: `${email}`,
                    password: `${password}`
               }), // Replace with your data
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

      
            const data = await response.json();
            console.log(data);
            
            if(data.exists == 1) alert("An account with same email exists.")
            else if(data.exists == 0 && data.created == 0) alert("Account could not be created due to some technical fault.");
            else{
                alert("Account created succesfully! You can now login.")
                navigate('/login');
            }

          } catch (err) {
            console.log(err.message);
          }
    }
    return(
        <>
        <div className='flex-col justify-center'>
            <div className='flex-col bg-red-500 rounded min-w-96 w-auto h-auto'>
                <div className='flex justify-center text-2xl font-bold'>
                    <div className='mt-2'>Signup</div>
                </div>
                <div className='flex justify-center'><input placeholder='Name' className='p-4 m-4 rounded w-6/12'
                onChange={(e)=>{
                    setName(e.target.value);
                }}
                ></input></div>
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
                <div className='flex justify-center'><input placeholder='Confirm Password' type='password' className='p-4 m-4 rounded w-6/12'
                onChange={(e)=>{
                    setConpassword(e.target.value);
                }}
                ></input></div>
                <div className='flex justify-center'><button className='bg-blue-500 m-4 p-4 rounded w-6/12 '
                onClick={()=>{
                    if(name === '' | email === '' | password  === '' | conpassword === ''){
                        alert("Please fill out all forms")
                    }
                    else if(password !== conpassword){
                        alert("The entered passwords are not same!");
                    }
                    else{
                        handleSubmit(name, email, password);
                    }
                }}
                >Signup</button></div>
                
            </div>
            <div className='flex justify-center'>
                <div className='pr-2'>Already a user?</div>
                <button onClick={()=>{
                    navigate('/login');
                }}> Login </button>
            </div>
        </div>
        </>
    )
}

export default Sign;