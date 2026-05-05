import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '../components/ui/separator';

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last Updated: May 5, 2026</p>

            <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing my portfolio website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall I be liable for any damages arising out of the use or inability to use the materials on my website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
