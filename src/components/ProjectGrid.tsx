import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Github, X } from 'lucide-react';

const categories = ['all', 'web', 'mobile', 'design'];

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImage(project.imageUrl);
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">SELECTED WORKS</h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my recent projects, ranging from full-stack web applications to mobile solutions and design systems.
            </p>
          </div>
          <div className="flex gap-2 bg-muted p-1 rounded-full border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full overflow-hidden border-muted hover:border-primary/50 transition-all flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.github && (
                        <Button size="icon" variant="secondary" className="rounded-full" nativeButton={false} render={<a href={project.github} target="_blank" rel="noreferrer" />}>
                          <Github className="w-5 h-5" />
                        </Button>
                      )}
                      {project.link && (
                        <Button size="icon" variant="secondary" className="rounded-full" nativeButton={false} render={<a href={project.link} target="_blank" rel="noreferrer" />}>
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-bold">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform"
                      onClick={() => handleOpenProject(project)}
                    >
                      Read Case Study <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-3xl bg-background max-h-[95vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-widest px-3 border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <DialogTitle className="text-3xl font-bold tracking-tighter">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <div className="mt-4 space-y-6">
                  <div className="space-y-4">
                    <div className="aspect-video w-full rounded-xl overflow-hidden border shadow-lg shadow-primary/5">
                      <img 
                        src={activeImage || selectedProject.imageUrl} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover transition-opacity duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative flex-shrink-0 w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                              activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Overview</h4>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {selectedProject.description}
                    </p>
                    <Separator className="bg-primary/10" />
                    <h4 className="text-lg font-semibold">Project Details</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {selectedProject.longDescription || "Full case study details coming soon."}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4 border-t">
                    {selectedProject.github && (
                      <Button className="flex-1 rounded-full" nativeButton={false} render={<a href={selectedProject.github} target="_blank" rel="noreferrer" />}>
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.link && (
                      <Button variant="outline" className="flex-1 rounded-full border-primary/20 hover:border-primary" nativeButton={false} render={<a href={selectedProject.link} target="_blank" rel="noreferrer" />}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
