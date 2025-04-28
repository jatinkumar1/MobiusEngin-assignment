import React from 'react'

const HowWeWorkSection = () => {
    const steps = [
        { id: 1, text: "Submit Intake Form" },
        { id: 2, text: "We do the search and curation for list of jobs" },
        { id: 3, text: "You approve, we do the tedious part (applying)" },
        { id: 4, text: "You get the interviews" },
      ];
  return (
    <section className="bg-white py-10">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-left">
      How we work?
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black text-xl font-bold">
                  {step.id}
                </div>
              </div>
                <div className="w-20 h-1 bg-blue-600 mb-4"></div>

              {/* Step Text */}
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
  </div>
</section>

  )
}

export default HowWeWorkSection