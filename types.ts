export interface Project {
  project_title: string;
  description: string;
  tools_used: string[];
  screenshot: string;
  project_link: string;
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  github: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface FooterData {
  logo_text: string;
  social_links: SocialLinks;
  contact_info: ContactInfo;
}