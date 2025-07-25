import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Download, MessageCircle, Wifi, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MobileIntegration = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description: "Full-featured iOS and Android apps with native performance and seamless user experience."
    },
    {
      icon: MessageCircle,
      title: "Voice Commands",
      description: "Control your finances with voice commands and get instant responses from your AI assistant."
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description: "Access your financial data and perform key functions even without an internet connection."
    },
    {
      icon: Download,
      title: "Instant Sync",
      description: "Real-time synchronization across all your devices for always up-to-date financial information."
    }
  ];

  const mobileFeatures = [
    "Biometric authentication (Face ID, Touch ID)",
    "Push notifications for alerts",
    "Offline transaction recording",
    "Camera receipt scanning",
    "Voice-powered AI assistant",
    "Apple Pay & Google Pay integration",
    "Widget support for home screen",
    "Dark mode support",
    "Multi-currency support",
    "Real-time market data",
    "Secure encrypted storage",
    "Cross-platform synchronization"
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Business Owner",
      content: "The mobile app has transformed how I manage my business finances. I can track expenses and get insights on the go.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Financial Advisor",
      content: "My clients love the mobile experience. They can access their portfolios and get AI advice anywhere, anytime.",
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
              <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                <Smartphone className="text-secondary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mobile Integration
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Take your financial management anywhere with our powerful mobile apps. 
              Native iOS and Android applications with full AI assistant integration and offline capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Download App</Button>
              <Button variant="outline" size="xl">View Features</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile-First Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mobile apps deliver the full power of AssistFlow with optimized touch interfaces and mobile-specific features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-float transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <feature.icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Mobile Feature Set</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for mobile financial management, optimized for touch and on-the-go use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-success shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Experience the intuitive mobile interface designed for modern financial management.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Available on All Platforms</h3>
                  <p className="text-muted-foreground mb-6">
                    Download our native apps for iOS and Android, or use our progressive web app 
                    for seamless cross-platform experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero">Download for iOS</Button>
                    <Button variant="outline">Download for Android</Button>
                  </div>
                </div>
                
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="text-muted-foreground mx-auto mb-4" size={64} />
                    <h4 className="text-lg font-semibold mb-2">Mobile App Preview</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive demo available in stores
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Performance</h2>
              <p className="text-xl text-muted-foreground">
                Our mobile apps deliver exceptional performance and user satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Load Time</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Users Say</h2>
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
              Get Started on Mobile Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Download our mobile app and experience the future of financial management in your pocket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Download Now</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileIntegration;