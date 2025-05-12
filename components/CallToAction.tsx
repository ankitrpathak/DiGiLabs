"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsUp } from "lucide-react";

const CallToAction = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-8 md:p-12 shadow-lg border overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-2/3">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6">
                  <ChevronsUp className="mr-1 h-4 w-4" />
                  Level Up Your Business
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Digital Experience?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses that have already revolutionized their digital operations with our platform. Start your free trial today.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/3">
              <motion.div 
                variants={itemVariants}
                className="bg-card border rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Free Trial</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground"> / 14 days</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Full access to all features",
                    "Up to 5 team members",
                    "1GB storage",
                    "Basic analytics",
                    "Standard support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;