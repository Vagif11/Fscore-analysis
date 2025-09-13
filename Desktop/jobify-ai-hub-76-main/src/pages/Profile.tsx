import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload,
  FileText, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Plus,
  Edit,
  Download,
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Frontend Developer",
    summary: "Passionate frontend developer with 4+ years of experience building responsive web applications using React, TypeScript, and modern CSS frameworks. Strong focus on user experience and performance optimization.",
    
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2022 - Present",
        description: "Developed and maintained React applications, improved site performance by 40%, collaborated with UX team on design implementation."
      },
      {
        title: "Junior Developer",
        company: "StartupCo",
        period: "2020 - 2022",
        description: "Built responsive websites, implemented new features, participated in code reviews and agile development processes."
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        period: "2016 - 2020",
        gpa: "3.8"
      }
    ],
    
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "CSS/SCSS", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Git", level: 85 },
      { name: "Figma", level: 60 }
    ],
    
    certifications: [
      "AWS Certified Developer",
      "Google Analytics Certified",
      "React Developer Certification"
    ]
  };

  const aiSuggestions = [
    {
      type: "improvement",
      title: "Add GitHub Portfolio Link",
      description: "Include your GitHub profile to showcase your projects",
      priority: "high"
    },
    {
      type: "optimization",
      title: "Enhance Skills Section",
      description: "Add trending skills like Next.js and Tailwind CSS",
      priority: "medium"
    },
    {
      type: "content",
      title: "Quantify Achievements",
      description: "Add specific metrics to your experience descriptions",
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Profile & Resume</h1>
            <p className="text-muted-foreground">Manage your professional profile and optimize your resume</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              size="sm"
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input value={userProfile.name} disabled={!isEditing} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Professional Title</label>
                    <Input value={userProfile.title} disabled={!isEditing} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input value={userProfile.email} disabled={!isEditing} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input value={userProfile.phone} disabled={!isEditing} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input value={userProfile.location} disabled={!isEditing} />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Professional Summary</label>
                  <Textarea 
                    value={userProfile.summary} 
                    disabled={!isEditing}
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="animate-fade-in-up">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Work Experience</span>
                </CardTitle>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {userProfile.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      {isEditing && (
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {userProfile.education.map((edu, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.period} • GPA: {edu.gpa}</p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Skills & Expertise</CardTitle>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userProfile.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Resume Optimizer */}
            <Card className="animate-slide-in-right border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>AI Resume Optimizer</span>
                </CardTitle>
                <CardDescription>Improve your resume with AI-powered suggestions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <p className="text-sm text-muted-foreground">Resume Score</p>
                </div>
                
                <Progress value={85} className="h-2" />
                
                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Resume
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Get AI Feedback
                </Button>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>Personalized recommendations to improve your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex items-start space-x-3">
                      {suggestion.priority === "high" ? (
                        <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{suggestion.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full" size="sm">
                  View All Suggestions
                </Button>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Certifications</span>
                </CardTitle>
                {isEditing && (
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {userProfile.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Profile Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile Views</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Resume Downloads</span>
                  <span className="font-medium">34</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Job Matches</span>
                  <span className="font-medium">89%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;