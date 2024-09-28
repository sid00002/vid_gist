import { Calendar, ChevronRight, Clock, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function SummaryCard({
  title,
  summary,
  date,
  duration,
}: {
  title: string;
  summary: string;
  date: string;
  duration: string;
}) {
  return (
    <Card className="bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Youtube className="h-5 w-5 text-red-500" />
          <span className="truncate">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 line-clamp-4">{summary}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-sm text-gray-400 flex justify-between w-full">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
        <Button
          variant="link"
          className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal"
        >
          Read full summary <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
