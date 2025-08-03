import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Briefcase, ArrowRight } from "lucide-react";

interface BuildPageProps {
  onBack: () => void;
}

const BuildPage = ({ onBack }: BuildPageProps) => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const ideaSteps = [
    {
      title: "What interests you?",
      questions: ["What problems do you see around you?", "What skills do you have?", "What resources are available to you?"]
    },
    {
      title: "Define your idea",
      questions: ["Who would benefit from your solution?", "How will you deliver value?", "What makes your idea unique?"]
    },
    {
      title: "Plan your execution",
      questions: ["What's your first step?", "What resources do you need?", "Who can help you?"]
    },
    {
      title: "Take action",
      questions: ["Start small - what can you do today?", "How will you test your idea?", "When will you launch?"]
    }
  ];

  const jobPaths = [
    {
      title: "Internships",
      description: "Gain experience while learning",
      skills: ["Basic computer skills", "Communication", "Willingness to learn"],
      nextSteps: ["Apply to local companies", "Join online internship programs", "Contact NGOs"]
    },
    {
      title: "Full-time Jobs",
      description: "Stable career opportunities",
      skills: ["Specialized skills", "Professional experience", "Strong portfolio"],
      nextSteps: ["Update your resume", "Practice interviews", "Apply through job portals"]
    },
    {
      title: "Freelancing",
      description: "Work independently on projects",
      skills: ["Marketable skill", "Self-discipline", "Client communication"],
      nextSteps: ["Create online profiles", "Build a portfolio", "Start with small projects"]
    },
    {
      title: "Part-time Work",
      description: "Flexible work while pursuing other goals",
      skills: ["Time management", "Reliability", "Basic job skills"],
      nextSteps: ["Look for local opportunities", "Check online platforms", "Network in your community"]
    }
  ];

  if (selectedPath === "idea") {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="bg-gradient-secondary p-4 text-white">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedPath(null)}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Brainstorm Your Idea</h1>
              <p className="text-sm text-white/80">Step {currentStep + 1} of {ideaSteps.length}</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Card className="p-6 mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {ideaSteps[currentStep].title}
            </h2>
            
            <div className="space-y-4">
              {ideaSteps[currentStep].questions.map((question, index) => (
                <Card key={index} className="p-4 bg-muted/50">
                  <p className="text-foreground font-medium mb-2">{question}</p>
                  <textarea
                    placeholder="Write your thoughts here..."
                    className="w-full p-3 border rounded-lg resize-none h-20 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </Card>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              
              <Button
                variant="empowering"
                onClick={() => {
                  if (currentStep < ideaSteps.length - 1) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    alert("Congratulations! You've completed the ideation process. Now start taking action on your idea!");
                  }
                }}
              >
                {currentStep === ideaSteps.length - 1 ? "Complete" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Progress Bar */}
          <div className="bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / ideaSteps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (selectedPath === "job") {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="bg-gradient-primary p-4 text-white">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedPath(null)}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Find a Job</h1>
              <p className="text-sm text-white/80">Choose your career path</p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {jobPaths.map((path) => (
            <Card key={path.title} className="p-6 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-2">{path.title}</h3>
              <p className="text-muted-foreground mb-4">{path.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Skills needed:</h4>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Next steps:</h4>
                <ul className="space-y-1">
                  {path.nextSteps.map((step, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {step}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="empowering" className="w-full">
                Start this path
              </Button>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-secondary p-4 text-white">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">BUILD</h1>
            <p className="text-white/80">Your pathway to success</p>
          </div>
        </div>
      </div>

      {/* Main Options */}
      <div className="p-4">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What's your goal today?
          </h2>
          <p className="text-muted-foreground mb-6">
            Choose your path and we'll guide you step by step
          </p>
        </Card>

        <div className="space-y-4">
          <Card 
            className="overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedPath("idea")}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-secondary p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Brainstorm Your Idea</h3>
                  <p className="text-muted-foreground">
                    Have a business idea or want to start something new?
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground mb-4">
                We'll help you:
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Develop and refine your idea</li>
                <li>• Create an execution plan</li>
                <li>• Identify resources and support</li>
                <li>• Take your first steps</li>
              </ul>
              
              <Button variant="empowering" className="w-full">
                Start brainstorming
              </Button>
            </div>
          </Card>

          <Card 
            className="overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedPath("job")}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-primary p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Find a Job</h3>
                  <p className="text-muted-foreground">
                    Ready to start working or advance your career?
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground mb-4">
                Explore opportunities in:
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Internships and entry-level positions</li>
                <li>• Full-time career opportunities</li>
                <li>• Freelancing and remote work</li>
                <li>• Part-time and flexible roles</li>
              </ul>
              
              <Button variant="hero" className="w-full">
                Explore job paths
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuildPage;