
import { Clock } from "lucide-react";
import { Lesson } from "@/types/lesson";

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

const LessonCard = ({ lesson, onClick }: LessonCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
    >
      {/* Duration badge */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-30 rounded px-2 py-1 text-white text-sm font-medium flex items-center gap-1">
        <Clock size={12} />
        {lesson.duration}
      </div>
      
      {/* Title */}
      <h3 className="text-white text-xl font-bold mb-4 mt-8 leading-tight">
        {lesson.title}
      </h3>
      
      {/* Content area */}
      <div className="mt-auto">
        <h4 className="text-white font-semibold text-sm mb-2">
          {lesson.subtitle}
        </h4>
        <p className="text-blue-100 text-sm leading-relaxed">
          {lesson.description}
        </p>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </div>
  );
};

export default LessonCard;
