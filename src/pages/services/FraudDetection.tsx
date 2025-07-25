import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, AlertTriangle, Eye, Zap, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FraudDetection = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "24/7 AI surveillance of all transactions with instant fraud detection and prevention."
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Advanced machine learning identifies unusual patterns and suspicious activities automatically."
    },
    {
      icon: Eye,
      title: "Behavioral Analysis",
      description: "AI learns your spending patterns to distinguish between normal and fraudulent behavior."
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Immediate notifications via SMS, email, or push notifications when suspicious activity is detected."
    }
  ];

  const protectionFeatures = [
    "Real-time transaction monitoring",
    "Machine learning fraud detection",
    "Geolocation verification",
    "Device fingerprinting",
    "Velocity checking",
    "Risk scoring algorithms",
    "Multi-factor authentication",
    "Secure payment tokenization",
    "Identity verification",
    "Compliance monitoring",
    "Incident response automation",
    "Forensic analysis tools"
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "Chief Security Officer",
      content: "AssistFlow's fraud detection prevented over $2M in potential losses last year. The AI is incredibly accurate.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Risk Manager",
      content: "The real-time alerts and detailed analysis have transformed our fraud prevention strategy completely.",
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
              <div className="inline-flex p-4 bg-destructive/10 rounded-full mb-4">
                <Shield className="text-destructive" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Fraud Detection
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered fraud detection. Our system monitors transactions 
              24/7, identifies threats instantly, and prevents financial losses before they occur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Enable Protection</Button>
              <Button variant="outline" size="xl">View Security Report</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered fraud detection system uses cutting-edge technology to protect your assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-float transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <feature.icon className="text-destructive" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Protection</h2>
              <p className="text-xl text-muted-foreground">
                Multi-layered security approach protecting against all types of financial fraud.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protectionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-success shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Security Results</h2>
              <p className="text-xl text-muted-foreground">
                Our fraud detection system delivers industry-leading protection and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Fraud Detection Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">&lt;1%</div>
                <div className="text-sm text-muted-foreground">False Positive Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50ms</div>
                <div className="text-sm text-muted-foreground">Detection Response Time</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">$500M+</div>
                <div className="text-sm text-muted-foreground">Fraud Prevented</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Security Professionals</h2>
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
              Secure Your Business Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Don't wait for fraud to happen. Enable AI-powered protection and safeguard your financial assets now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Enable Protection</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FraudDetection;