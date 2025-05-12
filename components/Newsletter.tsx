"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
        <Mail className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay up to date</h3>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Subscribe to our newsletter for the latest product updates, feature announcements, and exclusive offers.
      </p>
      
      {isSubscribed ? (
        <div className="flex items-center justify-center space-x-2 text-green-500">
          <CheckCircle2 className="h-5 w-5" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      
      <p className="text-sm text-muted-foreground mt-4">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  );
};

export default Newsletter;