import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Clock, 
  Users,
  CheckCircle,
  Star
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description: "Powered by cutting-edge machine learning algorithms for precise financial analysis and predictions.",
      badges: ["ML Powered", "99.9% Uptime"],
      highlight: true
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant data processing and real-time financial insights to keep you ahead of the market.",
      badges: ["< 100ms", "Real-Time"],
      highlight: false
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your sensitive financial data.",
      badges: ["SOC 2", "ISO 27001"],
      highlight: false
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Handle transactions and analysis across 150+ currencies with automatic conversion.",
      badges: ["150+ Currencies", "Auto-Convert"],
      highlight: false
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and AI assistant availability whenever you need it.",
      badges: ["24/7 Support", "Always On"],
      highlight: false
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools for teams with role-based access and permissions.",
      badges: ["Team Access", "Role-Based"],
      highlight: true
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "10M+", label: "Transactions Processed", icon: Zap },
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "4.9", label: "User Rating", icon: Star }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AssistFlow Finance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with enterprise-grade technology and designed for the modern financial landscape.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-0 hover:shadow-card transition-all duration-300">
              <stat.icon className="text-primary mx-auto mb-3" size={32} />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={cn(
                "p-6 transition-all duration-300 group hover:scale-105",
                feature.highlight 
                  ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                  : "bg-gradient-card border-0 hover:shadow-card"
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={cn(
                  "p-3 rounded-lg transition-colors",
                  feature.highlight 
                    ? "bg-primary-foreground/20" 
                    : "bg-muted/50 group-hover:bg-muted"
                )}>
                  <feature.icon 
                    className={cn(
                      "group-hover:scale-110 transition-transform",
                      feature.highlight ? "text-primary-foreground" : "text-primary"
                    )} 
                    size={28} 
                  />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold",
                  feature.highlight ? "text-primary-foreground" : "text-foreground"
                )}>
                  {feature.title}
                </h3>
              </div>
              
              <p className={cn(
                "mb-6 leading-relaxed",
                feature.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge, badgeIndex) => (
                  <Badge 
                    key={badgeIndex} 
                    variant={feature.highlight ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Experience the Future of Finance?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join leading companies who trust AssistFlow for their financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Brain size={20} />
                Start AI Analysis
              </Button>
              <Button variant="outline" size="lg">
                View All Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;