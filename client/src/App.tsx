import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import Index from "./pages/Index";


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router base="/">
        <Route path="/" component={Index} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
