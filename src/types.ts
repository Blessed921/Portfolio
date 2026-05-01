export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
  imageUrl: string;
  images?: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'programming' | 'mobile-web' | 'database' | 'design-management';
}
