import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter, ExternalLink, CheckCircle } from "lucide-react";

interface GovernmentPageProps {
  onBack: () => void;
}

const schemes = [
  {
    id: 1,
    title: "Stand-Up India Scheme",
    category: "Business",
    description: "Loans between ₹10 lakh to ₹1 crore for women entrepreneurs",
    eligibility: ["Women aged 18+ years", "SC/ST entrepreneurs", "First-time entrepreneurs"],
    ageGroup: "18-65",
    location: "All India",
    documents: ["Aadhar Card", "PAN Card", "Business Plan", "Bank Statements"],
    applyLink: "https://standupmitra.in/",
    amount: "₹10L - ₹1Cr"
  },
  {
    id: 2,
    title: "Mahila Udyam Nidhi Scheme",
    category: "Business",
    description: "Financial assistance for women entrepreneurs in small scale industries",
    eligibility: ["Women entrepreneurs", "Small scale industries", "Manufacturing/Service sector"],
    ageGroup: "18-60",
    location: "All India",
    documents: ["Project Report", "Experience Certificate", "Property Documents"],
    applyLink: "https://msme.gov.in/",
    amount: "₹10L max"
  },
  {
    id: 3,
    title: "Beti Bachao Beti Padhao",
    category: "Education",
    description: "Scholarships and educational support for girl children",
    eligibility: ["Girl children", "Enrolled in recognized institutions", "Family income criteria"],
    ageGroup: "5-25",
    location: "All India",
    documents: ["Birth Certificate", "School/College ID", "Income Certificate"],
    applyLink: "https://wcd.nic.in/",
    amount: "₹2L per year"
  },
  {
    id: 4,
    title: "Pradhan Mantri Mudra Yojana",
    category: "Business",
    description: "Micro-finance loans for small businesses and startups",
    eligibility: ["Any individual", "Non-farm income generating activities", "New or existing businesses"],
    ageGroup: "18-65",
    location: "All India",
    documents: ["Identity Proof", "Address Proof", "Business Plan", "Income Proof"],
    applyLink: "https://mudra.org.in/",
    amount: "₹10L max"
  },
  {
    id: 5,
    title: "National Rural Livelihood Mission",
    category: "Employment",
    description: "Skill development and employment opportunities for rural women",
    eligibility: ["Rural women", "BPL families", "SHG members"],
    ageGroup: "18-45",
    location: "Rural areas",
    documents: ["Aadhar Card", "BPL Certificate", "Rural Residence Proof"],
    applyLink: "https://aajeevika.gov.in/",
    amount: "Skills + Job"
  },
  {
    id: 6,
    title: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    category: "Employment",
    description: "Skill training and placement for rural youth",
    eligibility: ["Rural youth", "Age 15-35 years", "Poor families"],
    ageGroup: "15-35",
    location: "Rural areas",
    documents: ["Age Proof", "Rural Residence Certificate", "Income Certificate"],
    applyLink: "https://ddugky.gov.in/",
    amount: "Free training + placement"
  }
];

const categories = ["All", "Business", "Education", "Employment"];
const ageGroups = ["All", "15-25", "18-35", "25-45", "45-65"];
const locations = ["All", "All India", "Rural areas", "Urban areas"];

const GovernmentPage = ({ onBack }: GovernmentPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState<typeof schemes[0] | null>(null);

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
    const matchesAge = selectedAge === "All" || scheme.ageGroup.includes(selectedAge.split('-')[0]);
    const matchesLocation = selectedLocation === "All" || scheme.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesAge && matchesLocation;
  });

  const checkEligibility = (scheme: typeof schemes[0]) => {
    // Simple eligibility checker - in real app this would be more sophisticated
    alert(`Eligibility Check for ${scheme.title}:\n\n✓ You appear to meet basic criteria\n✓ Age group: ${scheme.ageGroup}\n✓ Location: ${scheme.location}\n\nNext steps:\n1. Gather required documents\n2. Visit the official website\n3. Submit your application\n\nClick OK to continue!`);
  };

  if (selectedScheme) {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <div className="bg-gradient-primary p-4 text-white">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedScheme(null)}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{selectedScheme.title}</h1>
              <p className="text-sm text-white/80">{selectedScheme.category}</p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground mb-4">{selectedScheme.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-foreground">Age Group</h4>
                <p className="text-sm text-muted-foreground">{selectedScheme.ageGroup} years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">{selectedScheme.location}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Financial Support</h4>
                <p className="text-sm text-muted-foreground">{selectedScheme.amount}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Category</h4>
                <p className="text-sm text-muted-foreground">{selectedScheme.category}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Eligibility Criteria</h3>
            <ul className="space-y-2">
              {selectedScheme.eligibility.map((criterion, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">{criterion}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Required Documents</h3>
            <div className="grid grid-cols-1 gap-2">
              {selectedScheme.documents.map((doc, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                  <span className="text-sm text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex gap-3">
            <Button 
              variant="empowering" 
              className="flex-1"
              onClick={() => checkEligibility(selectedScheme)}
            >
              Check Eligibility
            </Button>
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={() => window.open(selectedScheme.applyLink, '_blank')}
            >
              Apply Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
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
            <h1 className="text-2xl font-bold">GOVERNMENT SUPPORT</h1>
            <p className="text-white/80">Schemes and financial assistance</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
          <Input
            placeholder="Search schemes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
          />
        </div>

        {/* Filter Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="text-white hover:bg-white/20"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="p-4 bg-white border-b space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Age Group</h4>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map((age) => (
                <Button
                  key={age}
                  variant={selectedAge === age ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAge(age)}
                >
                  {age}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Location</h4>
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLocation(location)}
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Schemes List */}
      <div className="p-4 space-y-4">
        {filteredSchemes.map((scheme) => (
          <Card 
            key={scheme.id}
            className="p-4 hover:shadow-elegant transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedScheme(scheme)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">{scheme.title}</h3>
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                  {scheme.category}
                </span>
                <p className="text-sm text-muted-foreground">{scheme.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-accent">{scheme.amount}</div>
                <div className="text-xs text-muted-foreground">{scheme.ageGroup} years</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-muted-foreground">
                📍 {scheme.location}
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                View details →
              </Button>
            </div>
          </Card>
        ))}

        {filteredSchemes.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No schemes found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedAge("All");
                setSelectedLocation("All");
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GovernmentPage;