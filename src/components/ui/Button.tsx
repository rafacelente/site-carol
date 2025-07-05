import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  showWhatsApp?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  showWhatsApp = false,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {showWhatsApp && <MessageCircle size={24} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;