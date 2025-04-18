
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Minus, Square, Maximize2, ChevronLeft, ChevronRight, RefreshCw, Home, Search, Star, FileText, Folder, LayoutGrid } from "lucide-react";

const XPDemoWindow = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const tabs = [
    { name: "Dashboard", icon: <LayoutGrid size={14} /> },
    { name: "Innovation Map", icon: <Folder size={14} /> },
    { name: "Skills Data", icon: <FileText size={14} /> }
  ];
  
  const handleTabChange = (index: number) => {
    setIsLoading(true);
    setActiveTab(index);
    setTimeout(() => setIsLoading(false), 800);
  };
  
  useEffect(() => {
    // Simulate initial loading
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="xp-window shadow-2xl overflow-hidden border-2 border-[#0055E5] rounded-t-lg"
      >
        <div className="xp-title-bar bg-gradient-to-r from-[#0A246A] via-[#0A246A] to-[#A6CAF0] flex justify-between items-center px-3 py-1">
          <div className="flex items-center gap-2">
            <img 
              src="https://placehold.co/16x16?text=H" 
              alt="HelixHub Icon" 
              className="w-4 h-4"
            />
            <h3 className="text-white text-xs font-bold">HelixHub Explorer - Triple Helix Data Platform</h3>
          </div>
          <div className="flex gap-1">
            <button className="xp-window-button xp-minimize bg-[#D6D3CE] hover:bg-[#E7E5DC] w-4 h-4 flex items-center justify-center rounded-sm border border-[#ACA899]">
              <Minus size={8} className="text-black" />
            </button>
            <button className="xp-window-button xp-maximize bg-[#D6D3CE] hover:bg-[#E7E5DC] w-4 h-4 flex items-center justify-center rounded-sm border border-[#ACA899]">
              <Square size={8} className="text-black" />
            </button>
            <button className="xp-window-button xp-close bg-[#D6D3CE] hover:bg-[#E7E5DC] w-4 h-4 flex items-center justify-center rounded-sm border border-[#ACA899]">
              <X size={8} className="text-black" />
            </button>
          </div>
        </div>
        
        {/* Menu Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#ACA899] px-2 py-1">
          <div className="flex text-xs space-x-4">
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">File</span>
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">Edit</span>
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">View</span>
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">Analyze</span>
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">Tools</span>
            <span className="hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border px-2 py-0.5 rounded cursor-pointer underline">Help</span>
          </div>
        </div>
        
        {/* Toolbar */}
        <div className="bg-[#ECE9D8] border-b border-[#ACA899] px-2 py-1 flex justify-between">
          <div className="flex space-x-1">
            <button className="xp-button flex items-center gap-1 py-0.5 px-2 text-xs">
              <ChevronLeft size={14} />
              <span>Back</span>
            </button>
            <button className="xp-button flex items-center gap-1 py-0.5 px-2 text-xs">
              <ChevronRight size={14} />
              <span>Forward</span>
            </button>
            <button className="xp-button flex items-center gap-1 py-0.5 px-2 text-xs">
              <RefreshCw size={14} />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs">Address:</span>
            <div className="bg-white border border-[#7F9DB9] rounded px-2 py-0.5 flex items-center gap-1 w-64">
              <Home size={14} className="text-[#0055E5]" />
              <span className="text-xs truncate">https://helixhub.gov/dashboard/triple-helix-explorer</span>
            </div>
            <button className="xp-button flex items-center gap-1 py-0.5 px-2 text-xs">
              <Search size={14} />
              <span>Search</span>
            </button>
          </div>
        </div>
        
        {/* Sidebar and Content */}
        <div className="flex h-[500px]">
          {/* Sidebar */}
          <div className="bg-[#ECE9D8] w-56 p-4 border-r border-[#ACA899]">
            <h4 className="font-bold text-sm border-b border-[#ACA899] pb-2 mb-4">Triple Helix Platform</h4>
            
            <div className="space-y-1">
              {tabs.map((tab, idx) => (
                <button 
                  key={idx}
                  className={`w-full text-left text-xs py-1 px-2 flex items-center gap-2 hover:bg-[#FFE8A6] hover:border-[#ACA899] hover:border rounded-sm ${activeTab === idx ? 'bg-[#FFE8A6] border border-[#ACA899]' : ''}`}
                  onClick={() => handleTabChange(idx)}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-sm border-b border-[#ACA899] pb-2 mb-4">Common Tasks</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#0055E5] hover:underline cursor-pointer">
                  <Star size={14} className="text-[#0055E5]" />
                  <span>View Regional Data</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0055E5] hover:underline cursor-pointer">
                  <FileText size={14} className="text-[#0055E5]" />
                  <span>Generate Report</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0055E5] hover:underline cursor-pointer">
                  <Search size={14} className="text-[#0055E5]" />
                  <span>Search Opportunities</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="bg-white flex-grow p-4 relative">
            {isLoading ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-blue-500 animate-spin"></div>
                <p className="mt-4 text-xs">Loading {tabs[activeTab]?.name}...</p>
              </div>
            ) : (
              <div className="h-full">
                {activeTab === 0 && (
                  <div className="h-full">
                    <h2 className="text-xl font-bold mb-4">Triple Helix Dashboard</h2>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="border border-[#ACA899] p-3 bg-[#F5F5F5] rounded">
                        <h4 className="text-sm font-bold">Civic Load</h4>
                        <p className="text-2xl font-bold text-blue-600">3.2M</p>
                        <p className="text-xs text-gray-600">Adjusted Population</p>
                      </div>
                      <div className="border border-[#ACA899] p-3 bg-[#F5F5F5] rounded">
                        <h4 className="text-sm font-bold">System Strain</h4>
                        <p className="text-2xl font-bold text-amber-600">6.7</p>
                        <p className="text-xs text-gray-600">Pressure Ratio (0-10)</p>
                      </div>
                      <div className="border border-[#ACA899] p-3 bg-[#F5F5F5] rounded">
                        <h4 className="text-sm font-bold">Resource Buffer</h4>
                        <p className="text-2xl font-bold text-green-600">4.8M</p>
                        <p className="text-xs text-gray-600">Biocapacity (M ha)</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F9F9F9] border border-[#ACA899] p-3 rounded">
                      <h3 className="text-sm font-bold mb-2">Recent Alignment Signals</h3>
                      <table className="w-full text-xs">
                        <thead className="bg-[#ECE9D8] border border-[#ACA899]">
                          <tr>
                            <th className="p-1 text-left">Source</th>
                            <th className="p-1 text-left">Signal</th>
                            <th className="p-1 text-left">Impact</th>
                            <th className="p-1 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[#ACA899]">
                            <td className="p-1">Academia</td>
                            <td className="p-1">Data Science Curriculum Update</td>
                            <td className="p-1">High</td>
                            <td className="p-1 text-green-600">Complete</td>
                          </tr>
                          <tr className="border-b border-[#ACA899]">
                            <td className="p-1">Industry</td>
                            <td className="p-1">Skills Gap Report</td>
                            <td className="p-1">Medium</td>
                            <td className="p-1 text-amber-600">In Progress</td>
                          </tr>
                          <tr>
                            <td className="p-1">Government</td>
                            <td className="p-1">Grant Matching Program</td>
                            <td className="p-1">High</td>
                            <td className="p-1 text-blue-600">Review</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 1 && (
                  <div className="h-full">
                    <h2 className="text-xl font-bold mb-4">Regional Innovation Map</h2>
                    <div className="border border-[#ACA899] h-[400px] bg-[#F5F5F5] flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm mb-2">Interactive map showing innovation hotspots</p>
                        <button className="xp-button text-xs">Load Map Data</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 2 && (
                  <div className="h-full">
                    <h2 className="text-xl font-bold mb-4">Skills Data Analysis</h2>
                    <div className="bg-[#F9F9F9] border border-[#ACA899] p-3 rounded mb-4">
                      <h3 className="text-sm font-bold mb-2">Top Skills in Demand</h3>
                      <ol className="list-decimal pl-5 text-xs space-y-1">
                        <li>Data Science & Analytics</li>
                        <li>Cloud Infrastructure</li>
                        <li>AI/ML Engineering</li>
                        <li>Cybersecurity</li>
                        <li>Digital Marketing</li>
                      </ol>
                    </div>
                    
                    <div className="bg-[#F9F9F9] border border-[#ACA899] p-3 rounded">
                      <h3 className="text-sm font-bold mb-2">Educational Alignment</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Data Science Programs</span>
                            <span>87%</span>
                          </div>
                          <div className="h-2 bg-[#ECE9D8] border border-[#ACA899]">
                            <div className="h-full bg-green-600" style={{width: '87%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Cloud Infrastructure Courses</span>
                            <span>62%</span>
                          </div>
                          <div className="h-2 bg-[#ECE9D8] border border-[#ACA899]">
                            <div className="h-full bg-amber-500" style={{width: '62%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>AI/ML Programs</span>
                            <span>74%</span>
                          </div>
                          <div className="h-2 bg-[#ECE9D8] border border-[#ACA899]">
                            <div className="h-full bg-blue-500" style={{width: '74%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="bg-[#ECE9D8] border-t border-[#ACA899] px-3 py-1 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-xs">
              Ready
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="border border-[#ACA899] bg-white px-2 py-0.5">
              Connected to HelixHub Network
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default XPDemoWindow;
