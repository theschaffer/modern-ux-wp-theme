import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      valid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      valid = false;
    }
    
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
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons bientôt. Merci !",
      });
      
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
    <section id="contact" className="bg-green-50/70 py-24 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="left">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-green-600 bg-green-100 rounded-full">
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
                <div className="flex items-start group hover:scale-105 transition-transform duration-300 ease-out cursor-pointer">
                  <div className="mr-4 p-3 bg-green-100 rounded-full text-green-600 shadow-sm group-hover:bg-green-200 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@sublime.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:scale-105 transition-transform duration-300 ease-out cursor-pointer">
                  <div className="mr-4 p-3 bg-green-100 rounded-full text-green-600 shadow-sm group-hover:bg-green-200 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:scale-105 transition-transform duration-300 ease-out cursor-pointer">
                  <div className="mr-4 p-3 bg-green-100 rounded-full text-green-600 shadow-sm group-hover:bg-green-200 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <p className="text-muted-foreground">42 rue de la Liberté, Paris</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="right" delay={300}>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-display font-medium mb-6 text-green-700">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-1 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-green-600' : 'text-muted-foreground'
                    }`}
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 ${
                      errors.name 
                        ? 'border-destructive focus:ring-2 focus:ring-destructive/20' 
                        : focusedField === 'name'
                          ? 'border-green-400 ring-2 ring-green-200' 
                          : 'border-border hover:border-green-200'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive animate-fade-in">{errors.name}</p>
                  )}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-1 transition-all duration-300 ${
                      focusedField === 'email' ? 'text-green-600' : 'text-muted-foreground'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-destructive focus:ring-2 focus:ring-destructive/20' 
                        : focusedField === 'email'
                          ? 'border-green-400 ring-2 ring-green-200' 
                          : 'border-border hover:border-green-200'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive animate-fade-in">{errors.email}</p>
                  )}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-1 transition-all duration-300 ${
                      focusedField === 'message' ? 'text-green-600' : 'text-muted-foreground'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-destructive focus:ring-2 focus:ring-destructive/20' 
                        : focusedField === 'message'
                          ? 'border-green-400 ring-2 ring-green-200' 
                          : 'border-border hover:border-green-200'
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive animate-fade-in">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-500 overflow-hidden ${
                    isSuccess 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-600 text-white hover:bg-green-500 active:bg-green-700'
                  } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'}`}
                >
                  <div className={`flex items-center transition-transform duration-500 ${
                    isSubmitting || isSuccess ? 'translate-y-12 opacity-0' : ''
                  }`}>
                    Envoyer
                    <Send className="ml-2 w-4 h-4" />
                  </div>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                  {isSuccess && (
                    <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>Envoyé!</span>
                    </div>
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
