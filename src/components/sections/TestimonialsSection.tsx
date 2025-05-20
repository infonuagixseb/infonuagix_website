import type { Testimonial } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane Doe',
    company: 'CEO, TechSolutions',
    quote: "Infonuagix delivered our project ahead of schedule with outstanding quality. Their project management was top-notch!",
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarDataAiHint: 'woman face'
  },
  {
    id: '2',
    name: 'John Smith',
    company: 'Founder, StartupX',
    quote: "The cost-effectiveness and bilingual support were key for us. Highly recommend Infonuagix for any startup.",
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarDataAiHint: 'man face'
  },
  {
    id: '3',
    name: 'Alice Brown',
    company: 'CTO, Innovate Inc.',
    quote: "Working with a nearshoring team in EST made communication seamless. The results speak for themselves. Fantastic work!",
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarDataAiHint: 'person face'
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Client Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our clients have to say about their experience with Infonuagix.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-row items-center space-x-4 pb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarDataAiHint} />
                  <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
