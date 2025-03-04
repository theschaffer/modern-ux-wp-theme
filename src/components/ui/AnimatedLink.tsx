
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  underlineClass?: string;
  external?: boolean;
  onClick?: () => void;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className = '',
  underlineClass = 'bg-primary',
  external = false,
  onClick,
}) => {
  const baseClasses = 'relative inline-block transition-colors duration-300 group';
  const underlineBaseClasses = 'absolute bottom-0 left-0 w-full h-[1px] scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left';
  
  const linkClasses = cn(baseClasses, className);
  const underlineClasses = cn(underlineBaseClasses, underlineClass);
  
  if (external) {
    return (
      <a 
        href={href} 
        className={linkClasses}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
        <span className={underlineClasses}></span>
      </a>
    );
  }
  
  return (
    <Link to={href} className={linkClasses} onClick={onClick}>
      {children}
      <span className={underlineClasses}></span>
    </Link>
  );
};

export default AnimatedLink;
