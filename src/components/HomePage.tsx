import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Hammer, Building2 } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const programs = [
    {
      id: 'learn',
      title: 'LEARN',
      description: '30+ learning categories with free resources',
      icon: BookOpen,
      color: 'bg-gradient-primary',
      details: 'Access courses, tutorials, and educational content'
    },
    {
      id: 'build',
      title: 'BUILD',
      description: 'Develop ideas or find job opportunities',
      icon: Hammer,
      color: 'bg-gradient-secondary',
      details: 'Get guidance for entrepreneurship or career paths'
    },
    {
      id: 'government',
      title: 'GOVERNMENT SUPPORT',
      description: 'Discover schemes and financial assistance',
      icon: Building2,
      color: 'bg-accent',
      details: 'Find relevant government programs and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">CONNECT</h1>
        <p className="text-white/90">Empowering Rural Women</p>
      </div>

      {/* Welcome Section */}
      <div className="p-6">
        <Card className="p-6 mb-6 shadow-elegant">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Welcome to Your Journey! 🌟
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Choose your path to empowerment. Each program is designed to support your 
            personal and professional growth.
          </p>
        </Card>

        {/* Program Cards */}
        <div className="space-y-4">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={program.id}
                className="overflow-hidden shadow-md hover:shadow-elegant transition-all duration-300 cursor-pointer group"
                onClick={() => onNavigate(program.id)}
              >
                <div className="flex items-center p-6">
                  <div className={`${program.color} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {program.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {program.details}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="ml-4 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    Start →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <Card className="mt-6 p-6 bg-gradient-primary text-white">
          <h3 className="text-lg font-semibold mb-4">Your Impact</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-xs opacity-90">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-xs opacity-90">Resources</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs opacity-90">Access</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;