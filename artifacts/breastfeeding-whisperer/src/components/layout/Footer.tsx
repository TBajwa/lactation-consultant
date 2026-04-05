import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react";
import logoSrc from "@assets/IMG_3411_1775411464767.webp";

export function Footer() {
  return (
    <footer className="bg-[#1C1412] text-[#FDF8F5] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl mb-4">
              <img src={logoSrc} alt="The Breastfeeding Whisperer Logo" className="h-16 w-auto object-contain" loading="lazy" />
            </Link>
            <p className="text-[#FDF8F5]/80 text-sm leading-relaxed max-w-xs">
              Bridging the gap from delivery to home. Providing expert, compassionate IBCLC lactation support for families in Central Florida and virtually worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/thebreastfeedingwhisperer" target="_blank" rel="noreferrer" className="text-[#FDF8F5]/60 hover:text-white transition-colors" aria-label="Facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/thebreastfeedingwhisperer/" target="_blank" rel="noreferrer" className="text-[#FDF8F5]/60 hover:text-white transition-colors" aria-label="Instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="text-[#FDF8F5]/60 hover:text-white transition-colors" aria-label="YouTube">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">About Tara</Link></li>
              <li><Link href="/services" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">Services & Pricing</Link></li>
              <li><Link href="/tips" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">Free Tips</Link></li>
              <li><Link href="/testimonials" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/products" className="text-[#FDF8F5]/80 hover:text-white transition-colors text-sm">Recommended Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li className="text-[#FDF8F5]/80 text-sm">In-Home Consultations</li>
              <li className="text-[#FDF8F5]/80 text-sm">Virtual Support</li>
              <li className="text-[#FDF8F5]/80 text-sm">Prenatal Education</li>
              <li className="text-[#FDF8F5]/80 text-sm">Latch Assistance</li>
              <li className="text-[#FDF8F5]/80 text-sm">Pumping Guidance</li>
              <li className="text-[#FDF8F5]/80 text-sm">Return to Work Planning</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14078681569" className="flex items-start gap-3 text-[#FDF8F5]/80 hover:text-white transition-colors text-sm group">
                  <Phone className="h-5 w-5 text-[#C41E8E] group-hover:text-white transition-colors shrink-0" />
                  <span>(407) 868-1569</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className="flex items-start gap-3 text-[#FDF8F5]/80 hover:text-white transition-colors text-sm group">
                  <Mail className="h-5 w-5 text-[#C41E8E] group-hover:text-white transition-colors shrink-0" />
                  <span>Send a Message</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-[#FDF8F5]/80 text-sm">
                <MapPin className="h-5 w-5 text-[#C41E8E] shrink-0" />
                <span>Serving Central Florida<br/>and Virtual Worldwide</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FDF8F5]/60 text-xs">
            &copy; {new Date().getFullYear()} The Breastfeeding Whisperer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-[#FDF8F5]/60 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-[#FDF8F5]/60 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
