import React from 'react';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png';

const Hero = () => {
    return ( 
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:px-5'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Unique Sequencng & Producing</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech brand.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div className='mx-5'>
                    <img src={bgImg} alt="Background Image" />
                </div>
            </div>
        </div> 
    );
}
 
export default Hero;