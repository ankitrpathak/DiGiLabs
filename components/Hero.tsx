"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NotificationButton from "@/components/NotificationButton";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!mounted) return null;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Launching Soon
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Transform Your Digital Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              DiGiLABS
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            The all-in-one platform that empowers businesses to create, manage, and scale their
            digital solutions with unprecedented ease and efficiency.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Book a Demo
            </Button>
            <NotificationButton />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              14-day free trial
            </span>
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>
        
        {/* Hero image */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-b from-background to-muted rounded-lg shadow-lg border overflow-hidden">
            <div className="h-8 bg-muted border-b flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center p-4">
              <div className="text-lg text-muted-foreground">Dashboard Preview Image</div>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 -left-3 h-12 bg-gradient-to-t from-background to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;