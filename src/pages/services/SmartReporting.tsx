import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BarChart3, FileText, Download, Clock, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SmartReporting = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Create stunning, interactive reports with drag-and-drop functionality and real-time data updates."
    },
    {
      icon: FileText,
      title: "Custom Templates",
      description: "Choose from dozens of pre-built templates or create your own branded report layouts."
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Export reports in PDF, Excel, PowerPoint, or share via secure web links."
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Set up automated report generation and delivery to stakeholders on your schedule."
    }
  ];

  const reportTypes = [
    "Monthly Financial Statements",
    "Cash Flow Analysis",
    "Budget vs Actual Reports",
    "Investment Performance",
    "Risk Assessment Reports",
    "Compliance Documentation",
    "Executive Summaries",
    "Department Breakdowns"
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
                <BarChart3 className="text-secondary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Reporting
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate beautiful, comprehensive financial reports automatically. 
              Save hours of manual work while delivering professional insights to stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Try Report Builder</Button>
              <Button variant="outline" size="xl">View Sample Reports</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Reporting Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional financial reports that impress stakeholders.
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

      {/* Report Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-Built Report Templates</h2>
              <p className="text-xl text-muted-foreground">
                Choose from our library of professional templates or customize your own.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportTypes.map((reportType, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-success shrink-0" size={20} />
                  <span className="text-foreground">{reportType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Experience the power of automated report generation.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-card">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <BarChart3 className="text-muted-foreground mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-semibold mb-2">Interactive Report Preview</h3>
                  <p className="text-muted-foreground mb-4">
                    Click below to see a live demo of our reporting capabilities
                  </p>
                  <Button variant="hero">Launch Demo</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Report Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Automated Updates</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Start Creating Professional Reports Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of businesses who trust AssistFlow for their financial reporting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Start Free Trial</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartReporting;