import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Bookmark, ExternalLink } from "lucide-react";

interface LearnPageProps {
  onBack: () => void;
}

const categories = [
  {
    name: "Development",
    subcategories: ["Web Development", "Data Science", "Mobile Development", "Programming Languages (Python, Java, C++)", "Game Development", "Database Design & Management", "Software Testing", "Software Engineering", "No-Code Development"],
    color: "bg-blue-500",
    icon: "💻"
  },
  {
    name: "Business",
    subcategories: ["Project Management", "Business Analytics & Intelligence", "Finance & Accounting", "Entrepreneurship", "Operations Management", "Sales", "Communications", "Business Strategy", "Human Resources", "Management & Leadership"],
    color: "bg-green-500",
    icon: "📊"
  },
  {
    name: "IT & Software",
    subcategories: ["IT Certifications (CompTIA, AWS, Cisco, etc.)", "Network & Security", "Hardware", "Operating Systems", "Tech Support", "Virtualization", "DevOps", "Cloud Computing (AWS, Azure, GCP)"],
    color: "bg-purple-500",
    icon: "🔧"
  },
  {
    name: "Design",
    subcategories: ["Graphic Design", "UX/UI Design", "Design Tools (Figma, Adobe Suite)", "Game Design", "Web Design", "Interior Design", "Fashion Design", "3D & Animation"],
    color: "bg-pink-500",
    icon: "🎨"
  },
  {
    name: "Marketing",
    subcategories: ["Digital Marketing", "Content Marketing", "Social Media Marketing", "Marketing Analytics", "Branding", "SEO & SEM", "Product Marketing", "Affiliate Marketing", "Email Marketing"],
    color: "bg-orange-500",
    icon: "📈"
  },
  {
    name: "Personal Development",
    subcategories: ["Productivity", "Leadership", "Personal Finance", "Career Development", "Mental Health", "Mindfulness & Meditation", "Memory & Study Skills", "Parenting"],
    color: "bg-indigo-500",
    icon: "🧠"
  },
  {
    name: "Music",
    subcategories: ["Instruments (Piano, Guitar, Drums)", "Music Theory", "Music Production", "Singing & Voice Training", "DJing", "Songwriting", "Audio Engineering"],
    color: "bg-yellow-500",
    icon: "🎵"
  },
  {
    name: "Photography & Video",
    subcategories: ["Digital Photography", "Videography", "Video Editing (Adobe Premiere, Final Cut, etc.)", "Portrait Photography", "Drone Photography"],
    color: "bg-red-500",
    icon: "📷"
  },
  {
    name: "Teaching & Academics",
    subcategories: ["Online Education Tools", "Language Learning", "Science & Math", "Humanities", "Test Prep (GRE, GMAT, IELTS, etc.)"],
    color: "bg-teal-500",
    icon: "🌍"
  },
  {
    name: "Health & Fitness",
    subcategories: ["Yoga", "Nutrition", "Fitness", "General Health", "Mental Health", "Sports", "Self Defense"],
    color: "bg-emerald-500",
    icon: "🧘"
  },
  {
    name: "Lifestyle",
    subcategories: ["Arts & Crafts", "Home Improvement", "Travel", "Gaming", "Beauty & Makeup", "Pet Care & Training"],
    color: "bg-rose-500",
    icon: "💡"
  }
];

const LearnPage = ({ onBack }: LearnPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleBookmark = (item: string) => {
    setBookmarked(prev => 
      prev.includes(item) 
        ? prev.filter(b => b !== item)
        : [...prev, item]
    );
  };

  const handleSubcategoryClick = (subcategory: string) => {
    // Simulate opening resource links (in real app, this would navigate to actual resources)
    const resources = [
      { name: "Khan Academy", url: "https://khanacademy.org" },
      { name: "YouTube Tutorial", url: "https://youtube.com" },
      { name: "Free Course", url: "https://coursera.org" }
    ];
    
    alert(`Resources for ${subcategory}:\n${resources.map(r => `• ${r.name}`).join('\n')}\n\nClick OK to continue exploring!`);
  };

  if (selectedCategory) {
    const category = categories.find(c => c.name === selectedCategory);
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="bg-gradient-primary p-4 text-white">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedCategory(null)}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{category?.name}</h1>
              <p className="text-sm text-white/80">{category?.subcategories.length} specializations</p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {category?.subcategories.map((subcategory) => (
            <Card 
              key={subcategory}
              className="p-4 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {subcategory}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Free resources available
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(subcategory);
                    }}
                    className={bookmarked.includes(subcategory) ? "text-primary" : "text-muted-foreground"}
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-primary p-4 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">LEARN</h1>
            <p className="text-white/80">30+ categories of free learning</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
          <Input
            placeholder="Search categories or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredCategories.map((category) => (
            <Card 
              key={category.name}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.subcategories.length} specializations
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    Explore →
                  </Button>
                </div>
                
                {/* Show first few subcategories as preview */}
                <div className="text-xs text-muted-foreground">
                  {category.subcategories.slice(0, 3).join(" • ")}
                  {category.subcategories.length > 3 && ` • +${category.subcategories.length - 3} more`}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {bookmarked.length > 0 && (
          <Card className="mt-6 p-4 bg-gradient-primary text-white">
            <h3 className="font-semibold mb-2">📚 Bookmarked ({bookmarked.length})</h3>
            <div className="text-sm opacity-90">
              {bookmarked.slice(0, 2).join(", ")}
              {bookmarked.length > 2 && ` +${bookmarked.length - 2} more`}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LearnPage;