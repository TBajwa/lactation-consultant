import React, { Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";

const Home = React.lazy(() => import("@/pages/home"));
const Services = React.lazy(() => import("@/pages/services"));
const Book = React.lazy(() => import("@/pages/book"));
const About = React.lazy(() => import("@/pages/about"));
const Tips = React.lazy(() => import("@/pages/tips"));
const Testimonials = React.lazy(() => import("@/pages/testimonials"));
const Products = React.lazy(() => import("@/pages/products"));
const Contact = React.lazy(() => import("@/pages/contact"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function FallbackLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <p className="text-muted-foreground font-medium text-sm tracking-wide">Loading warmth...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Suspense fallback={<FallbackLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/book" component={Book} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
