import React from 'react'
import firstimage from '../assets/first-DHjeVHTo.png'
import secondImage from '../assets/second-DI60NgKv.png'
const AboutSection = () => {
    return (
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-left">
          About Us
        </h2>
    
        <div className="max-w-5xl mx-auto p-8 rounded-lg space-y-12">
  
          <div className="flex flex-col md:flex-row items-center gap-6 ">
      
            <img
              class=""
              src={firstimage}
              alt="Ashwath"
              className="h-44 bg-white rounded-full p-2 px-11  object-cover"
            />
            <div className="text-left">
              <h3 className="text-white font-semibold text-lg">Ashwath</h3>
              <p className="text-blue-100 text-sm mt-2">
                Ashwath is the founder of MobiusEngine.ai. He is an accomplished entrepreneur, product manager, and coach with experience at Google, Meta, and various startups. 
                He specializes in helping people secure jobs in top companies.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              
              src={secondImage}
              alt="Nicole"
              className="h-44 bg-white rounded-full p-2  object-cover"
            />
            <div className="text-left">
              <h3 className="text-white font-semibold text-lg">Nicole</h3>
              <p className="text-blue-100 text-sm mt-2">
                Nicole is an Executive Coach at Mobius, specializing in resume building and career advisory. She helps clients build strong personal brands and secure high-value roles.
              </p>
            </div>
          </div>
          <div className="mt-8 text-blue-300 text-sm">
            Follow our LinkedIn page →
          </div>
        </div>
      </div>
    </section>
    
    );
}

export default AboutSection