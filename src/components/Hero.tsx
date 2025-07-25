import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, TrendingUp, Shield, Zap } from "lucide-react";

interface HeroProps {
  onChatOpen: () => void;
}

const Hero = ({ onChatOpen }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Finance
              </span>
              <br />
              <span className="text-foreground">
                Powered by AI
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of financial management with our AI-powered assistant. 
              Get personalized insights, automated reporting, and intelligent recommendations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={onChatOpen}
              className="flex items-center gap-2"
            >
              <Bot size={24} />
              Talk to AI Assistant
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <TrendingUp className="text-success" size={24} />
              <div>
                <div className="font-semibold text-foreground">98% Accuracy</div>
                <div className="text-sm text-muted-foreground">AI Predictions</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Shield className="text-primary" size={24} />
              <div>
                <div className="font-semibold text-foreground">Bank-Grade</div>
                <div className="text-sm text-muted-foreground">Security</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Zap className="text-secondary" size={24} />
              <div>
                <div className="font-semibold text-foreground">Real-Time</div>
                <div className="text-sm text-muted-foreground">Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;