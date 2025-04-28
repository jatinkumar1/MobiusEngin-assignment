import React from 'react'

const FeaturesSection = () => {
    const features = [
        {
          title: "Ultra-Fast Performance",
          description: "Experience lightning-fast inference and training speeds powered by our optimized engine.",
        },
        {
          title: "Scalable Infrastructure",
          description: "Grow effortlessly with our cloud-native solutions designed for scalability and flexibility.",
        },
        {
          title: "Seamless Integration",
          description: "Integrate MobiusEngine with your existing workflows easily using our robust APIs.",
        },
      ];
    
      return (
        <section id="features" className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Features
            </h2>
            <div className="grid gap-12 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default FeaturesSection