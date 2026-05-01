import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
              Full-Stack Developer & Designer
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              BLESSED <br />
              <span className="text-muted-foreground">CHIKEZIE</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
              Crafting digital experiences that matter.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I specialize in building high-performance web and mobile applications using the MERN stack, Flutter, and Dart. With a strong foundation in database management and a passion for design, I bring ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full px-8 group" render={<a href="#projects" />}>
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" render={<a href="/resume.pdf" target="_blank" />}>
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
