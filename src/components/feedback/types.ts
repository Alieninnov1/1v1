
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

export type SectorType = 'academia' | 'industry' | 'government';
