import SummaryCard from "@/components/common/SummaryCard";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

export default function page() {
  const summaries = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      summary:
        "This video explores the potential impacts of AI on various industries, discussing both the opportunities and challenges that lie ahead. Experts weigh in on ethical considerations and the need for responsible development of AI technologies. The video covers topics such as machine learning, neural networks, and the potential for AI to revolutionize fields like healthcare, finance, and transportation.",
      date: "2023-06-15",
      duration: "15:30",
    },
    {
      id: 2,
      title: "5 Easy Cooking Hacks for Beginners",
      summary:
        "Learn time-saving techniques in the kitchen with these 5 simple cooking hacks. From quick chopping methods to clever ingredient substitutions, this video is perfect for novice cooks looking to improve their culinary skills. The hacks include using a water bottle to separate egg yolks, using dental floss to cut soft foods, and using ice cube trays to store herbs.",
      date: "2023-06-14",
      duration: "8:45",
    },
    {
      id: 3,
      title: "Understanding Quantum Computing",
      summary:
        "Dive into the world of quantum computing in this educational video. It covers the basic principles of quantum mechanics, explains qubits, and discusses potential applications of quantum computers in solving complex problems. The video also touches on current limitations of quantum computing and the ongoing research to overcome these challenges.",
      date: "2023-06-13",
      duration: "22:15",
    },
    {
      id: 4,
      title: "The Art of Public Speaking",
      summary:
        "Master the skills of effective public speaking with this comprehensive guide. The video covers key aspects such as body language, voice modulation, and audience engagement. It also provides tips on overcoming stage fright and structuring your speeches for maximum impact. Real-life examples and case studies are used to illustrate these concepts.",
      date: "2023-06-12",
      duration: "18:20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Youtube className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold">VidGist</span>
        </div>
        <Button
          variant="outline"
          className="text-gray-100 border-gray-100 hover:bg-gray-800"
        >
          Back to Home
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Summary History</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaries.map((summary) => (
            <SummaryCard key={summary.id} {...summary} />
          ))}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        © 2023 VidGist. All rights reserved.
      </footer>
    </div>
  );
}
