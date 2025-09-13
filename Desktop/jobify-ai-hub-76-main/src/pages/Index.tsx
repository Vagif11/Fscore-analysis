import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  FileText, 
  BarChart3, 
  Zap, 
  Shield, 
  Target,
  CheckCircle,
  TrendingUp,
  Users,
  Briefcase
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Unified Job Search",
      description: "Search across LinkedIn, Indeed, Glassdoor, and more from one dashboard"
    },
    {
      icon: FileText,
      title: "AI Resume Optimization",
      description: "Get personalized feedback and ATS-optimized resume tailoring for each job"
    },
    {
      icon: Zap,
      title: "Instant Cover Letters",
      description: "Generate customized cover letters that match job requirements perfectly"
    },
    {
      icon: BarChart3,
      title: "Application Analytics",
      description: "Track success rates, interview conversions, and identify improvement areas"
    },
    {
      icon: Shield,
      title: "Auto-fill Applications",
      description: "Store your details securely and apply faster across all platforms"
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Get tailored job suggestions based on your skills and career goals"
    }
  ];

  const stats = [
    { number: "500K+", label: "Jobs Tracked", icon: Briefcase },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "10x", label: "Faster Applications", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Complete
            <span className="block text-accent">Job Search Hub</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Unite all major job platforms, optimize your applications with AI, and land your dream job faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/auth">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Job Search
              </Button>
            </Link>
            <Link to="/jobs">
            <Button
          variant="outline"
          size="lg"
          className="bg-white text-black border-white text-lg px-8 py-4 hover:bg-gray-200 hover:text-black" 
          >Browse Jobs
        </Button>

            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Land Your Dream Job</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your entire job search process with powerful AI-driven tools and comprehensive analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-0 bg-card/60 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Job Search?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of professionals who've accelerated their careers with Jobish.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Jobish</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Jobish. All rights reserved. Your career journey starts here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;