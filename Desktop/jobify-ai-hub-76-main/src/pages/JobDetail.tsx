import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  MapPin, 
  Calendar, 
  DollarSign, 
  Building,
  Clock,
  Heart,
  Share2,
  FileText,
  Zap,
  CheckCircle,
  ExternalLink,
  MessageSquare
} from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();

  // Mock job data - in real app this would come from API
  const job = {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
    type: "Full-time",
    posted: "2 days ago",
    platform: "LinkedIn",
    remote: true,
    description: `We are looking for a Senior Frontend Developer to join our dynamic team. You'll be responsible for building cutting-edge web applications using React, TypeScript, and modern frontend technologies.

This is an exciting opportunity to work on products that serve millions of users worldwide. You'll collaborate with designers, backend developers, and product managers to create exceptional user experiences.

Key Responsibilities:
• Develop responsive web applications using React and TypeScript
• Collaborate with UX/UI designers to implement pixel-perfect designs
• Optimize applications for maximum speed and scalability
• Write clean, maintainable, and well-documented code
• Participate in code reviews and mentor junior developers
• Stay up-to-date with the latest frontend technologies and best practices`,
    
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong proficiency in TypeScript",
      "Experience with state management (Redux, Context API)",
      "Knowledge of modern CSS frameworks (Tailwind, Styled Components)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Experience with build tools (Webpack, Vite)",
      "Understanding of performance optimization techniques",
      "Strong problem-solving and communication skills"
    ],
    
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote-friendly culture",
      "Professional development budget ($2,000/year)",
      "Unlimited PTO policy",
      "Top-tier equipment and home office setup allowance",
      "Team retreats and company events",
      "401(k) with company matching"
    ],
    
    companyInfo: {
      size: "500-1000 employees",
      industry: "Technology",
      founded: "2015",
      website: "https://techcorp.com"
    }
  };

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
      
      <div className="max-w-5xl mx-auto p-6">
        {/* Back Button */}
        <div className="mb-6 animate-fade-in">
          <Link to="/jobs">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Jobs</span>
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h1 className="text-3xl font-bold">{job.title}</h1>
                      <Badge className={getPlatformColor(job.platform)}>
                        {job.platform}
                      </Badge>
                      {job.remote && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Remote
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button size="lg" className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on {job.platform}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card className="animate-slide-in-right border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>AI Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  <Zap className="h-4 w-4 mr-2" />
                  Tailor Resume
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Cover Letter
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Get Interview Tips
                </Button>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">AI Match Score: 85%</p>
                  <p className="text-xs">Your profile aligns well with this role. Consider highlighting your React and TypeScript experience.</p>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Industry:</span>
                    <span>{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span>{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Founded:</span>
                    <span>{job.companyInfo.founded}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3 text-sm">
                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <h4 className="font-semibold">Frontend Engineer</h4>
                    <p className="text-muted-foreground">StartupXYZ • $100k-$130k</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <h4 className="font-semibold">React Developer</h4>
                    <p className="text-muted-foreground">Innovation Labs • $90k-$110k</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <h4 className="font-semibold">JavaScript Developer</h4>
                    <p className="text-muted-foreground">Creative Agency • $85k-$105k</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  View All Similar Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;