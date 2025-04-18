
const DashboardBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-indigo-700/20 to-blue-800/30 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-300/10 to-transparent" />
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute inset-0 opacity-20 mix-blend-overlay animate-wave-${i + 1}`} 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 1000 Q 250 750 500 1000 T 1000 1000 L 1000 0 L 0 0 Z' fill='%23fff'/%3E%3C/svg%3E\")",
              backgroundSize: "100% 100%",
              animation: `wave ${15 + i * 5}s linear infinite`,
              animationDelay: `${i * -5}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardBackground;
