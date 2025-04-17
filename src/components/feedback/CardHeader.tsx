
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectorBadge from "./SectorBadge";

interface CardHeaderProps {
  author: string;
  avatar?: string;
  organization?: string;
  sector: string;
  timestamp: string;
  role?: string;
}

const CardHeader = ({ author, avatar, organization, sector, timestamp, role }: CardHeaderProps) => (
  <div className="px-6 py-5 border-b">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          {avatar && <AvatarImage src={avatar} alt={author} />}
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center">
            <p className="font-medium text-sm">{author}</p>
            <SectorBadge sector={sector} role={role} />
          </div>
          <p className="text-gray-500 text-xs">
            {timestamp}
            {organization && ` · ${organization}`}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CardHeader;
