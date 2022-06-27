import React from 'react'
import {Link} from 'react-router-dom';
import {
    ShieldCheckIcon,
    MapIcon,
    ChatIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/solid'
import bgImg from '../assets/ukrainereliefhand.jpg'

const Intro = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Providing <span className='text-ukraineBlue font-bold'>RELIEF</span> and<span className='text-ukraineYellow font-bold'> SUPPORT</span></p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>THROUGH TECHNOLOGY</h1>
                <p className='text-2xl'>In hopes for a peaceful future.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 bg-ukraineBlue text-ukraineYellow rounded font-bold'><Link to="/app">Get Started</Link></button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-5 md:min-w-[760px] bottom-[2%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-ukraineYellow
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className="underline font-bold">Available Support</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><ChatIcon className='h-6 text-indigo-600' /> Secure Communiation </p>
                    <p className='flex px-4 py-2 text-slate-500'><MapIcon className='h-6 text-indigo-600' /> Support Locator </p>
                    <p className='flex px-4 py-2 text-slate-500'><ShieldCheckIcon className='h-6 text-indigo-600' /> TEST </p>
                    <p className='flex px-4 py-2 text-slate-500'><CurrencyDollarIcon className='h-6 text-indigo-600' /> TEST </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro;