import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  MessageSquare
} from "lucide-react";

const Dashboard = () => {
  const [applications] = useState([
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      status: "Interview Scheduled",
      appliedDate: "2024-01-15",
      salary: "$120,000 - $140,000",
      platform: "LinkedIn"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      status: "Under Review",
      appliedDate: "2024-01-12",
      salary: "$100,000 - $130,000",
      platform: "Indeed"
    },
    {
      id: 3,
      company: "Innovation Labs",
      position: "React Developer",
      status: "Application Sent",
      appliedDate: "2024-01-10",
      salary: "$90,000 - $110,000",
      platform: "Glassdoor"
    }
  ]);

  const stats = [
    { title: "Applications Sent", value: "24", icon: FileText, color: "text-blue-600" },
    { title: "Interviews", value: "6", icon: Calendar, color: "text-green-600" },
    { title: "Response Rate", value: "78%", icon: TrendingUp, color: "text-purple-600" },
    { title: "Profile Views", value: "156", icon: Target, color: "text-orange-600" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-success text-success-foreground";
      case "Under Review":
        return "bg-warning text-warning-foreground";
      case "Application Sent":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your job search overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in-up">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Track your latest job applications</CardDescription>
                </div>
                <Link to="/jobs">
                  <Button size="sm" className="flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Apply More</span>
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app, index) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{app.position}</h3>
                          <Badge variant="outline" className="text-xs">
                            {app.platform}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{app.company}</p>
                        <p className="text-sm font-medium text-success">{app.salary}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          Applied {new Date(app.appliedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & AI Assistant */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/jobs" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                  </Button>
                </Link>
                <Link to="/profile" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Update Resume
                  </Button>
                </Link>
                <Link to="/analytics" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Assistant Card */}
            <Card className="animate-slide-in-right border-primary/20 bg-primary/5" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>AI Assistant</span>
                </CardTitle>
                <CardDescription>Get personalized job search guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" variant="default">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ask AI for Help
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">Recent suggestions:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Update skills section on resume</li>
                      <li>• Apply to 3 React Developer roles</li>
                      <li>• Prepare for TechCorp interview</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Card */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>This Week's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Applications Goal</span>
                    <span>8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Optimization</span>
                    <span>Complete</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;