
import { BookOpen, Briefcase, Building2 } from "lucide-react";

export const getSectorIcon = (sector: string) => {
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

export const getSectorClass = (sector: string) => {
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

interface SectorBadgeProps {
  sector: string;
  role?: string;
}

const SectorBadge = ({ sector, role }: SectorBadgeProps) => (
  <span className="inline-flex items-center px-2 py-0.5 ml-2 text-xs font-medium rounded-full border">
    {getSectorIcon(sector)}
    {role ? role.charAt(0).toUpperCase() + role.slice(1) : sector.charAt(0).toUpperCase() + sector.slice(1)}
  </span>
);

export default SectorBadge;
