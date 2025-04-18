import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ThreeDModel from "../ThreeDModel";
import InteractiveInsights from "../InteractiveInsights";
import DashboardMetrics from "../DashboardMetrics";
const OverviewTab = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.3
  }}>
      {/* Hero section with 3D model */}
      <motion.div variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    }} className="mb-10">
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-helix-purple50 dark:from-gray-900 dark:to-helix-purple900">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center bg-indigo-800">
                <motion.h2 className="text-3xl font-bold font-satoshi mb-4" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  Triple Helix Innovation
                </motion.h2>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="mb-6 text-slate-50">
                  Explore the dynamic intersection of academia, industry, and government partnerships driving regional innovation and closing skill gaps.
                </motion.p>
              </div>
              <div className="w-full h-[400px]">
                <ThreeDModel />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <InteractiveInsights />
      <DashboardMetrics />
    </motion.div>;
};
export default OverviewTab;