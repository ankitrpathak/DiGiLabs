"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Newsletter from "@/components/Newsletter";
import { useState } from "react";
import { 
  Layers, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  ChevronUp
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Check scroll position
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "API", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support Center", href: "#" },
        { name: "Webinars", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Partners", href: "#" },
        { name: "Legal", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Layers className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">DiGiLABS</span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Empowering businesses with cutting-edge digital solutions to transform and scale in the modern marketplace.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
              ].map((social, i) => (
                <Button key={i} variant="outline" size="icon" className="h-9 w-9 rounded-full">
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />
        
        <Newsletter />
        
        <Separator className="my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} DiGiLABS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;