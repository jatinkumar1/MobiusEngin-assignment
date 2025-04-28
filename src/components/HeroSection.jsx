import React from 'react'
import Header from './Header';
import image from '/assets/book-CzIxDrMa.png';
const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800">
            <Header/>
            <div className="min-h-screen  w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">


                <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Land job interviews <span className="text-blue-300">10x</span><span className='pl-2'>faster</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-md md:max-w-lg">
                        Custom-built resumes that match your goals, keywords, and recruiter expectations.
                    </p>
                    <div>
                        <a href="#get-started" className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition">
                            Get Started
                        </a>
                    </div>
                </div>

                <div className="relative w-full  h-[292px]  md:w-5/12 mt-12 md:mt-0 flex justify-center">
                    

                    <img src={image} alt="Hiring Trends 2024/2025" className="w-[200px] md:w-[200px] h-[300px] rounded-lg shadow-lg" />
                    <div className="hidden lg:visible  absolute mr-8 right-16 -bottom-9 border-[1px] border-white bg-transparent backdrop-blur-sm rounded-full p-7">

                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection