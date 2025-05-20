// @ts-nocheck
// TODO: Remove @ts-nocheck and fix type errors
'use server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(150, 'Subject is too long'),
  message: z.string().min(10, 'Message should be at least 10 characters').max(1000, 'Message is too long'),
});

export type ContactFormState = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    _form?: string[];
  };
  data?: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  success?: boolean;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the form for errors.',
      success: false,
    };
  }

  try {
    // Here you would typically send an email or save to a database
    console.log('Contact Form Data Submitted:', validatedFields.data);
    
    // Simulate a successful submission
    return { 
      message: 'Inquiry submitted successfully! We will get back to you soon.', 
      errors: {}, 
      data: validatedFields.data,
      success: true,
    };

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      message: 'An unexpected error occurred. Please try again later.',
      errors: { _form: ['Server error.'] },
      success: false,
    };
  }
}
