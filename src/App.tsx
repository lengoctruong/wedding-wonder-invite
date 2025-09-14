import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Image protection component
const ImageProtection = () => {
  useEffect(() => {
    // Hide only protected images when dev tools are detected
    const hideProtectedImages = () => {
      const protectedImages = document.querySelectorAll('.protected-image');
      protectedImages.forEach(img => {
        img.style.display = 'none';
      });
    };

    // Check for dev tools periodically
    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        hideProtectedImages();
      }
    };

    // Check every 100ms
    const interval = setInterval(checkDevTools, 100);

    // Also hide protected images on right-click
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('protected-image')) {
        e.preventDefault();
        hideProtectedImages();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      clearInterval(interval);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ImageProtection />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
