import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, Pause, Volume2 } from "lucide-react";

interface DemoDialogProps {
  children: React.ReactNode;
}

const DemoDialog = ({ children }: DemoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>AssistFlow Demo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <div className="text-center z-10">
              <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
              <p className="text-muted-foreground mb-4">
                See how AssistFlow transforms your financial workflow
              </p>
              <Button onClick={togglePlay} variant="hero" size="lg">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isPlaying ? "Pause Demo" : "Play Demo"}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Volume2 size={20} />
              <span className="text-sm">Audio: On</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Duration: 3:42
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">What you'll see:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Real-time financial data analysis</li>
              <li>AI-powered investment recommendations</li>
              <li>Automated expense categorization</li>
              <li>Interactive financial reporting</li>
              <li>Portfolio optimization features</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;