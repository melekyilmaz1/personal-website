import fitoImg from "../assets/fito.png"
import snowImg from "../assets/snow.png"
export const pageData = {

  tr: {
    header: {
      darkMode: "KARANLIK MOD",
      lightMode: "AYDINLIK MOD",
      switchLang: "ENGLISH'E GEÇ",
    },

    header: {
      darkMode: "DARK MODE",
      lightMode: "LIGHT MODE",
      switchLang: "TÜRKÇE'YE GEÇ",
    },
    
    hero: {
      name: "Melek Yılmaz",
      title: "Bilgisayar Mühendisi",
      description:
        "Bilgisayar Mühendisliği altyapısına sahip, yazılım geliştirme ve test süreçlerine tutkuyla yaklaşan bir mühendisim. Modern frontend teknolojileriyle (React, JavaScript) kullanıcı odaklı projeler üretirken edindiğim pratik tecrübeyi, kalite güvence (QA) ve test otomasyonu süreçleriyle birleştiriyorum. Manuel test disiplininin yanı sıra Postman ile API testleri, Cypress ile E2E otomasyon kurguları ve Jira ile hata takibi konularında aktif proje tecrübesine sahibim.",
      hireMe: "Bana Ulaş",
      github: "Github",
      linkedin: "LinkedIn",
    },
    skills: {
      title: "Yetenekler",
      list: [
        {
          name: "Test & QA Süreçleri",
          desc: "Manuel Test & E2E Otomasyon, API Testleri, Bug Tracking, SDLC/STLC, Gereksinim Analizi ve Planlama, Hata Yönetimi, Test Raporlama, Doğrulama & Geçerleme, Test Süreçlerinin İyileştirilmesi.",
        },
        {
          name: "Frontend & Programlama",
          desc: "React.js, JSX, JavaScript (ES6+), TypeScript, HTML5 / CSS3, Tailwind CSS, Swift; bileşen mimarisi, Hooks ve kullanıcı odaklı responsive arayüz geliştirme.",
        },
        {
          name: "Araçlar & Teknolojiler",
          desc: "Cypress, Cucumber, Gherkin, Postman, Jira, Git / GitHub, SQL ve modern CI/CD test entegrasyonları.",
        },
      ],
    },
    profile: {
      title: "Profil",
      basicTitle: "Temel Bilgiler",
      aboutTitle: "Hakkımda",
      labels: {
        birthDate: "Doğum Tarihi",
        city: "İkamet Şehri",
        education: "Eğitim Durumu",
        role: "Tercih Ettiği Rol",
      },
      values: {
        birthDate: "23.02.2003",
        city: "Ankara",
        education: "Bilgisayar Mühendisliği",
        role: "QA Engineer / Frontend Dev",
      },
      aboutParagraphs: [
        "Bilgisayar Mühendisliği altyapısına sahip, yazılım geliştirme ve test süreçlerine tutkuyla yaklaşan bir mühendisim. Modern frontend teknolojileriyle (React, JavaScript) kullanıcı odaklı projeler üretirken edindiğim pratik tecrübeyi, kalite güvence (QA) ve test otomasyonu süreçleriyle birleştiriyorum.",
        "Manuel test disiplininin yanı sıra Postman ile API testleri, Cypress ile E2E otomasyon kurguları ve Jira ile hata takibi konularında aktif proje tecrübesine sahibim. Kodun mutfağından gelmenin sağladığı bakış açısıyla, SDLC döngüsünün her adımında sürdürülebilir, güvenilir ve yüksek kaliteli yazılımlar ortaya çıkarmaya odaklanıyorum.",
      ],
    },
    projects: {
      title: "Projeler",
      viewSite: "Siteyi Gör",
      github: "Github",
      list: [
        {
          id: 1,
          title: "Fito - AI Fitness & Beslenme Koçu",
          description:
            "Kullanıcıların kalori ve makro hedeflerini AI destekli koçluk paneliyle takip etmelerini sağlayan, Framer Motion ile akıcı animasyonlara ve karanlık mod odaklı modern arayüze sahip full-stack web uygulaması.",
          tags: ["next.js", "React", "typescript", "framer-motion", "postgresql", "Tailwind CSS", "prisma"],
          github: "https://github.com/melekyilmaz1/FitoAI", 
          viewSite: "https://fitoai.onrender.com", 
          image: fitoImg,
        },
        {
          id: 2,
          title: "Ski Instruction | Zirveye İz Bırak",
          description:
            "3D görsel katmanlar ve sinematik animasyonlarla zenginleştirilmiş, Supabase backend altyapısına ve responsive arayüze sahip profesyonel kayak eğitimi platformu.",
          tags: ["react", "typescript", "supabase", "tailwind", "vite", "3D Efektler ve Dinamik Medya Katmanları", "Inline Styles"],
          github: "https://github.com/melekyilmaz1/Ski-Instruction",
          viewSite: "https://ski-instruction.onrender.com",
          image: snowImg,
        },
        {
          id: 3,
          title: "Kitapsepeti E2E Test QA Automation",
          description:
            "E-ticaret platformunun sepet, kargo ve ödeme süreçlerini Page Object Model (POM) mimarisiyle doğrulayan, Jira Kanban entegrasyonlu Cypress E2E test otomasyon projesi.",
          tags: ["cypress", "javascript", "pom", "jira", "e2e"],
          github: "https://github.com/melekyilmaz1/kitapsepeti.com-QA-Test-Otomasyonu", 
          viewSite: null,
          // Hem tr.projects.list hem en.projects.list içindeki id: 3 projesi için:
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          title: "TaskPro | Manuel API Test & Jira QA",
          description:
            "TaskPro platformunun arayüz ve REST API uçlarının Postman ile doğrulandığı, Jira Kanban panolarında uçtan uca hata yönetimi ve sınır değer analizlerinin gerçekleştirildiği QA test süreci.",
          tags: ["postman", "jira", "rest-api", "swagger", "manual-testing"],
          github: "https://github.com/melekyilmaz1/Manuel-API-Test-Proje",
          viewSite: null,
          image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&auto=format&fit=crop&q=80",
        },
      ],
    },
    footer: {
      cta: "Bir sonraki projenizde birlikte çalışalım.",
      email: "meleky2307@gmail.com",
      links: [
        { label: "Kişisel Blog", url: "#" },
        { label: "Github", url: "https://github.com/melekyilmaz1?tab=repositories" },
        { label: "Linkedin", url: "https://www.linkedin.com/in/melek-yilmaz02" },
      ],
    },
  },
  en: {
    header: {
      darkMode: "DARK MODE",
      lightMode: "LIGHT MODE",
      switchLang: "TÜRKÇE'YE GEÇ",
    },
    hero: {
      name: "Melek Yilmaz",
      title: "Computer Engineer",
      description:
        "Passionate Computer Engineer combining modern frontend technologies (React, JavaScript) with quality assurance and test automation disciplines. Hands-on experience in manual testing, API tests with Postman, E2E test suites with Cypress, and bug tracking via Jira.",
      hireMe: "Hire me",
      github: "Github",
      linkedin: "LinkedIn",
    },
    skills: {
      title: "Skills",
      list: [
        {
          name: "Testing & QA Lifecycle",
          desc: "Manual Testing & E2E Automation, API Testing, Bug Tracking, SDLC/STLC, Requirements Analysis & Planning, Defect Management, Test Reporting, Verification & Validation, Test Process Improvement.",
        },
        {
          name: "Frontend & Programming",
          desc: "React.js, JSX, JavaScript (ES6+), TypeScript, HTML5 / CSS3, Tailwind CSS, Swift; component architecture, Hooks, and user-centric responsive web development.",
        },
        {
          name: "Tools & Technologies",
          desc: "Cypress, Cucumber, Gherkin, Postman, Jira, Git / GitHub, SQL, and Agile test workflows.",
        },
      ],
    },
    profile: {
      title: "Profile",
      basicTitle: "Basic Information",
      aboutTitle: "About Me",
      labels: {
        birthDate: "Birth Date",
        city: "City",
        education: "Education",
        role: "Preferred Role",
      },
      values: {
        birthDate: "23.02.2003",
        city: "Ankara",
        education: "Computer Engineering",
        role: "QA Engineer / Frontend Dev",
      },
      aboutParagraphs: [
        "With a background in Computer Engineering, I am an engineer passionate about both software development and testing lifecycles. I combine hands-on experience in modern frontend technologies (React, JavaScript) with quality assurance and test automation disciplines.",
        "Equipped with strong manual testing skills, API validation using Postman, E2E test suites with Cypress, and bug tracking via Jira. Coming directly from the code side enables me to foster reliable, maintainable, and high-quality software across the SDLC.",
      ],
    },
    projects: {
      title: "Projects",
      viewSite: "View Site",
      github: "Github",
      list: [
        {
          id: 1,
          title: "Fito - AI Fitness & Nutrition Coach",
          description:
            "An AI-powered full-stack web application for tracking calories and macro targets, featuring Motion micro-interactions, dark mode UX, Next.js App Router, and PostgreSQL.",
          tags: ["next.js", "typescript", "framer-motion", "postgresql", "prisma"],
          github: "https://github.com/melekyilmaz1/FitoAI", 
          viewSite: "https://fitoai.onrender.com", 
          image: fitoImg,
        },
        {
          id: 2,
          title: "Ski Instruction | Carve Your Path",
          description:
            "A professional ski instruction and guiding platform featuring 3D visual layers, cinematic media dynamics, Supabase backend integration, and fully responsive design.",
          tags: ["react", "typescript", "supabase", "tailwind", "vite"],
          github: "https://github.com/melekyilmaz1/Ski-Instruction",
          viewSite: "https://ski-instruction.onrender.com",
          image: snowImg, // <-- snow.png burada bağlandı
        },
        {
          id: 3,
          title: "Kitapsepeti E2E QA Test Automation",
          description:
            "End-to-end test automation suite validating cart, checkout, and shipping flows using Cypress and Page Object Model (POM), tracked via Jira Kanban boards.",
          tags: ["cypress", "javascript", "pom", "jira", "e2e"],
          github: "https://github.com/melekyilmaz1/kitapsepeti.com-QA-Test-Otomasyonu", 
          viewSite: null,
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
        
        },
        {
          id: 4,
          title: "TaskPro | Manual API Testing & Jira QA",
          description:
            "Comprehensive QA lifecycle for TaskPro validating frontend features and backend REST APIs via Postman and Swagger, paired with defect tracking and risk analysis on Jira Kanban.",
          tags: ["postman", "jira", "rest-api", "swagger", "manual-testing"],
          github: "https://github.com/melekyilmaz1/Manuel-API-Test-Proje",
          viewSite: null,
          image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&auto=format&fit=crop&q=80",
        }
      ],
    },
    footer: {
      cta: "Let's work together on your next product.",
      email: "meleky2307@gmail.com",
      links: [
        { label: "Personal Blog", url: "#" },
        { label: "Github", url: "https://github.com/melekyilmaz1?tab=repositories" },
        { label: "Linkedin", url: "https://www.linkedin.com/in/melek-yilmaz02" },
      ],
    },
  },
};
