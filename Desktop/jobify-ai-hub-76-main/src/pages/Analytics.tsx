import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Calendar, 
  Target,
  Clock,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Award,
  Zap
} from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      title: "Applications Sent",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: Target,
      description: "This month"
    },
    {
      title: "Response Rate",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      description: "Above average"
    },
    {
      title: "Interviews Scheduled",
      value: "12",
      change: "+8%",
      trend: "up",
      icon: Calendar,
      description: "This month"
    },
    {
      title: "Average Response Time",
      value: "3.2 days",
      change: "-0.8 days",
      trend: "up",
      icon: Clock,
      description: "Getting faster"
    }
  ];

  const topSkills = [
    { skill: "React", demand: 95, applications: 23 },
    { skill: "TypeScript", demand: 89, applications: 18 },
    { skill: "JavaScript", demand: 92, applications: 31 },
    { skill: "Python", demand: 76, applications: 8 },
    { skill: "Node.js", demand: 81, applications: 15 },
    { skill: "CSS/SCSS", demand: 73, applications: 19 }
  ];

  const recentApplications = [
    {
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      status: "Interview Scheduled",
      responseTime: "2 days",
      matchScore: 92
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      status: "Under Review",
      responseTime: "5 days",
      matchScore: 78
    },
    {
      company: "Innovation Labs",
      position: "React Developer",
      status: "Application Sent",
      responseTime: "-",
      matchScore: 85
    },
    {
      company: "Global Systems",
      position: "Frontend Engineer",
      status: "Rejected",
      responseTime: "1 day",
      matchScore: 65
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-success text-success-foreground";
      case "Under Review":
        return "bg-warning text-warning-foreground";
      case "Application Sent":
        return "bg-secondary text-secondary-foreground";
      case "Rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const improvementAreas = [
    {
      area: "Cover Letter Personalization",
      current: 68,
      target: 85,
      priority: "High"
    },
    {
      area: "Application Response Time",
      current: 78,
      target: 90,
      priority: "Medium"
    },
    {
      area: "LinkedIn Profile Optimization",
      current: 82,
      target: 95,
      priority: "Low"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Job Search Analytics</h1>
          <p className="text-muted-foreground">Track your progress and optimize your job search strategy</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <div className={`flex items-center space-x-1 text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Application Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Applications */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Application Performance</span>
                </CardTitle>
                <CardDescription>Detailed breakdown of your recent applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{app.position}</h3>
                          <Badge className={getStatusColor(app.status)}>
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{app.company}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Match: {app.matchScore}%</span>
                          <div className="w-16">
                            <Progress value={app.matchScore} className="h-2" />
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Response: {app.responseTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Analysis */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Skills Market Demand</span>
                </CardTitle>
                <CardDescription>How your skills align with current job market trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.skill}</span>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{skill.applications} applications</span>
                          <span>•</span>
                          <span>{skill.demand}% demand</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={skill.demand} className="flex-1 h-2" />
                        <span className="text-sm font-medium w-12">{skill.demand}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card className="animate-slide-in-right border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>AI Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-card rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-success" />
                    <span className="font-medium text-sm">Top Performing Skill</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    React applications have 35% higher response rates. Consider highlighting this skill more prominently.
                  </p>
                </div>
                
                <div className="p-3 bg-card rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-4 w-4 text-warning" />
                    <span className="font-medium text-sm">Optimization Opportunity</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Applications sent on Tuesday-Thursday show 23% better response rates.
                  </p>
                </div>

                <div className="p-3 bg-card rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">Market Trend</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    TypeScript demand increased 18% this month. Great timing for your skill set!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Improvement Areas */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Areas for Improvement</CardTitle>
                <CardDescription>Focus areas to boost your success rate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {improvementAreas.map((area, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{area.area}</span>
                      <Badge variant={area.priority === "High" ? "destructive" : area.priority === "Medium" ? "default" : "secondary"}>
                        {area.priority}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Current: {area.current}%</span>
                        <span>Target: {area.target}%</span>
                      </div>
                      <Progress value={area.current} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Goals */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Monthly Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Applications</span>
                    <span>47/50</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Interview Goal</span>
                    <span>12/15</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Rate</span>
                    <span>68/75%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Success Score */}
            <Card className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Overall Success Score</CardTitle>
                <CardDescription>Your job search effectiveness rating</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">82</div>
                <div className="text-sm text-muted-foreground mb-4">Above Average</div>
                <Progress value={82} className="h-3 mb-4" />
                <p className="text-xs text-muted-foreground">
                  You're performing better than 78% of job seekers with similar profiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;