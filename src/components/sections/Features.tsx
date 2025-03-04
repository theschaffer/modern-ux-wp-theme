
import React from 'react';
import { CheckCircle, Layers, Feather, Palette } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="p-6 rounded-2xl bg-white border border-border transition-all duration-300 hover:shadow-md group">
        <div className="p-3 bg-primary/10 rounded-xl text-primary inline-block mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle size={24} />,
      title: "Simple et intuitif",
      description: "Interface utilisateur épurée permettant une navigation fluide et intuitive.",
      delay: 100
    },
    {
      icon: <Layers size={24} />,
      title: "Design modulaire",
      description: "Composants flexibles s'adaptant à tous vos besoins de conception.",
      delay: 200
    },
    {
      icon: <Feather size={24} />,
      title: "Animations subtiles",
      description: "Transitions et animations élégantes pour une expérience utilisateur enrichie.",
      delay: 300
    },
    {
      icon: <Palette size={24} />,
      title: "Esthétique minimaliste",
      description: "Conception épurée qui met l'accent sur l'essentiel sans distractions visuelles.",
      delay: 400
    }
  ];

  return (
    <section id="features" className="bg-secondary/50 py-24 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              FONCTIONNALITÉS
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Une expérience utilisateur exceptionnelle
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <p className="text-muted-foreground">
              Découvrez comment notre approche minimaliste transforme l'interaction numérique en une expérience fluide et intuitive.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
