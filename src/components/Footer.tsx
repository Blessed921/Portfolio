import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter mb-2">BLESSED CHIKEZIE<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building the future of digital experiences with code and design.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:blessedt.bj@gmail.com" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
