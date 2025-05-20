export type Testimonial = {
  id: string;
  name: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  avatarDataAiHint?: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string | React.ReactNode;
  timestamp: Date;
}
