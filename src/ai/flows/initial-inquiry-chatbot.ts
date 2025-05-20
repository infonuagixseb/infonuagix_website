// The AI chatbot flow to handle initial client inquiries.

'use server';

/**
 * @fileOverview An AI-powered chatbot for handling initial client inquiries about Infonuagix's services, benefits, and case studies.
 *
 * - initialInquiryChatbot - A function that handles the chatbot interaction.
 * - InitialInquiryChatbotInput - The input type for the initialInquiryChatbot function.
 * - InitialInquiryChatbotOutput - The return type for the initialInquiryChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialInquiryChatbotInputSchema = z.object({
  query: z.string().describe('The user query about Infonuagix.'),
});
export type InitialInquiryChatbotInput = z.infer<typeof InitialInquiryChatbotInputSchema>;

const InitialInquiryChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type InitialInquiryChatbotOutput = z.infer<typeof InitialInquiryChatbotOutputSchema>;

export async function initialInquiryChatbot(input: InitialInquiryChatbotInput): Promise<InitialInquiryChatbotOutput> {
  return initialInquiryChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialInquiryChatbotPrompt',
  input: {schema: InitialInquiryChatbotInputSchema},
  output: {schema: InitialInquiryChatbotOutputSchema},
  prompt: `You are a helpful AI chatbot for Infonuagix, a web and mobile development company.

  Your goal is to answer initial client inquiries based on Infonuagix\'s service offerings, benefits, and case studies.

  Infonuagix embraces vibe coding for web and mobile development, providing a range of benefits to its clients:

  - Quality code and speedy delivery
  - Cost-effective solutions
  - Nearshoring in the Eastern Standard Time (EST) zone
  - Exceptional project management
  - Dedicated product and client support
  - Bilingual capabilities in English and French

  Use the following information to answer the user\'s query:

  Query: {{{query}}}
  `,
});

const initialInquiryChatbotFlow = ai.defineFlow(
  {
    name: 'initialInquiryChatbotFlow',
    inputSchema: InitialInquiryChatbotInputSchema,
    outputSchema: InitialInquiryChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
