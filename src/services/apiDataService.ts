
// API data service for fetching live external data

import { useQuery } from '@tanstack/react-query';

// Types for the API responses
export interface SkillTrend {
  name: string;
  growth: number;
  demand: number;
  relevance: string;
  category: string;
}

export interface RegionData {
  name: string;
  skillGap: number;
  industries: string[];
  opportunities: number;
}

export interface CurriculumRecommendation {
  id: string;
  title: string;
  description: string;
  relevanceScore: number;
  marketDemand: number;
  source: string;
}

// Fetch skill trends data
const fetchSkillTrends = async (): Promise<SkillTrend[]> => {
  // In a production environment, this would connect to a real API
  // For demo purposes, we're generating mock data
  console.log('Fetching skill trends data...');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { name: 'Data Science', growth: 42, demand: 85, relevance: 'High', category: 'Tech' },
    { name: 'AI Ethics', growth: 78, demand: 65, relevance: 'Medium', category: 'Ethics' },
    { name: 'Sustainable Design', growth: 58, demand: 72, relevance: 'High', category: 'Design' },
    { name: 'Blockchain Development', growth: 35, demand: 68, relevance: 'Medium', category: 'Tech' },
    { name: 'XR Programming', growth: 82, demand: 63, relevance: 'High', category: 'Tech' },
    { name: 'Biotech', growth: 65, demand: 80, relevance: 'High', category: 'Science' },
  ];
};

// Fetch regional data
const fetchRegionalData = async (): Promise<RegionData[]> => {
  // In a production environment, this would connect to a real API
  console.log('Fetching regional data...');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    { 
      name: 'New York', 
      skillGap: 15, 
      industries: ['Finance', 'Media', 'Tech'], 
      opportunities: 856 
    },
    { 
      name: 'San Francisco', 
      skillGap: 12, 
      industries: ['Tech', 'Biotech', 'Education'], 
      opportunities: 743 
    },
    { 
      name: 'Chicago', 
      skillGap: 18, 
      industries: ['Manufacturing', 'Healthcare', 'Finance'], 
      opportunities: 542 
    },
    { 
      name: 'Austin', 
      skillGap: 14, 
      industries: ['Tech', 'Creative', 'Education'], 
      opportunities: 423 
    },
    { 
      name: 'Seattle', 
      skillGap: 13, 
      industries: ['Tech', 'Aerospace', 'Retail'], 
      opportunities: 385 
    }
  ];
};

// Fetch curriculum recommendations
const fetchCurriculumRecommendations = async (): Promise<CurriculumRecommendation[]> => {
  console.log('Fetching curriculum recommendations...');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  return [
    {
      id: 'rec1',
      title: 'Advanced AI Ethics Framework',
      description: 'Comprehensive curriculum covering ethical considerations in AI development and deployment',
      relevanceScore: 92,
      marketDemand: 87,
      source: 'Industry Survey 2025'
    },
    {
      id: 'rec2',
      title: 'Data Science for Public Policy',
      description: 'Interdisciplinary program connecting data analysis with policy implementation',
      relevanceScore: 88,
      marketDemand: 84,
      source: 'Government Skills Initiative'
    },
    {
      id: 'rec3',
      title: 'Sustainable Tech Development',
      description: 'Environmental considerations in technology product cycles and infrastructure',
      relevanceScore: 90,
      marketDemand: 79,
      source: 'UNESCO Skills Forecast'
    },
    {
      id: 'rec4',
      title: 'Cross-discipline Innovation Methods',
      description: 'Techniques for bridging knowledge gaps between disparate fields',
      relevanceScore: 85,
      marketDemand: 82,
      source: 'Academic Research Consortium'
    }
  ];
};

// React Query hooks for data fetching with caching
export const useSkillTrends = () => {
  return useQuery({
    queryKey: ['skillTrends'],
    queryFn: fetchSkillTrends,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useRegionalData = () => {
  return useQuery({
    queryKey: ['regionalData'],
    queryFn: fetchRegionalData,
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};

export const useCurriculumRecommendations = () => {
  return useQuery({
    queryKey: ['curriculumRecommendations'],
    queryFn: fetchCurriculumRecommendations,
    staleTime: 15 * 60 * 1000, // 15 minutes
    refetchOnWindowFocus: false,
  });
};
