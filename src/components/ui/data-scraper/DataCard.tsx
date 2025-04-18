
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ScrapedData } from "./types";

interface DataCardProps {
  item: ScrapedData;
  index: number;
}

export const DataCard = ({ item, index }: DataCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className="border rounded-md p-3 bg-white hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => {
        toast({
          title: item.topic,
          description: `Keywords: ${item.keywords.join(", ")}`,
        });
      }}
    >
      <div className="flex justify-between items-start">
        <h5 className="font-semibold">{item.topic}</h5>
        <Badge className={
          item.trends === "up" ? "bg-green-100 text-green-800 border-green-200" :
          item.trends === "down" ? "bg-red-100 text-red-800 border-red-200" :
          "bg-blue-100 text-blue-800 border-blue-200"
        }>
          {item.trends === "up" ? "↑" : item.trends === "down" ? "↓" : "→"} {item.volume.toLocaleString()}
        </Badge>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {item.keywords.map(kw => (
          <span key={kw} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">{kw}</span>
        ))}
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">Source: {item.source}</span>
        <span className={`text-xs ${
          item.trends === "up" ? "text-green-600" : 
          item.trends === "down" ? "text-red-600" : 
          "text-blue-600"
        }`}>
          {item.trends === "up" ? "Trending up" : 
           item.trends === "down" ? "Trending down" : 
           "Stable trend"}
        </span>
      </div>
    </motion.div>
  );
};
