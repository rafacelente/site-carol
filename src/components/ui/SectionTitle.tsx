import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-primary-700 max-w-2xl mx-auto font-sans-serif">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;