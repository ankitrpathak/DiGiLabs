"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "DiGiLABS has completely transformed our workflow. The efficiency gains were immediate, and our team productivity has increased by over 40% since implementation.",
    author: "Alexandra Chen",
    position: "CTO at TechNova",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "TN",
  },
  {
    quote: "The analytics capabilities are unmatched. We're now able to make data-driven decisions faster than ever before, giving us a competitive edge in our market.",
    author: "Marcus Johnson",
    position: "Director of Operations at Quantum Enterprises",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "QE",
  },
  {
    quote: "As a growing startup, we needed a solution that could scale with us. DiGiLABS not only met but exceeded our expectations with their flexible platform and responsive support team.",
    author: "Sophia Rodriguez",
    position: "Founder of InnovateX",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "IX",
  },
  {
    quote: "The security features give us peace of mind when handling sensitive client data. It's rare to find a platform that balances such robust security with exceptional user experience.",
    author: "David Park",
    position: "Security Lead at FinSecure",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "FS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses of all sizes to streamline their operations and drive growth.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-5 left-10 text-primary/10">
              <Quote className="h-32 w-32" />
            </div>
            
            <div className="bg-card border rounded-xl p-8 md:p-12 shadow-lg relative">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-2/3">
                  <motion.p 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl italic mb-8 relative z-10"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                  
                  <motion.div 
                    key={`author-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <Avatar className="h-14 w-14 border-2 border-primary">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
                      <AvatarFallback>{testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <div className="h-36 w-36 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                    {testimonials[currentIndex].logo}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrev}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNext}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-primary/20'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['TechNova', 'Quantum', 'InnovateX', 'FinSecure'].map((company, idx) => (
              <div key={idx} className="bg-card border rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-xl font-bold text-foreground/70">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;