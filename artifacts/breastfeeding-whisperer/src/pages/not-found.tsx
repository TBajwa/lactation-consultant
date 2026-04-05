import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDF8F5] pt-20">
      <div className="text-center max-w-md mx-4 px-4">
        <p className="text-7xl font-serif font-bold text-[#C41E8E]/20 mb-4">404</p>
        <h1 className="text-3xl font-serif font-bold text-[#1C1412] mb-4">
          Page not found
        </h1>
        <p className="text-[#6B5B57] mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back to where you need to be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-full bg-[#C41E8E] hover:bg-[#6B0032] text-white h-12 px-8">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[#1C1412]/15 text-[#1C1412] hover:bg-white h-12 px-8">
            <a href="tel:+14078681569">Call (407) 868-1569</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
