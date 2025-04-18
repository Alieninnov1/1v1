
import ThreeDModel from "@/components/dashboard/ThreeDModel";

const TripleHelixSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
          Interactive 3D Triple Helix Model
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Visualize how academia, industry, and government interconnect in our interactive 3D model.
          Rotate, zoom, and explore the relationships between each sector.
        </p>
        <div className="rounded-xl overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.3)]">
          <ThreeDModel />
        </div>
      </div>
    </div>
  );
};

export default TripleHelixSection;
