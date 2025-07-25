import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calculator, PieChart, AlertTriangle, TrendingDown, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ExpenseTracking = () => {
  const features = [
    {
      icon: Calculator,
      title: "Smart Categorization",
      description: "AI automatically categorizes your expenses with 99% accuracy, learning from your spending patterns."
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Beautiful charts and graphs help you understand your spending habits at a glance."
    },
    {
      icon: AlertTriangle,
      title: "Spending Alerts",
      description: "Get notified when you're approaching budget limits or detect unusual spending patterns."
    },
    {
      icon: TrendingDown,
      title: "Budget Optimization",
      description: "AI-powered recommendations to help you reduce expenses and optimize your budget."
    }
  ];

  const categories = [
    "Food & Dining",
    "Transportation",
    "Shopping",
    "Entertainment",
    "Bills & Utilities",
    "Healthcare",
    "Travel",
    "Education",
    "Investments",
    "Business Expenses",
    "Home & Garden",
    "Personal Care"
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
                <Calculator className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Expense Tracking
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Take control of your finances with intelligent expense tracking. Our AI automatically categorizes, 
              analyzes, and helps you optimize your spending for better financial health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Start Tracking</Button>
              <Button variant="outline" size="xl">Connect Your Bank</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Expense Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered expense tracking learns your spending habits and provides actionable insights.
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

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Category Coverage</h2>
              <p className="text-xl text-muted-foreground">
                Automatically categorize expenses across all areas of your financial life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-foreground">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Everything, Save More</h2>
              <p className="text-xl text-muted-foreground">
                Our users save money and make better financial decisions with intelligent expense tracking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">23%</div>
                <div className="text-sm text-muted-foreground">Average Savings Increase</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Categorization Accuracy</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5min</div>
                <div className="text-sm text-muted-foreground">Daily Setup Time</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Supported Banks</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Start Tracking Your Expenses Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Connect your accounts and let AI do the heavy lifting. Start saving money with smarter expense tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">Connect Your Bank</Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Try Demo Account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpenseTracking;