import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Brain, TrendingUp, BarChart3, Shield, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AIAnalysis = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "Our AI models continuously learn from your financial patterns to provide increasingly accurate insights."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future financial trends and identify potential opportunities before they happen."
    },
    {
      icon: BarChart3,
      title: "Real-time Processing",
      description: "Get instant analysis of your financial data with sub-second response times."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Automatically identify and quantify potential financial risks in your portfolio."
    }
  ];

  const benefits = [
    "95% accuracy in financial predictions",
    "Real-time risk assessment and alerts",
    "Personalized investment recommendations",
    "Automated anomaly detection",
    "Custom financial modeling",
    "Integration with 500+ financial institutions"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CFO, TechCorp",
      content: "The AI analysis has transformed how we make financial decisions. We've seen a 40% improvement in our investment returns.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Advisor",
      content: "This platform gives me insights I never had before. My clients love the detailed, AI-powered reports.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AssistFlow
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <Brain className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Financial Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to gain deep insights into your financial data, 
              predict market trends, and make smarter investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Start Free Trial</Button>
              <Button variant="outline" size="xl">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI engine combines multiple machine learning models to deliver unparalleled financial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-float transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Analysis?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of businesses leveraging AI for smarter financial decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-success shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your free trial today and experience the power of AI-driven financial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Start Free Trial</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalysis;