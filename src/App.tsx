import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Status from "./pages/Status";
import Reviews from "./pages/Reviews";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import Orders from "./pages/Orders";
import Spin from "./pages/Spin";
import NotFound from "./pages/NotFound";
import ProductDetailView from "./components/ProductDetailView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/status" element={<Status />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/spin" element={<Spin />} />
              <Route path="/product/:id" element={<ProductDetailView />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
