import type { Benefit } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, DollarSign, Clock, Users, LifeBuoy, Languages, Briefcase } from 'lucide-react';

const benefits: Benefit[] = [
  {
    id: 'quality-speed',
    title: 'Quality Code & Speedy Delivery',
    description: 'Leveraging efficient practices to deliver robust applications quickly without compromising on quality.',
    icon: Zap,
  },
  {
    id: 'cost-effective',
    title: 'Cost-Effective Solutions',
    description: 'Optimized processes and nearshoring advantages provide significant cost savings for your projects.',
    icon: DollarSign,
  },
  {
    id: 'nearshoring-est',
    title: 'Nearshoring in EST Zone',
    description: 'Seamless collaboration with our team operating in the Eastern Standard Time zone for real-time communication.',
    icon: Clock,
  },
  {
    id: 'project-management',
    title: 'Exceptional Project Management',
    description: 'Dedicated project managers ensure your project stays on track, on time, and within budget.',
    icon: Briefcase,
  },
  {
    id: 'client-support',
    title: 'Dedicated Product & Client Support',
    description: 'Continuous support throughout the development lifecycle and beyond to ensure your success.',
    icon: LifeBuoy,
  },
  {
    id: 'bilingual',
    title: 'Bilingual Capabilities (EN/FR)',
    description: 'Effective communication and service in both English and French to cater to a diverse clientele.',
    icon: Languages,
  },
];

export function BenefitsSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Why Choose Infonuagix?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the advantages of partnering with us for your digital needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
