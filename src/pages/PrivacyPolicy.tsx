import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '../components/ui/separator';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last Updated: May 5, 2026</p>

            <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to my portfolio website. Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my site.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I only collect information that you voluntarily provide through the contact form, such as your name, email address, and message content. I do not use cookies for tracking purposes or collect any automated data.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Use of Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information you provide is used solely to respond to your inquiries. I do not share, sell, or rent your personal information to third parties.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I implement reasonable security measures to protect your information. However, please be aware that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Contact Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact me at blessedt.bj@gmail.com.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
