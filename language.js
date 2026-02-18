const translations = {
  "en": {
    "navbar": {
      "lang": "ESP"
    },

    "hero": {
      "intro": "Computer Scientist with experience in Full Stack development with a blend of traditional coding and no-code expertise. Passionate about building scalable solutions, from rapid MVPs to production-ready applications.",
      "desc": "Full Stack Developer"
    },
    
    "skills": {
      "title": "Technical Skills",
      "lang_title": "Languages: ",
      "lang_body": "Spanish (native), English (C2)",
      "frameworks": "Frameworks: ",
      "prog": "Programming Languages: ",
      "db": "Databases: ",
      "nocode": "No-Code Tools: ",
      "tech": "Technologies: ",
      "learning": "* Currently learning"
    },
    
    "experience": {
      "title": "Work Experience",
      "entries": {
        "tealca": {
          "date": "2025 - Present",
          "title": "Junior Software Developer",
          "company": "Tealca",
          "desc": "Ensures the stability and functionality of critical legacy applications through ongoing maintenance, feature updates, and bug fixes using Javascript, HTML, CSS and the .NET framework."
        },
        "moneybook": {
          "date": "2024 - Present",
          "title": "Junior Full Stack Developer",
          "company": "MoneyBook",
          "desc": "Develops and designs the architecture of multiple fintech and SaaS products, from rapid no-code MVP to scalable code-based solutions."
        },
        "snip": {
          "date": "2023 - Present",
          "title": "No-Code Developer",
          "company": "Snip",
          "desc": "Designs, develops and manages the creation of no-code solutions to automate business processes."
        },
        "freelance": {
          "date": "2024",
          "title": "Web Developer",
          "company": "Freelance",
          "desc": "Developed and deployed responsive websites and landing pages for various clients by collaborating with a designer to translate Figma mockups into functional code."
        }
      }
    },
    
    "education": {
      "title": "Education",
      "entries": {
        "bsc": {
          "date": "2017 - 2025",
          "title": "Computer Science BSc",
          "institution": "Simón Bolívar University | Caracas, Venezuela"
        }
      }
    },
    
    "contact": {
      "title": "Contact",
      "links": {
        "linkedin": "Linkedin",
        "github": "Github",
        "email": "Email"
      }
    }
  },
  
  "esp": {
    "navbar": {
      "lang": "ENG"
    },

    "hero": {
      "intro": "Ingeniera de computación con experiencia en desarrollo Full Stack, combinando programación tradicional con soluciones no-code. Apasionada por crear soluciones escalables, desde prototipos rápidos hasta aplicaciones de producción.",
      "desc": "Desarrolladora Full Stack"
    },
    
    "skills": {
      "title": "Habilidades Técnicas",
      "lang_title": "Idiomas: ",
      "lang_body": "Español (nativo), Inglés (C2)",
      "frameworks": "Frameworks: ",
      "prog": "Lenguajes de Programación: ",
      "db": "Bases de Datos: ",
      "nocode": "Herramientas No-Code: ",
      "tech": "Tecnologías: ",
      "learning": "* Aprendiendo"
    },
    
    "experience": {
      "title": "Experiencia Laboral",
      "entries": {
        "tealca": {
          "date": "2025 - Presente",
          "title": "Desarrolladora de Software Junior",
          "company": "Tealca",
          "desc": "Mantenimiento continuo, actualizaciones y corrección de errores de aplicaciones Legacy utilizando Javascript, HTML, CSS y el framework .NET."
        },
        "moneybook": {
          "date": "2024 - Presente",
          "title": "Desarrolladora Full Stack Junior",
          "company": "MoneyBook",
          "desc": "Desarrollo y diseño de la arquitectura de múltiples productos fintech y SaaS, desde MVP creados en no-code hasta soluciones escalables."
        },
        "snip": {
          "date": "2023 - Presente",
          "title": "Desarrolladora No-Code",
          "company": "Snip",
          "desc": "Diseño, desarrollo y creación de soluciones no-code para automatización de procesos empresariales."
        },
        "freelance": {
          "date": "2024",
          "title": "Desarrolladora Web",
          "company": "Freelance",
          "desc": "Desarrollo de sitios web para diversos clientes colaborando con un diseñador para traducir maquetas de Figma en código funcional. Desarrollados en React con frameworks como Next.js y Vue.js."
        }
      }
    },
    
    "education": {
      "title": "Educación",
      "entries": {
        "bsc": {
          "date": "2017 - 2025",
          "title": "Ingeniería de Computación",
          "institution": "Universidad Simón Bolívar | Caracas, Venezuela"
        }
      }
    },
    
    "contact": {
      "title": "Contacto",
      "links": {
        "linkedin": "Linkedin",
        "github": "Github",
        "email": "Email"
      }
    }
  }
};

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const path = element.dataset.langKey;
    const translation = getNestedValue(translations[lang], path);
    
    if (translation) {
      element.textContent = translation;
    }
  });
  
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-language', lang);
}

// Initialize
const savedLang = localStorage.getItem('preferred-language') || 'en';
updateLanguage(savedLang);

lang_toggler.addEventListener('click', () => {
  const newLang = document.documentElement.lang === 'en' ? 'esp' : 'en';
  updateLanguage(newLang);
});