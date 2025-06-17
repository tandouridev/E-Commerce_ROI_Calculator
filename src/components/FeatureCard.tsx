
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="glass-panel rounded-xl p-6 transform transition-all duration-350 ease-spring hover-scale">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
