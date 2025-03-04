
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLink from '../ui/AnimatedLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-16 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-medium tracking-tight">
              Sublime
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Conception minimaliste et élégante, inspirée par les principes de simplicité et de clarté.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="#home" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#features" className="text-muted-foreground hover:text-foreground">
                  Fonctionnalités
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#products" className="text-muted-foreground hover:text-foreground">
                  Produits
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </AnimatedLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
                  Conditions d'utilisation
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
                  Politique de confidentialité
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
                  Cookies
                </AnimatedLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">contact@sublime.com</li>
              <li className="text-muted-foreground">+33 1 23 45 67 89</li>
              <li className="text-muted-foreground">42 rue de la Liberté, Paris</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sublime. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </AnimatedLink>
            <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </AnimatedLink>
            <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
