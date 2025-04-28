import { FaHeart ,FaUser, FaStar} from "react-icons/fa";

const WhyChooseUsSection = () => {
    const features = [
        {
          icon: <FaHeart className="text-blue-600 w-8 h-8" />,
          title: "Tried, Tested, Trusted",
          description: "Built by folks with 40+ years in tech and hiring, we know the game, and we've got your back.",
        },
        {
          icon: <FaUser className="text-blue-600 w-8 h-8" />,
          title: "Real People, Real Help",
          description: "A hands-on team that cares guiding you through every twist in your career path.",
        },
        {
          icon: <FaStar className="text-blue-600 w-8 h-8" />,
          title: "Beat the Line",
          description: "We search, shortlist, and apply for you, so your resume shows up first - ahead of others.",
        },
      ];
    
      return (
        <section className="max-w-6xl mx-auto py-12 bg-blue-50 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl pb-4 text-blue-700 ">Why Choose Us?</h2>
          </div>
          <div className="flex justify-center gap-16 flex-wrap">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-72 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-blue-800 mb-2 text-center">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default WhyChooseUsSection