
import NavLink from "./NavLink";

interface DesktopNavProps {
  isActive: (path: string) => boolean;
}

const DesktopNav = ({ isActive }: DesktopNavProps) => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-1">
      <NavLink to="/academia" isActive={isActive('/academia')}>Academia</NavLink>
      <NavLink to="/industry" isActive={isActive('/industry')}>Industry</NavLink>
      <NavLink to="/government" isActive={isActive('/government')}>Government</NavLink>
      <NavLink to="/dashboard" isActive={isActive('/dashboard')}>Dashboard</NavLink>
      <NavLink to="/discussions" isActive={isActive('/discussions')}>Discussions</NavLink>
      <NavLink to="/knowledge" isActive={isActive('/knowledge')}>Knowledge</NavLink>
    </div>
  </div>
);

export default DesktopNav;
