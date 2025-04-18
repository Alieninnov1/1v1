
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Building2, Briefcase, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

type StakeholderType = 'academia' | 'industry' | 'government' | '';

interface OnboardingWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const stakeholders = [
  { 
    id: 'academia', 
    name: 'Academia', 
    description: 'Educational institutions and researchers',
    icon: BookOpen,
    color: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    iconBg: 'bg-blue-500/30'
  },
  { 
    id: 'industry', 
    name: 'Industry', 
    description: 'Businesses and workforce organizations',
    icon: Briefcase,
    color: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300',
    iconBg: 'bg-indigo-500/30'
  },
  { 
    id: 'government', 
    name: 'Government', 
    description: 'Policy makers and public institutions',
    icon: Building2,
    color: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    iconBg: 'bg-purple-500/30'
  }
];

const OnboardingWizard = ({ isOpen, onClose }: OnboardingWizardProps) => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<StakeholderType>('');
  const [idea, setIdea] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({
    impact: 0,
    grant: 0,
    match: '',
    suggestion: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!role || !idea) return;
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate response data
    setResponseData({
      impact: Math.floor(Math.random() * 85) + 15,
      grant: Math.floor(Math.random() * 50000) + 5000,
      match: role === 'academia' ? 'Technical College Curriculum Update' : 
             role === 'industry' ? 'Workforce Development Program' : 
             'Regional Innovation Grant',
      suggestion: role === 'academia' ? 'Consider partnering with local industry for real-world applications.' :
                  role === 'industry' ? 'Connect with academic institutions to create specialized training.' :
                  'Align with educational outcomes for sustainable impact.'
    });
    
    setLoading(false);
    setStep(step + 1);
  };
  
  const handleComplete = () => {
    toast({
      title: "Onboarding Complete!",
      description: "Welcome to HelixHub. Your profile has been created.",
    });
    onClose();
    setStep(0);
    setRole('');
    setIdea('');
    setEmail('');
  };
  
  const steps = [
    { title: "Select Your Role", progress: 33 },
    { title: "Share Your First Idea", progress: 66 },
    { title: "See Your Impact", progress: 100 }
  ];
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-gradient-to-br from-[#1a1d2d] to-[#2a304d] rounded-2xl border border-purple-500/20 shadow-xl w-full max-w-2xl z-10 overflow-hidden"
      >
        {/* Progress bar */}
        <div className="h-1 bg-gray-700 w-full">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
            style={{ width: `${steps[step].progress}%` }}
          />
        </div>
        
        {/* Header */}
        <div className="pt-6 px-8 pb-4 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Welcome to HelixHub</h2>
          <p className="text-gray-400 mt-1">Complete your profile to get started</p>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{steps[step].title}</h3>
                
                <RadioGroup value={role} onValueChange={(value) => setRole(value as StakeholderType)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stakeholders.map(stakeholder => {
                      const Icon = stakeholder.icon;
                      return (
                        <div key={stakeholder.id} className="relative">
                          <RadioGroupItem
                            value={stakeholder.id}
                            id={stakeholder.id}
                            className="absolute opacity-0"
                          />
                          <Label
                            htmlFor={stakeholder.id}
                            className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                              role === stakeholder.id
                                ? stakeholder.color
                                : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-800/80'
                            }`}
                          >
                            <div className="flex flex-col items-center text-center">
                              <div className={`p-3 rounded-full mb-3 ${
                                stakeholder.iconBg
                              }`}>
                                <Icon size={24} />
                              </div>
                              <h4 className="font-semibold">{stakeholder.name}</h4>
                              <p className="text-xs mt-1 text-gray-400">{stakeholder.description}</p>
                            </div>
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
                
                <div className="mt-8 text-sm text-gray-400">
                  <p>
                    Your role helps us customize your experience and connect you with relevant stakeholders.
                  </p>
                </div>
              </motion.div>
            )}
            
            {step === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{steps[step].title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Share an idea, challenge, or opportunity
                    </label>
                    <Textarea
                      placeholder="Describe an innovation, skill gap, or policy need that you'd like to address..."
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      className="resize-none h-32"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Email (optional)
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll notify you about matches and collaborators
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-400">
                  <p>
                    Your idea will be analyzed for potential matches with existing initiatives,
                    grants, and other stakeholders.
                  </p>
                </div>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{steps[step].title}</h3>
                
                <div className="bg-black/30 rounded-lg p-6 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-medium text-white">Analysis Results</h4>
                    <div className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {role.charAt(0).toUpperCase() + role.slice(1)} Perspective
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Potential Impact Score</p>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-white">{responseData.impact}</span>
                        <span className="text-gray-400 ml-1">/100</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${responseData.impact}%` }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Potential Grant Match</p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl font-bold text-white"
                      >
                        ${responseData.grant.toLocaleString()}
                      </motion.div>
                      <p className="text-xs text-gray-500 mt-1">Estimated funding opportunity</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 mb-2">Best Match</p>
                    <div className="bg-blue-900/20 p-3 rounded border border-blue-800/30 text-white flex items-center">
                      <div className="bg-blue-500/20 p-2 rounded mr-3">
                        <ChevronRight size={18} className="text-blue-300" />
                      </div>
                      <span>{responseData.match}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-4 mb-2">Recommendation</p>
                    <p className="text-sm text-gray-300">{responseData.suggestion}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <div className="px-8 py-6 bg-black/30 border-t border-gray-800 flex justify-between items-center">
          {step > 0 ? (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              disabled={loading}
            >
              Back
            </Button>
          ) : (
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          )}
          
          {step < 2 ? (
            <Button 
              onClick={step === 0 ? () => setStep(step + 1) : handleSubmit}
              disabled={step === 0 ? !role : !idea || loading}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {loading ? "Processing..." : step === 0 ? "Continue" : "Submit"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          ) : (
            <Button 
              onClick={handleComplete}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Complete
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingWizard;
