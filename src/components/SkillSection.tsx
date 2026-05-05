import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Database, Layout, Smartphone, Users } from 'lucide-react';

const categories = [
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'mobile-web', label: 'Mobile & Web', icon: Smartphone },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'design-management', label: 'Design & Management', icon: Users },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">TECHNICAL ARSENAL</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive suite of tools and technologies I use to build robust, scalable, and beautiful digital products.
            </p>
          </div>
        </div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-1.5 bg-zinc-950 border border-white/10 mb-12 rounded-xl overflow-hidden">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="py-4 px-2 data-active:bg-white data-active:text-black text-white/60 transition-all flex items-center justify-center gap-2 rounded-lg"
              >
                <cat.icon className="w-4 h-4 shrink-0 hidden sm:inline-block" />
                <span className="text-sm font-medium">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {SKILLS.filter((s) => s.category === cat.id).map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative bg-background border p-6 rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors overflow-hidden p-2">
                      {skill.icon ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Code2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
