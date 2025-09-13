import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Filter,
  Clock,
  Building,
  Heart,
  ExternalLink
} from "lucide-react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120,000 - $140,000",
      type: "Full-time",
      posted: "2 days ago",
      platform: "LinkedIn",
      description: "Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
      remote: true
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      posted: "1 day ago",
      platform: "Indeed",
      description: "Build scalable web applications from frontend to backend. Work with React, Node.js, and cloud technologies.",
      requirements: ["3+ years full stack experience", "Node.js & React", "AWS/Cloud experience"],
      remote: false
    },
    {
      id: 3,
      title: "React Developer",
      company: "Innovation Labs",
      location: "Austin, TX",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      posted: "3 days ago",
      platform: "Glassdoor",
      description: "Create responsive web applications and collaborate with design teams to implement pixel-perfect UIs.",
      requirements: ["2+ years React", "CSS/SCSS expertise", "Agile methodology"],
      remote: true
    },
    {
      id: 4,
      title: "Frontend Engineer",
      company: "Global Systems",
      location: "Seattle, WA",
      salary: "$110,000 - $125,000",
      type: "Full-time",
      posted: "5 days ago",
      platform: "Handshake",
      description: "Work on large-scale applications serving millions of users. Modern tech stack with great team culture.",
      requirements: ["4+ years frontend", "Performance optimization", "Testing frameworks"],
      remote: true
    },
    {
      id: 5,
      title: "JavaScript Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      salary: "$85,000 - $105,000",
      type: "Contract",
      posted: "1 week ago",
      platform: "LinkedIn",
      description: "Build interactive websites and web applications for high-profile clients in entertainment industry.",
      requirements: ["JavaScript/ES6+", "Creative problem solving", "Client communication"],
      remote: false
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "LinkedIn":
        return "bg-blue-100 text-blue-800";
      case "Indeed":
        return "bg-green-100 text-green-800";
      case "Glassdoor":
        return "bg-purple-100 text-purple-800";
      case "Handshake":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Job Search</h1>
          <p className="text-muted-foreground">Discover opportunities from all major job platforms in one place.</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 animate-scale-in">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs, companies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                </SelectContent>
              </Select>

              <Select value={salaryFilter} onValueChange={setSalaryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                  <SelectItem value="100k-120k">$100k - $120k</SelectItem>
                  <SelectItem value="120k+">$120k+</SelectItem>
                </SelectContent>
              </Select>

              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Posted" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Found {jobs.length} jobs matching your criteria
              </p>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <Card 
              key={job.id} 
              className="job-card animate-fade-in-up hover:border-primary/20" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Link to={`/job/${job.id}`} className="hover:text-primary transition-colors">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </Link>
                      <Badge className={getPlatformColor(job.platform)}>
                        {job.platform}
                      </Badge>
                      {job.remote && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Remote
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button size="sm" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Link to={`/job/${job.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;