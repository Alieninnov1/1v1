
/**
 * Skeleton placeholders for insights loading state.
 */
const InsightSkeletons = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"
        ></div>
      ))}
    </>
  );
};

export default InsightSkeletons;
