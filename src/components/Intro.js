import React from 'react';
import { useNavigate } from 'react-router-dom';


const Intro = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className='grid'>
            <div className='font-bold text-3xl'>
                Please Login or Sign-up to continue.
            </div>
            <div className='flex justify-around pt-10'>
                <button className='font-bold text-2xl'
                onClick={()=>{
                    navigate('/login')
                }}
                >
                    Login
                </button>
                <button className='font-bold text-2xl'
                onClick={()=>{
                    navigate('/signup')
                }}
                >
                    Sign-up
                </button>
            </div>
        </div>
        </>
    )
}

export default Intro;