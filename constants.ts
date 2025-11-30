export const PORTFOLIO_DATA = {
  owner_name: "Sravan Doniparthi",
  role_tagline: "Enthusiastic Designer & Developer",
  short_description: "A passionate full-stack developer focused on building clean, modern, and user-friendly digital experiences.",
  
  sections: {
    home: {
      hero_title: "Hi, I'm Sravan Doniparthi",
      hero_subtitle: "Enthusiastic Designer & Developer",
      hero_description: "I specialize in crafting modern websites, intuitive user experiences, and dynamic full-stack applications using clean code and creative design.",
      cta_buttons: ["View Projects", "Contact Me"],
    },

    about: {
      title: "About Me",
      description: "I'm a Django developer with hands-on experience in building responsive, scalable, and visually appealing applications. I love blending creativity with functionality to deliver seamless user experiences.",
      skills: [
        "Django Developer",
        "Python",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript (Basic)",
        "UI/UX Enthusiast"
      ],
      experience_highlights: [
        "Built multiple dynamic Django web applications",
        "Designed responsive UIs with HTML, CSS, and animations",
        "Integrated backend APIs and full-stack functionality"
      ]
    },

    projects: {
      title: "My Projects",
      projects_list: [
        {
          project_title: "Student Management System",
          description: "A full-stack Django web application to manage students, staff, and data operations with dynamic views and templates.",
          tools_used: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
          screenshot: "https://picsum.photos/600/400?random=1",
          project_link: "#"
        },
        {
          project_title: "Portfolio Website",
          description: "A modern, interactive personal portfolio with animations and responsive layout.",
          tools_used: ["HTML", "CSS", "JavaScript", "GSAP Animations"],
          screenshot: "https://picsum.photos/600/400?random=2",
          project_link: "#"
        }
      ]
    },

    contact: {
      title: "Contact Me",
      form_fields: [
        "First Name",
        "Last Name",
        "Email",
        "Message"
      ],
      footer: {
        logo_text: "Sravan Doniparthi",
        social_links: {
          linkedin: "https://linkedin.com/in/",
          instagram: "https://instagram.com/",
          github: "https://github.com/"
        },
        contact_info: {
          email: "yourmail@gmail.com",
          location: "India"
        }
      }
    }
  }
};