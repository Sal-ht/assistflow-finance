import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Shield, PieChart, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const InvestmentAdvisory = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing and optimization based on your risk tolerance and financial goals."
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description: "Create and track progress towards specific financial goals with personalized investment strategies."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies to protect your investments."
    },
    {
      icon: PieChart,
      title: "Diversification Analysis",
      description: "Comprehensive analysis of your portfolio diversification with actionable recommendations."
    }
  ];

  const investmentTypes = [
    "Stocks & ETFs",
    "Bonds & Fixed Income",
    "Mutual Funds",
    "Real Estate Investment Trusts (REITs)",
    "Commodities",
    "International Markets",
    "Cryptocurrency",
    "Alternative Investments"
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Retail Investor",
      content: "The AI recommendations helped me optimize my portfolio and achieve 22% returns last year while managing risk effectively.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Portfolio Manager",
      content: "This platform has revolutionized how I manage client portfolios. The insights are incredibly accurate and actionable.",
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
              <div className="inline-flex p-4 bg-success/10 rounded-full mb-4">
                <TrendingUp className="text-success" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Investment Advisory
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Make smarter investment decisions with AI-powered insights, personalized recommendations, 
              and advanced portfolio optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Get Investment Advice</Button>
              <Button variant="outline" size="xl">View Portfolio Analysis</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Investment Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI analyzes market data, economic indicators, and your personal goals to provide tailored investment advice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-float transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <feature.icon className="text-success" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Coverage</h2>
              <p className="text-xl text-muted-foreground">
                Get expert advice across all major asset classes and investment vehicles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {investmentTypes.map((investmentType, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-success shrink-0" size={20} />
                  <span className="text-foreground">{investmentType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground">
                Our AI-powered investment advisory has helped thousands of investors achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">18.2%</div>
                <div className="text-sm text-muted-foreground">Average Annual Return</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">$2.8B</div>
                <div className="text-sm text-muted-foreground">Assets Under Management</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">15K+</div>
                <div className="text-sm text-muted-foreground">Active Investors</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
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
              Start Your Investment Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get personalized investment advice and optimize your portfolio with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Start Free Analysis</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Speak with Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentAdvisory;