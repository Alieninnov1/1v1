
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Bookmark,
  BookOpen,
  Briefcase,
  Building2
} from "lucide-react";

export interface FeedbackPostProps {
  id: number;
  author: {
    name: string;
    avatar: string;
    organization: string;
    sector: 'academia' | 'industry' | 'government';
  };
  date: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
}

// Added this interface to match the props being passed from RealTimeFeedbackWall
export interface FeedbackCardProps {
  author: string;
  role: "teacher" | "policy" | "industry" | "student";
  message: string;
  timestamp: string;
  onLike: () => void;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

const getSectorIcon = (sector: string) => {
  switch(sector) {
    case 'academia':
      return <BookOpen className="h-4 w-4 mr-1.5 text-blue-500" />;
    case 'industry':
      return <Briefcase className="h-4 w-4 mr-1.5 text-green-500" />;
    case 'government':
      return <Building2 className="h-4 w-4 mr-1.5 text-amber-500" />;
    default:
      return null;
  }
};

const getSectorClass = (sector: string) => {
  switch(sector) {
    case 'academia':
      return 'text-blue-500 bg-blue-50 border-blue-100';
    case 'industry':
      return 'text-green-500 bg-green-50 border-green-100';
    case 'government':
      return 'text-amber-500 bg-amber-50 border-amber-100';
    default:
      return 'text-gray-500 bg-gray-50 border-gray-100';
  }
};

// Updated implementation to handle both types of props
const FeedbackCard = (props: FeedbackCardProps | { post: FeedbackPostProps }) => {
  // If using the RealTimeFeedbackWall props format
  if ('author' in props) {
    const { author, role, message, timestamp, onLike, likes, comments, isLiked = false } = props;
    const [liked, setLiked] = useState(isLiked);
    const [likesCount, setLikesCount] = useState(likes);

    const handleLike = () => {
      if (liked) {
        setLikesCount(likesCount - 1);
      } else {
        setLikesCount(likesCount + 1);
      }
      setLiked(!liked);
      onLike();
    };

    // Map role to sector for UI consistency
    const roleSectorMap = {
      'teacher': 'academia',
      'student': 'academia',
      'industry': 'industry',
      'policy': 'government',
    };
    const sector = roleSectorMap[role] || 'academia';

    return (
      <Card className="shadow-card rounded-xl border-none overflow-hidden animate-scale-in card-hover">
        <CardHeader className="px-6 py-5 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <p className="font-medium text-sm">{author}</p>
                  <span className="inline-flex items-center px-2 py-0.5 ml-2 text-xs font-medium rounded-full border">
                    {getSectorIcon(sector)}
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">{timestamp}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {message}
          </p>
        </CardContent>
        <CardFooter className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-between">
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-xs flex items-center gap-1.5 ${liked ? 'text-helix-purple' : ''}`} 
              onClick={handleLike}
            >
              <ThumbsUp className="h-4 w-4" />
              {likesCount}
            </Button>
            <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              {comments}
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
  // Original implementation for the post object format
  else {
    const { post } = props;
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes);

    const handleLike = () => {
      if (liked) {
        setLikesCount(likesCount - 1);
      } else {
        setLikesCount(likesCount + 1);
      }
      setLiked(!liked);
    };

    return (
      <Card className="shadow-card rounded-xl border-none overflow-hidden animate-scale-in card-hover">
        <CardHeader className="px-6 py-5 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <p className="font-medium text-sm">{post.author.name}</p>
                  <span className="inline-flex items-center px-2 py-0.5 ml-2 text-xs font-medium rounded-full border">
                    {getSectorIcon(post.author.sector)}
                    {post.author.sector.charAt(0).toUpperCase() + post.author.sector.slice(1)}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">{post.date} · {post.author.organization}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {post.content}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className={`px-2.5 py-1 text-xs rounded-full border ${getSectorClass(post.author.sector)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-between">
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-xs flex items-center gap-1.5 ${liked ? 'text-helix-purple' : ''}`} 
              onClick={handleLike}
            >
              <ThumbsUp className="h-4 w-4" />
              {likesCount}
            </Button>
            <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              {post.comments}
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-8 w-8 ${saved ? 'text-helix-purple' : ''}`} 
              onClick={() => setSaved(!saved)}
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
};

export default FeedbackCard;
