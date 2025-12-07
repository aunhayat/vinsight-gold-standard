import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-8xl md:text-9xl font-serif font-bold gold-gradient-text mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="luxury" size="lg" className="group">
              <Home className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
