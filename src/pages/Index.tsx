
import { useState } from "react";
import LessonCard from "@/components/LessonCard";
import VideoModal from "@/components/VideoModal";
import { Lesson } from "@/types/lesson";

const Index = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  // Dados das aulas baseados na imagem
  const lessons: Lesson[] = [
    {
      id: "1",
      title: "Apresentação do curso",
      subtitle: "Apresentação do curso",
      description: "Introdução ao curso de Portugol e visão geral do conteúdo.",
      duration: "10:15",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "2",
      title: "O que é programação",
      subtitle: "O que é programação",
      description: "Conceitos básicos e fundamentos da programação.",
      duration: "12:30",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "3",
      title: "Lógica pt1",
      subtitle: "Introdução à Lógica de Programação pt1",
      description: "Primeiros conceitos sobre lógica de programação.",
      duration: "15:45",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "4",
      title: "Lógica pt2",
      subtitle: "Introdução à Lógica de Programação pt2",
      description: "Continuação dos conceitos de lógica de programação.",
      duration: "14:20",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "5",
      title: "Lógica pt3",
      subtitle: "Introdução à Lógica de Programação pt3",
      description: "Conclusão dos conceitos de lógica de programação.",
      duration: "16:10",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "6",
      title: "Estruturas pt1",
      subtitle: "Introdução às Estruturas de Controle pt1",
      description: "Conceitos básicos de estruturas condicionais.",
      duration: "18:30",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "7",
      title: "Estruturas pt2",
      subtitle: "Introdução às Estruturas de Controle pt2",
      description: "Aprofundamento em estruturas condicionais.",
      duration: "17:45",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "8",
      title: "Laços Intro",
      subtitle: "Introdução laços de repetição",
      description: "Conceitos iniciais de loops e iterações.",
      duration: "20:15",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "9",
      title: "Faça Enquanto Para",
      subtitle: "Aula faça, enquanto e para",
      description: "Detalhamento dos diferentes tipos de laços: do-while, while e for.",
      duration: "22:30",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "10",
      title: "Exercício pt1",
      subtitle: "Exercício pt1",
      description: "Aplicação prática dos conceitos aprendidos - parte 1.",
      duration: "25:10",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
    {
      id: "11",
      title: "Exercício pt2",
      subtitle: "Exercício pt2",
      description: "Aplicação prática dos conceitos aprendidos - parte 2.",
      duration: "23:45",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Substitua pela URL real
    },
  ];

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleCloseModal = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Curso de Programação
          </h1>
          <p className="text-gray-600 mt-2">
            Aprenda os fundamentos da programação com Portugol
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onClick={() => handleLessonClick(lesson)}
            />
          ))}
        </div>
      </main>

      {/* Video Modal */}
      {selectedLesson && (
        <VideoModal
          isOpen={!!selectedLesson}
          onClose={handleCloseModal}
          title={selectedLesson.title}
          youtubeUrl={selectedLesson.youtubeUrl}
        />
      )}
    </div>
  );
};

export default Index;
