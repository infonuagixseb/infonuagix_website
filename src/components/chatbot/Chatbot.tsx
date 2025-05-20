'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { MessageSquare, Bot, X } from 'lucide-react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import type { ChatMessage } from '@/types';
import { initialInquiryChatbot } from '@/ai/flows/initial-inquiry-chatbot';
import { useTranslations } from 'next-intl';

export function Chatbot() {
  const t = useTranslations('Chatbot');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          sender: 'ai',
          text: t('initialGreeting'),
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length, t]);

  const handleSendMessage = async (query: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: query,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await initialInquiryChatbot({ query });
      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: aiResponse.response,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: "I'm sorry, but I encountered an error trying to process your request. Please try again later.", // This could also be translated
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-50"
        aria-label="Open chat"
      >
        <Bot size={28} />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 gap-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center">
              <Bot size={20} className="mr-2 text-primary" />
              Infonuagix AI Assistant
            </DialogTitle>
            <DialogDescription className="text-xs">
              Ask me anything about Infonuagix!
            </DialogDescription>
          </DialogHeader>
          
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
