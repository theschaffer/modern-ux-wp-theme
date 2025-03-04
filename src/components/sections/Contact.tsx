
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons bientôt. Merci !",
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Une erreur est survenue",
        description: "Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="bg-secondary/50 py-24 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="left">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                CONTACT
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={100}>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Parlons de votre projet
              </h2>
            </FadeIn>
            
            <FadeIn direction="left" delay={200}>
              <p className="text-muted-foreground mb-8">
                Nous sommes à l'écoute de vos besoins. Contactez-nous pour discuter de la façon dont nous pouvons vous aider à concrétiser votre vision.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={300}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@sublime.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <p className="text-muted-foreground">42 rue de la Liberté, Paris</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="right" delay={300}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-display font-medium mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:ring-primary/20'}`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:ring-primary/20'}`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.message ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:ring-primary/20'}`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isSuccess ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground hover:scale-105 active:scale-95'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message envoyé !
                    </div>
                  ) : (
                    <>
                      Envoyer
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
