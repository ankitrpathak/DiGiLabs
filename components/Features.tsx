"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { 
  BarChart3, 
  Zap, 
  Lock, 
  Globe, 
  MessageSquare, 
  Lightbulb,
  LineChart
} from "lucide-react";

const featureItems = [
  {
    title: "Advanced Analytics",
    description: "Gain insights with powerful analytics and visualization tools to make data-driven decisions.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance ensures your applications run at peak efficiency with minimal latency.",
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security built from the ground up to protect your sensitive data.",
    icon: <Lock className="h-10 w-10 text-green-500" />,
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "Global Infrastructure",
    description: "Deployed across multiple regions for high availability and reduced latency worldwide.",
    icon: <Globe className="h-10 w-10 text-purple-500" />,
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    title: "Intelligent Automation",
    description: "Automate repetitive tasks with AI-powered workflows to boost productivity.",
    icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing tools and services through our extensive API ecosystem.",
    icon: <MessageSquare className="h-10 w-10 text-teal-500" />,
    color: "from-teal-500/20 to-teal-600/20",
  },
];

const Features = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers everything you need to streamline your digital operations 
            and scale your business efficiently.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className={`h-16 w-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 max-w-4xl mx-auto bg-card border rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <LineChart className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Revolutionize Your Workflow</h3>
                <p className="text-muted-foreground mb-6">
                  Our platform integrates seamlessly with your existing tools and processes, 
                  allowing you to focus on what matters most - growing your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Team Collaboration", "Workflow Automation", "Performance Tracking", "Resource Optimization"].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-56 md:h-72 bg-muted flex items-center justify-center border-t">
            <span className="text-muted-foreground">Feature Overview Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;