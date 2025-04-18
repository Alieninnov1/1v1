
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full card-hover border-none shadow-card rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl font-satoshi text-indigo-950 font-medium">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-blue-900 text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
