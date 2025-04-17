
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CardHeader from "./CardHeader";
import CardActions from "./CardActions";
import { FeedbackCardProps, FeedbackPostProps } from "./types";

const FeedbackCard = (props: FeedbackCardProps | { post: FeedbackPostProps }) => {
  if ('author' in props && 'message' in props) {
    const { author, role, message, timestamp, onLike, likes, comments, isLiked = false } = props;
    
    const roleSectorMap: Record<string, string> = {
      'teacher': 'academia',
      'student': 'academia',
      'industry': 'industry',
      'policy': 'government',
    };
    const sector = roleSectorMap[role] || 'academia';

    return (
      <Card className="shadow-card rounded-xl border-none overflow-hidden animate-scale-in card-hover">
        <CardHeader 
          author={author}
          sector={sector}
          timestamp={timestamp}
          role={role}
        />
        <CardContent className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {message}
          </p>
        </CardContent>
        <CardFooter>
          <CardActions 
            likes={likes}
            comments={comments}
            onLike={onLike}
            isLiked={isLiked}
          />
        </CardFooter>
      </Card>
    );
  }

  const { post } = props;
  return (
    <Card className="shadow-card rounded-xl border-none overflow-hidden animate-scale-in card-hover">
      <CardHeader 
        author={post.author.name}
        avatar={post.author.avatar}
        organization={post.author.organization}
        sector={post.author.sector}
        timestamp={post.date}
      />
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
      <CardFooter>
        <CardActions 
          likes={post.likes}
          comments={post.comments}
        />
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
