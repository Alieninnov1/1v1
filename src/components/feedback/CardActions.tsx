
import { ThumbsUp, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CardActionsProps {
  likes: number;
  comments: number;
  onLike?: () => void;
  isLiked?: boolean;
  saved?: boolean;
  onSave?: () => void;
}

const CardActions = ({ likes, comments, onLike, isLiked = false, saved = false, onSave }: CardActionsProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);
  const [isSaved, setIsSaved] = useState(saved);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
    if (onLike) onLike();
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    if (onSave) onSave();
  };

  return (
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-between">
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
          className={`h-8 w-8 ${isSaved ? 'text-helix-purple' : ''}`}
          onClick={handleSave}
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CardActions;
