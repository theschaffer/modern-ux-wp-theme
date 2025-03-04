
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<{ product: Product, delay: number }> = ({ product, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FadeIn delay={delay} direction="up">
      <div 
        className="group rounded-2xl overflow-hidden bg-white border border-border transition-all duration-500 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div 
            className={`absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          ></div>
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="p-3 bg-white rounded-full transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <Plus className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <div className="text-muted-foreground">
              {product.title.charAt(0)}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-display font-medium mb-2 group-hover:text-primary transition-colors duration-300">{product.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">{product.price}</span>
            <button className="text-sm font-medium text-primary group-hover:underline">
              Voir détails
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Module Essentiel",
      description: "Fonctionnalités de base pour démarrer votre expérience.",
      image: "/path/to/product1.jpg",
      price: "29€",
    },
    {
      id: 2,
      title: "Module Premium",
      description: "Fonctionnalités avancées pour les professionnels.",
      image: "/path/to/product2.jpg",
      price: "59€",
    },
    {
      id: 3,
      title: "Module Entreprise",
      description: "Solution complète pour les grandes organisations.",
      image: "/path/to/product3.jpg",
      price: "99€",
    }
  ];
  
  return (
    <section id="products" className="py-24 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              NOS PRODUITS
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Des solutions adaptées à vos besoins
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <p className="text-muted-foreground">
              Explorez notre gamme de produits conçus pour améliorer votre expérience numérique avec élégance et simplicité.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
