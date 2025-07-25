import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIAnalysis from "./pages/services/AIAnalysis";
import SmartReporting from "./pages/services/SmartReporting";
import InvestmentAdvisory from "./pages/services/InvestmentAdvisory";
import ExpenseTracking from "./pages/services/ExpenseTracking";
import FraudDetection from "./pages/services/FraudDetection";
import MobileIntegration from "./pages/services/MobileIntegration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/ai-analysis" element={<AIAnalysis />} />
          <Route path="/services/smart-reporting" element={<SmartReporting />} />
          <Route path="/services/investment-advisory" element={<InvestmentAdvisory />} />
          <Route path="/services/expense-tracking" element={<ExpenseTracking />} />
          <Route path="/services/fraud-detection" element={<FraudDetection />} />
          <Route path="/services/mobile-integration" element={<MobileIntegration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
