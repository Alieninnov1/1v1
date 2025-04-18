
interface CurriculumItem {
  title: string;
  description: string;
  critical: boolean;
}

interface SkillItem {
  name: string;
  demand: number;
  growth: number;
}

interface TrendItem {
  name: string;
  description: string;
  impact: "high" | "medium" | "low";
}

interface IndustryRecommendations {
  curriculum: CurriculumItem[];
  skills: SkillItem[];
  trends: TrendItem[];
}

export const getIndustryRecommendations = (industry: string): IndustryRecommendations => {
  switch (industry) {
    case "tech":
      return {
        curriculum: [
          {
            title: "Add Advanced Cloud Computing Course",
            description: "Integrate AWS, Azure, and GCP certification paths into the curriculum to address high demand for cloud skills.",
            critical: true
          },
          {
            title: "Enhance Machine Learning Track",
            description: "Expand current AI/ML coursework to include practical applications with TensorFlow and PyTorch.",
            critical: true
          },
          {
            title: "Cybersecurity Specialization",
            description: "Develop a comprehensive cybersecurity track with hands-on labs and industry certification alignment.",
            critical: false
          }
        ],
        skills: [
          { name: "DevOps & CI/CD", demand: 87, growth: 92 },
          { name: "Cloud Architecture", demand: 78, growth: 85 },
          { name: "Data Engineering", demand: 83, growth: 76 },
          { name: "MLOps", demand: 65, growth: 93 }
        ],
        trends: [
          {
            name: "Zero Trust Security",
            description: "Demand for zero trust security models is growing rapidly across enterprise environments.",
            impact: "high"
          },
          {
            name: "Serverless Architecture",
            description: "Continued shift toward serverless computing models is changing how applications are built.",
            impact: "medium"
          },
          {
            name: "AI Governance",
            description: "Growing need for ethical AI considerations and governance frameworks.",
            impact: "medium"
          }
        ]
      };
    case "healthcare":
      return {
        curriculum: [
          {
            title: "Medical Data Science Specialization",
            description: "Create specialized tracks for health data analysis, HIPAA compliance, and healthcare AI.",
            critical: true
          },
          {
            title: "Telehealth Technologies Course",
            description: "Develop curriculum around remote healthcare delivery and monitoring technologies.",
            critical: false
          },
          {
            title: "Healthcare Informatics Revision",
            description: "Update existing informatics courses to incorporate latest EHR standards and interoperability frameworks.",
            critical: true
          }
        ],
        skills: [
          { name: "Health Data Privacy", demand: 92, growth: 88 },
          { name: "Remote Patient Monitoring", demand: 73, growth: 95 },
          { name: "Clinical Decision Support", demand: 79, growth: 82 },
          { name: "Healthcare Interoperability", demand: 85, growth: 90 }
        ],
        trends: [
          {
            name: "AI Diagnostics",
            description: "Machine learning models for diagnostic support are becoming mainstream in clinical settings.",
            impact: "high"
          },
          {
            name: "Wearable Integration",
            description: "Consumer health devices are increasingly integrated with professional healthcare systems.",
            impact: "medium"
          },
          {
            name: "Value-Based Care IT",
            description: "Technology solutions supporting outcomes-based reimbursement models.",
            impact: "high"
          }
        ]
      };
    default:
      return {
        curriculum: [
          {
            title: "Industry-Specific Programming Course",
            description: "Create tailored programming curriculum focused on industry needs and applications.",
            critical: true
          },
          {
            title: "Update Data Analysis Components",
            description: "Enhance existing coursework with industry-specific data analysis techniques and tools.",
            critical: false
          },
          {
            title: "Add Project Management Framework",
            description: "Incorporate agile and traditional project management methodologies relevant to the industry.",
            critical: false
          }
        ],
        skills: [
          { name: "Data Analytics", demand: 75, growth: 85 },
          { name: "Industry Software", demand: 80, growth: 70 },
          { name: "Process Automation", demand: 65, growth: 90 },
          { name: "Regulatory Compliance", demand: 70, growth: 75 }
        ],
        trends: [
          {
            name: "Digital Transformation",
            description: "Organizations are increasingly adopting digital technologies to transform business processes.",
            impact: "high"
          },
          {
            name: "Remote Collaboration",
            description: "Tools and methodologies for distributed teams are becoming essential.",
            impact: "medium"
          },
          {
            name: "Sustainability Tech",
            description: "Growing emphasis on technologies that support sustainable business practices.",
            impact: "medium"
          }
        ]
      };
  }
};
