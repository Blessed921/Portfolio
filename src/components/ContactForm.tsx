import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Use environment variable with a fallback to the current working ID
    const FORM_ID = import.meta.env.VITE_FORMSPREE_ID || 'xlgzbogk'; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio Message: ${data.subject}`,
          _replyto: data.email
        })
      });

      if (response.ok) {
        console.log('Form submission successful');
        setIsSent(true);
        // Reset form after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      } else {
        // Since we might not have a valid ID yet, we'll log a clear error
        console.error('Formspree ID might be missing or invalid');
        throw new Error('Failed to send. Please check the console for setup instructions.');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      // For demo purposes, we'll show success if it's just a missing ID, 
      // but let the user know they need to set it up.
      if (FORM_ID === 'YOUR_FORMSPREE_ID') {
        alert('Action Required: To make this form work, please create a free account at formspree.io, copy your Form ID, and paste it into ContactForm.tsx!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">LET'S CONNECT</h2>
              <p className="text-muted-foreground text-lg mb-10">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">blessedt.bj@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 (703) 491-6801</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-2xl shadow-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {isSent ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-12 flex flex-col items-center justify-center text-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Message Sent!</h3>
                          <p className="text-muted-foreground mt-2">
                            Thank you for reaching out. I'll get back to you as soon as possible.
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          onClick={() => setIsSent(false)}
                          className="mt-4"
                        >
                          Send another message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4" 
                        onSubmit={handleSubmit}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                            <Input id="contact-name" name="name" required placeholder="John Doe" className="bg-muted/50 border-none" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                            <Input id="contact-email" name="email" required type="email" placeholder="john@example.com" className="bg-muted/50 border-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                          <Input id="contact-subject" name="subject" required placeholder="Project Inquiry" className="bg-muted/50 border-none" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                          <Textarea id="contact-message" name="message" required placeholder="Tell me about your project..." className="min-h-[150px] bg-muted/50 border-none resize-none" />
                        </div>
                        <Button 
                          type="submit"
                          className="w-full h-12 rounded-xl group" 
                          size="lg" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
