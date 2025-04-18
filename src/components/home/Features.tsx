
import { features } from "./feature/featuresData";
import FeaturesHeader from "./feature/FeaturesHeader";
import FeatureCard from "./feature/FeatureCard";

const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturesHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
