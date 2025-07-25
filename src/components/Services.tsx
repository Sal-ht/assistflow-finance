import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Calculator, 
  Shield, 
  Smartphone,
  ArrowRight,
  Brain,
  FileText
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Financial Analysis",
      description: "Advanced AI algorithms analyze your financial data to provide personalized insights and recommendations.",
      features: ["Real-time analysis", "Predictive modeling", "Risk assessment"],
      color: "text-primary",
      link: "/services/ai-analysis"
    },
    {
      icon: BarChart3,
      title: "Smart Reporting",
      description: "Automated financial reports generated with AI-powered data interpretation and visualization.",
      features: ["Automated reports", "Custom dashboards", "Export options"],
      color: "text-secondary",
      link: "/services/smart-reporting"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "AI-driven investment recommendations based on market analysis and your financial goals.",
      features: ["Portfolio optimization", "Market insights", "Risk management"],
      color: "text-success",
      link: "/services/investment-advisory"
    },
    {
      icon: Calculator,
      title: "Expense Tracking",
      description: "Intelligent categorization and tracking of expenses with AI-powered spending insights.",
      features: ["Smart categorization", "Spending alerts", "Budget optimization"],
      color: "text-primary",
      link: "/services/expense-tracking"
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Advanced AI security monitoring to detect and prevent fraudulent activities.",
      features: ["Real-time monitoring", "Anomaly detection", "Instant alerts"],
      color: "text-destructive",
      link: "/services/fraud-detection"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Seamless mobile experience with AI assistant available wherever you are.",
      features: ["Mobile apps", "Voice commands", "Offline access"],
      color: "text-secondary",
      link: "/services/mobile-integration"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            Financial Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform offers a complete suite of financial tools designed to 
            simplify and enhance your financial management experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-float transition-all duration-300 bg-gradient-card border-0 group hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors`}>
                  <service.icon className={`${service.color} group-hover:scale-110 transition-transform`} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/button w-full justify-between" asChild>
                <Link to={service.link}>
                  Learn More
                  <ArrowRight size={16} className="group-hover/button:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-card border-0">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="text-primary" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses already using our AI-powered financial platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Schedule Demo</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;