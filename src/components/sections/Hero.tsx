
import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              <FadeIn direction="up" delay={100}>
                <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                  CONCEPTION MINIMALISTE
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-balance">
                  Simplicité et élégance pour votre expérience numérique
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={300}>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  Une interface intuitive, des animations fluides et une attention méticuleuse portée aux moindres détails pour créer une expérience utilisateur exceptionnelle.
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={400}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="#features" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary/20 text-foreground rounded-lg font-medium transition-colors duration-300 hover:bg-primary/5"
                  >
                    Nous contacter
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <FadeIn
              delay={500}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent flex items-center justify-center">
                    <div className="glass-panel w-4/5 h-4/5 flex items-center justify-center animate-float">
                      <div className="text-xl font-display tracking-tight">
                        Sublime
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square rounded-2xl bg-primary/10 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-1/3 aspect-square rounded-full bg-secondary -z-10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
