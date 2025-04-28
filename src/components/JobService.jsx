import React from 'react'
import { MdDone } from "react-icons/md";

const JobService = () => {
    const plans = [
        {
            title: "April Promo",
            price: "$35",
            period: "/week",
            features: [
                "Curated jobs from 1M+ listings, refreshed every 48 hours",
                "Up to 20 human-applied roles per week",
                "Need more? Add extra apps for just $5 each",
                "Your own dedicated application analyst",
                "Personalized with up to 10 filters & 5 job titles",
            ],
            buttonText: "Get Started",
        },
        {
            title: "Starter",
            price: "$50",
            period: "/week",
            badge: "Popular",
            features: [
                "All the perks of the Promo Plan, plus:",
                "Resume review & story-focused feedback",
                "Dedicated search specialist",
                "Extra apps at $5 each",
                "Analyst support within 6 hours (SLA/PST hours)",
            ],
            buttonText: "Get Started",
        },
        {
            title: "Plus",
            price: "$100",
            period: "/week",
            features: [
                "Everything in Starter, with more muscle:",
                "Up to 75 apps/week",
                "Apply to 15 job titles",
                "Analyst + full application team on Pacific hours",
            ],
            buttonText: "Get Started",
        },
    ];

    const advanceFeatures = [
        "Everything in Plus",
        "20 fully customized applications/week",
        "Custom Resumes & Cover Letters",
        "Help with complex job searches",
        "Access to senior resume experts, Founder & Exec Coaches",
    ];

    const resumeBuilfFeatures = [
        "3 * 30-min coaching",
        "Focused on storytelling not just formatting",
        "Analysst + full application team on Pacific hours",
        "Tailored to you target industry, company, or role",
        "Direct work with our co-founder",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience"
    ]
    const interviewPrepFeatures = [
        "2 * 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles - technical & non-technical"
    ]

    return (
        <section className="max-w-5xl mx-auto py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl  text-blue-800">Job Application Service Plans</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
                {plans.map((plan, index) => (
                    <div key={index} className="w-72 border border-blue-200 rounded-2xl p-6 relative hover:shadow-lg transition flex flex-col">
                        {plan.badge && (
                            <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                                {plan.badge}
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-blue-700 mb-4">{plan.title}</h3>
                        <div className="flex items-end mb-6">
                            <span className="text-4xl font-bold text-blue-800">{plan.price}</span>
                            <span className="text-blue-600 font-medium ml-1">{plan.period}</span>
                        </div>
                        <ul className="mb-6 space-y-3">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-white border bg-green-500 rounded-full bor font-extrabold mr-2 "><MdDone /></span>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition mt-auto">
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-blue-700 text-white rounded-2xl p-2 lg:p-8 md:p-8 max-w-5xl mx-auto flex flex-col  justify-between mx-2">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-3xl">Advance
                            <p className="text-base">Top-tier support for serious job hunters:</p>
                        </h3>

                        <div className="text-right">
                            <div className="text-4xl font-bold">$150<span className='text-xl'>/week</span></div>
                        </div>
                    </div>



                    <ul className="space-y-2 text-sm">
                        {advanceFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="text-white border bg-green-500 rounded-full font-extrabold mr-2">
                                    <MdDone />
                                </span>
                                <span className="text-sm text-white">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 md:mt-0 lg:mt-0 text-right">
                        <button className="px-6 py-2 bg-white text-blue-700 rounded-full hover:bg-blue-100 transition">
                            Get Started
                        </button>
                    </div>
                </div>


            </div>


            <div>
                <div className="text-left  text-blue-800 py-20">
                    <h2 className="text-3xl font-bold mb-1">Resume Building & Coaching</h2>
                    <p className='text-base'>Let's talk about where you're headed - and how your resume can get you there.</p>
                    <p className='text-base font-bold'>Schedule a call to get started.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-12">
                    <div className="w-72 border border-blue-200 rounded-2xl p-6 relative hover:shadow-lg transition flex flex-col">
                        <h3 className="text-xl font-bold text-blue-700">Resume Rebuild</h3>
                        <p className='text-blue-700 mb-4 text-xs'>Crafted for senior to VP-level professionals ready for their next big step</p>
                        <div className="flex items-end mb-6">
                            <span className="text-4xl font-bold text-blue-800">$1000</span>
                            <span className="text-blue-600 font-medium ml-1">one time</span>
                        </div>
                        <ul className="mb-6 space-y-3">
                        {resumeBuilfFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-white border bg-green-500 rounded-full bor font-extrabold mr-2 "><MdDone /></span>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
        
                        </ul>
                        <button className="w-full py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition mt-auto">
                            Get Started
                        </button>
                    </div>
                    <div className="w-72 border border-blue-200 rounded-2xl p-6 relative hover:shadow-lg transition flex flex-col">
                        <h3 className="text-xl font-bold text-blue-700 ">Interview Prep</h3>
                        <p className='text-blue-700 mb-4 text-xs'>Two sessions to sharpen your story,confidence, and clarity - fast</p>
                        <div className="flex items-end mb-6">
                            <span className="text-4xl font-bold text-blue-800">$500</span>
                            <span className="text-blue-600 font-medium ml-1">one time</span>
                        </div>
                        <ul className="mb-6 space-y-3">
                        {interviewPrepFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-white border bg-green-500 rounded-full bor font-extrabold mr-2 "><MdDone /></span>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
        
                        </ul>
                        <button className="w-full py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition mt-auto">
                            Get Started
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default JobService