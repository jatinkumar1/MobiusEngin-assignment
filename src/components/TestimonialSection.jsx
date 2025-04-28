import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineArrowOutward,MdOutlineArrowForward } from "react-icons/md"
const TestimonialSection = () => {
    const testimonials = [
        "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
        "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
        "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
      ];
  return (
    <section className="py-12 bg-white max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl  text-blue-700 pb-8">What our clients have to say</h2>
      </div>
      <div className="flex justify-center gap-10 flex-wrap">
        {testimonials.map((text, index) => (
          <div
            key={index}
            className="w-[250px] h-76 bg-blue-600 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-2">
              <div className="w-[244px] h-56 mt-0.5 bg-white rounded-2xl  flex items-center justify-center text-blue-600 text-xl">
                <FaPlay/>
              </div>
            </div>
            <p className="text-white  text-center p-2">{text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="  px-6 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition">
            <div className='flex gap-1 justify-center items-center'>More customer testimonials <span><MdOutlineArrowOutward/></span></div>
         
        </button>
        <button className="ml-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
            <div className='flex gap-1 justify-center items-center'>

           Get Started <span><MdOutlineArrowForward/></span>
            </div>
        </button>
      </div>
    </section>
  )
}

export default TestimonialSection