'use client';

import type { ChatMessage } from '@/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <ScrollArea className="h-[400px] w-full p-4 border-b">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex items-start space-x-3',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.sender === 'ai' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot size={18} />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                'p-3 rounded-lg max-w-[70%]',
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-muted text-muted-foreground rounded-bl-none'
              )}
            >
              {typeof message.text === 'string' ? (
                <ReactMarkdown
                  components={{
                    p: ({node, ...props}) => <p className="mb-0" {...props} />, // Remove default margin from p
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              ) : (
                message.text
              )}
               <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {message.sender === 'user' && (
               <Avatar className="h-8 w-8">
                 <AvatarFallback className="bg-accent text-accent-foreground">
                   <User size={18} />
                 </AvatarFallback>
               </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start space-x-3 justify-start">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot size={18} />
              </AvatarFallback>
            </Avatar>
            <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none">
              <div className="flex space-x-1">
                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-0"></span>
                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-150"></span>
                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-300"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
