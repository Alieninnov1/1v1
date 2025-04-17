
const TrendingTopics = [
  {
    category: 'Industry',
    topics: [
      { name: 'AI Engineering Talent Gap', priority: 'Critical' },
      { name: 'Sustainable Tech Curriculum', priority: 'High' },
      { name: 'Cybersecurity Workforce', priority: 'Critical' },
      { name: 'Digital Marketing Evolution', priority: 'Medium' }
    ]
  },
  {
    category: 'Academia',
    topics: [
      { name: 'Interdisciplinary Data Science', priority: 'High' },
      { name: 'Research to Industry Pipeline', priority: 'Medium' },
      { name: 'Ethical Technology Integration', priority: 'High' },
      { name: 'Credential Innovation', priority: 'Medium' }
    ]
  },
  {
    category: 'Policy',
    topics: [
      { name: 'AI Ethics Regulations', priority: 'Critical' },
      { name: 'Workforce Reskilling Programs', priority: 'High' },
      { name: 'Educational Funding Reform', priority: 'High' },
      { name: 'Cross-Border Skill Recognition', priority: 'Medium' }
    ]
  },
  {
    category: 'Regional',
    topics: [
      { name: 'Rural Tech Education Access', priority: 'High' },
      { name: 'Urban Innovation Hubs', priority: 'Medium' },
      { name: 'Local Industry Partnerships', priority: 'High' },
      { name: 'Remote Workforce Development', priority: 'Medium' }
    ]
  }
];

const TrendingTopicsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TrendingTopics.map((section, index) => (
        <div key={index} className="xp-window">
          <div className="xp-title-bar">
            <span>Hot Topics - {section.category}</span>
          </div>
          <div className="xp-window-content p-4">
            <ul className="space-y-3">
              {section.topics.map((topic, topicIndex) => (
                <li 
                  key={topicIndex} 
                  className={`flex justify-between items-center ${topicIndex < section.topics.length - 1 ? 'border-b pb-2' : ''}`}
                >
                  <span className="font-medium">{topic.name}</span>
                  <span 
                    className={`text-xs px-2 py-1 rounded-full 
                      ${topic.priority === 'Critical' ? 'bg-red-100 text-red-800' : 
                        topic.priority === 'High' ? 'bg-orange-100 text-orange-800' : 
                        'bg-yellow-100 text-yellow-800'}`}
                  >
                    {topic.priority}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingTopicsTab;
