import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, RotateCcw, CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Which dynasty built the Brihadeeswarar Temple?",
    options: ["Cholas", "Pallavas", "Pandyas", "Nayaks"],
    correct: 0,
    explanation: "The Brihadeeswarar Temple was built by Raja Raja Chola I in the 11th century, showcasing the architectural prowess of the Chola dynasty.",
    difficulty: 'Easy'
  },
  {
    id: "q2", 
    question: "How many sculptures are said to adorn the Meenakshi Temple?",
    options: ["15,000", "25,000", "33,000", "45,000"],
    correct: 2,
    explanation: "The Meenakshi Amman Temple is famous for having over 33,000 intricate sculptures adorning its gopurams and halls.",
    difficulty: 'Medium'
  },
  {
    id: "q3",
    question: "The Shore Temple at Mahabalipuram was built by which dynasty?",
    options: ["Cholas", "Pallavas", "Cheras", "Pandyas"],
    correct: 1,
    explanation: "The Shore Temple was constructed by the Pallavas in the 8th century, representing their mastery in rock-cut architecture.",
    difficulty: 'Medium'
  },
  {
    id: "q4",
    question: "Name UNESCO World Heritage site that stands as the world's tallest temple tower of its time.",
    options: ["Brihadeeswarar Temple", "Meenakshi Temple", "Ramanathaswamy Temple", "Airavatesvara Temple"],
    correct: 0,
    explanation: "Brihadeeswarar Temple Thanjavur built by Raja Raja Chola I, this UNESCO World Heritage site stands as the world's tallest temple tower of its time, showcasing the pinnacle of Chola architecture.",
    difficulty: 'Medium'
  },
  {
    id: "q5",
    question: "Classical dance form born in Tamil temples; graceful gestures, storytelling through movement.",
    options: ["Karagattam","Bharatanatyam","Kuchipudi","Kathakali"],
    correct:  1,
    explanation: "Bharatanatyam is the Classical dance form born in Tamil temples; graceful gestures, storytelling through movement .",
    difficulty: 'Medium'
  },
  {
    id: "q6",
    question: "Which of the following is UNESCO-recognized metalwork tradition in Tamilnadu",
    options: ["Pattachitra","Dhokra","Swamimalai Bronze Casting","Bidri"],
    correct:  2,
    explanation: "Swamimalai Bronze Casting is UNESCO-recognized metalwork tradition in Tamilnadu .",
    difficulty: 'Medium'
  },
  {
    id: "q7",
    question: "Moral masterpiece with 1,330 couplets on virtue, wealth, and love.",
    options : ["Ramayana","Mahabharata","Tirukkural","Silappatikaram"],
    correct: 2,
    explanation: "Tirukkural is a Moral masterpiece with 1,330 couplets on virtue, wealth, and love.",
    difficulty: 'Medium'
  },
  {
    id: "q8",
    question: "Madurai's grandest temple festival reenacting the celestial wedding of Goddess Meenakshi and Lord Sundareswarar, attracting millions of devotees.",
    options : ["Panguni Uthiram","Chithirai Festival","Navaratri","Thaipusam"],
    correct: 1,
    explanation: "Chithirai Festival is the Madurai's grandest temple festival reenacting the celestial wedding of Goddess Meenakshi and Lord Sundareswarar, attracting millions of devotees.",
    difficulty: 'Medium'
  },
  {
    id: "q9",
    question: "Built on a sacred rock where Swami Vivekananda meditated in 1892, this memorial stands at the confluence of three seas. A symbol of spirituality and national pride, offering panoramic ocean views..",
    options : ["Vivekananda Rock Memorial","Thiruvalluvar Statue","Gandhi Mandapam","Rameswaram Temple"],
    correct: 0,
    explanation: "Vivekananda Rock Memorial is Built on a sacred rock where Swami Vivekananda meditated in 1892, this memorial stands at the confluence of three seas. A symbol of spirituality and national pride, offering panoramic ocean views.",
    difficulty: 'Medium'
  },
  {
    id: "q10",
    question: "Earliest Tamil poetry, reflecting love, valor, and ethics..",
    options : ["Ramayana","Mahabharata","Tirukkural","Sangam Literature"],
    correct: 3,
    explanation: "Sangam Literature is the Earliest Tamil poetry, reflecting love, valor, and ethics.",
    difficulty: 'Medium'
  },

];

const HeritageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(quizQuestions.length).fill(false));
  };

  const currentQ = quizQuestions[currentQuestion];
  const isQuizComplete = currentQuestion === quizQuestions.length - 1 && answered[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heritage text-4xl md:text-5xl font-bold text-primary mb-4">
            Heritage Knowledge Quiz
          </h2>
          <p className="font-culture text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of Tamil Nadu's rich history, monuments, and cultural heritage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/20 shadow-temple">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="outline" className="border-accent text-accent">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </Badge>
                <Badge 
                  className={`${
                    currentQ.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    currentQ.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {currentQ.difficulty}
                </Badge>
              </div>
              
              <CardTitle className="font-heritage text-2xl text-primary leading-tight">
                {currentQ.question}
              </CardTitle>
              
              {!isQuizComplete && (
                <CardDescription className="font-culture">
                  Choose the correct answer from the options below
                </CardDescription>
              )}
            </CardHeader>

            <CardContent>
              {!isQuizComplete ? (
                <div className="space-y-4">
                  {/* Options */}
                  <div className="grid gap-3">
                    {currentQ.options.map((option, index) => {
                      let buttonClass = "justify-start text-left h-auto p-4 hover:bg-accent/10 transition-all duration-300";
                      
                      if (answered[currentQuestion]) {
                        if (index === currentQ.correct) {
                          buttonClass += " bg-green-100 text-green-800 border-green-300";
                        } else if (index === selectedAnswer && index !== currentQ.correct) {
                          buttonClass += " bg-red-100 text-red-800 border-red-300";
                        }
                      }

                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className={buttonClass}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={answered[currentQuestion]}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-semibold text-sm">
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span className="font-culture">{option}</span>
                            {answered[currentQuestion] && index === currentQ.correct && (
                              <CheckCircle className="w-5 h-5 ml-auto text-green-600" />
                            )}
                            {answered[currentQuestion] && index === selectedAnswer && index !== currentQ.correct && (
                              <XCircle className="w-5 h-5 ml-auto text-red-600" />
                            )}
                          </div>
                        </Button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showResult && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-accent/20">
                      <h4 className="font-culture font-semibold text-foreground mb-2">Explanation:</h4>
                      <p className="font-culture text-muted-foreground text-sm leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  )}

                  {/* Next Button */}
                  {showResult && currentQuestion < quizQuestions.length - 1 && (
                    <div className="flex justify-end mt-6">
                      <Button onClick={nextQuestion} className="bg-gradient-temple font-culture">
                        Next Question
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                /* Quiz Complete */
                <div className="text-center py-8">
                  <div className="mb-6">
                    <Award className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="font-heritage text-2xl font-bold text-primary mb-2">
                      Quiz Complete!
                    </h3>
                    <p className="font-culture text-lg text-muted-foreground">
                      You scored {score} out of {quizQuestions.length}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                      <div 
                        className="absolute inset-0 rounded-full border-8 border-gold border-t-transparent transform -rotate-90 transition-all duration-1000"
                        style={{ 
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + (score / quizQuestions.length) * 50}% 0%, ${50 + (score / quizQuestions.length) * 50}% 100%, 50% 100%)`
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heritage text-2xl font-bold text-primary">
                          {Math.round((score / quizQuestions.length) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz} variant="outline" className="font-culture">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                    <Button className="bg-gradient-temple font-culture">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Progress Bar */}
          {!isQuizComplete && (
            <div className="mt-8">
              <div className="flex justify-between text-sm font-culture text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{answered.filter(Boolean).length}/{quizQuestions.length} answered</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-accent to-gold h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(answered.filter(Boolean).length / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeritageQuiz;