
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  BookOpen,
  Briefcase,
  Building2,
  Send,
  Tag
} from "lucide-react";

type FormData = {
  title: string;
  content: string;
  category: string;
  sector: string;
  tags: string;
};

const FeedbackForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [sector, setSector] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", { ...data, sector, category });
      setIsSubmitting(false);
      reset();
      setSector("");
      setCategory("");
      
      // Here you would connect to Supabase or another backend service
    }, 1000);
  };
  
  const getSectorIcon = () => {
    switch(sector) {
      case 'academia':
        return <BookOpen className="h-5 w-5 mr-2" />;
      case 'industry':
        return <Briefcase className="h-5 w-5 mr-2" />;
      case 'government':
        return <Building2 className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-card rounded-xl border-none overflow-hidden">
        <CardHeader className="bg-helix-purple100 dark:bg-helix-purple900">
          <CardTitle className="text-xl font-satoshi">Share Your Feedback</CardTitle>
          <CardDescription>
            Contribute to the conversation and help bridge the gap between education, industry, and policy.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input 
                id="title"
                placeholder="Give your feedback a clear title"
                {...register("title", { required: "Title is required" })}
                className={errors.title ? "border-red-500" : ""}
              />
              {errors.title && (
                <p className="text-xs text-red-500">{errors.title.message}</p>
              )}
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="content" className="text-sm font-medium">
                Content
              </label>
              <Textarea 
                id="content"
                placeholder="Share your thoughts, suggestions, or questions..."
                rows={5}
                {...register("content", { required: "Content is required" })}
                className={errors.content ? "border-red-500" : ""}
              />
              {errors.content && (
                <p className="text-xs text-red-500">{errors.content.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="sector" className="text-sm font-medium">
                  Your Sector
                </label>
                <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger id="sector" className="w-full">
                    <SelectValue placeholder="Select your sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academia">Academia</SelectItem>
                    <SelectItem value="industry">Industry</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
                {!sector && (
                  <p className="text-xs text-red-500">Sector is required</p>
                )}
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curriculum">Curriculum Development</SelectItem>
                    <SelectItem value="skill-gaps">Skill Gaps</SelectItem>
                    <SelectItem value="policy">Policy Recommendations</SelectItem>
                    <SelectItem value="collaboration">Collaboration Opportunities</SelectItem>
                    <SelectItem value="research">Research & Analysis</SelectItem>
                  </SelectContent>
                </Select>
                {!category && (
                  <p className="text-xs text-red-500">Category is required</p>
                )}
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="tags" className="text-sm font-medium flex items-center">
                <Tag className="h-4 w-4 mr-1.5" />
                Tags
              </label>
              <Input 
                id="tags"
                placeholder="Add tags separated by commas (e.g., data science, healthcare, policy reform)"
                {...register("tags")}
              />
              <p className="text-xs text-gray-500">
                Tags help others discover your feedback
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="bg-gray-50 dark:bg-gray-800 flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
              {sector && getSectorIcon()}
              {sector && <span className="text-sm font-medium capitalize">{sector}</span>}
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting || !sector || !category}
              className="button-hover"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
};

export default FeedbackForm;
