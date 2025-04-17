
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import TourDetail from "./pages/TourDetail";
import PromotionPackages from "./pages/PromotionPackages";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import ArticleDetail from "./pages/ArticleDetail";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import Forum from "./pages/Forum";
import ForumPost from "./pages/ForumPost";
import NotFound from "./pages/NotFound";
import TravelMap from "./pages/TravelMap";
import Food from "./pages/Food";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tour/:id" element={<TourDetail />} />
              <Route path="/promotion-packages" element={<PromotionPackages />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/forum/post/:id" element={<ForumPost />} />
              <Route path="/travel-map" element={<TravelMap />} />
              <Route path="/food" element={<Food />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
