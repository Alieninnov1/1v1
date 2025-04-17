
import { motion } from "framer-motion";

interface RoleContentProps {
  role: "teacher" | "student" | "policy" | "industry" | "admin";
  isExpanded: boolean;
}

const RoleContent = ({ role, isExpanded }: RoleContentProps) => {
  if (!isExpanded) return null;

  const content = {
    teacher: {
      title: "Educator Tip",
      content: "Use this resource in your classroom planning"
    },
    student: {
      title: "Student Resource",
      content: "Connect this to your future career path"
    },
    policy: {
      title: "Policy Implication",
      content: "Relevant regulatory frameworks to consider"
    },
    industry: {
      title: "Industry Application",
      content: "How businesses use this innovation"
    },
    admin: {
      title: "Admin Resource",
      content: "Management and oversight considerations"
    }
  }[role];

  const bgColors = {
    teacher: "bg-blue-50 border-blue-100",
    student: "bg-green-50 border-green-100",
    policy: "bg-amber-50 border-amber-100",
    industry: "bg-red-50 border-red-100",
    admin: "bg-purple-50 border-purple-100"
  }[role];

  return (
    <div className={`mt-3 p-2 ${bgColors} rounded border text-xs`}>
      <strong>{content.title}:</strong> {content.content}
    </div>
  );
};

export default RoleContent;
