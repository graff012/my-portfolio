"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "uz"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    works: "Works",
    contact: "Contact",

    // Home page
    hiIm: "Hi, I'm",
    heroDescription:
      "Fullstack developer from Uzbekistan who is passionate about creating beautiful, functional web applications. I turn ideas into reality through clean code and thoughtful design.",
    viewMyWork: "View My Work",
    getInTouch: "Get In Touch",
    whatIDo: "What I Do",
    whatIDoDescription: "I specialize in modern web technologies and love bringing ideas to life",
    frontendDevelopment: "Frontend Development",
    frontendDescription:
      "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    backendDevelopment: "Backend Development",
    backendDescription: "Building robust APIs and server-side applications with Node.js, Nestjs and various databases.",
    uiuxDesign: "UI/UX Design",
    uiuxDescription: "Designing intuitive user experiences with attention to detail and modern design principles.",
    featuredProjects: "Featured Projects",
    featuredProjectsDescription: "Some of my recent work",
    ecommercePlatform: "E-Commerce Platform",
    ecommerceDescription: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    taskManagementApp: "Task Management App",
    taskManagementDescription: "A collaborative task management application with real-time updates and team features.",
    viewProject: "View Project",
    viewAllProjects: "View All Projects",
    letsWorkTogether: "Let's Work Together",
    letsWorkTogetherDescription: "Have a project in mind? I'd love to hear about it and help bring your ideas to life.",

    // About page
    aboutMe: "About Me",
    aboutDescription:
      "I'm a full-stack developer who is eagerly want to learn about programming and build interactive applications. This is my story",
    myJourney: "My Journey",
    journeyText1:
      "My journey into web development started during my computer science studies, where I discovered my passion for creating digital experiences that solve real-world problems. What began as curiosity about how websites work has evolved into a career dedicated to crafting beautiful, functional applications.",
    journeyText2:
      "Over the years, I've studied with curiosity and try to create beautiful things. I believe in writing clean, maintainable code and creating user experiences that are both intuitive and delightful.",
    journeyText3:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.",
    education: "Education",
    softwareEngineering: "Software Bootcamp Fullstack Course",
    najotTalim: "Najot Ta'lim • 2024 - 2025",
    educationDescription:
      "Completed intensive coursework in full-stack development. Focused on practical skills and project-based learning.",
    quickInfo: "Quick Info",
    availableForProjects: "Available for Projects",
    downloadResume: "Download Resume",
    coreSkills: "Core Skills",
    languages: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    databases: "Databases",
    tools: "Tools",
    uzbekNative: "Uzbek (Native)",
    englishIntermediate: "English (Intermediate)",

    // Works page
    myWorks: "My Works",

    // Real Projects
    rozoviySad: "Rozoviy Sad",
    rozoviySadDescription:
      "Full-stack e-commerce platform for a flower shop with modern design, product catalog, shopping cart, and admin panel.",
    youtubeBackend: "YouTube Backend Clone",
    youtubeBackendDescription:
      "Complete backend implementation with video streaming capabilities, user authentication, and content management.",
    learningCenter: "Learning Center Management",
    learningCenterDescription:
      "Comprehensive system for managing educational institutions with student enrollment, course management, and progress tracking.",
    lunchpiration: "Lunchpiration",
    lunchpirationDescription:
      "Recipe discovery and meal planning application to help users find inspiration for their daily meals.",
    devConnect: "Dev Connect",
    devConnectDescription:
      "Social platform for developers to connect, share projects, and collaborate (Work in Progress).",

    // Contact page
    getInTouchTitle: "Get In Touch",
    contactDescription:
      "I'm always interested in hearing about new opportunities and projects. Let's discuss how we can work together!",
    sendMessage: "Send Me a Message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    sendMessageBtn: "Send Message",
    contactInformation: "Contact Information",
    phone: "Phone",
    location: "Location",
    connectWithMe: "Connect With Me",
    github: "GitHub",
    checkRepositories: "Check out my repositories",
    linkedin: "LinkedIn",
    connectProfessionally: "Let's connect professionally",
    telegram: "Telegram",
    messageDirectly: "Message me directly",
    availableForProjectsTitle: "Available for Projects",
    availableDescription:
      "I'm currently accepting new projects and collaborations. Let's build something amazing together!",

    // Projects
    ecommerceFullDescription:
      "A full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard.",
    taskManagementFullDescription:
      "Collaborative task management application with real-time updates, team workspaces, and project tracking.",
    weatherDashboard: "Weather Dashboard",
    weatherDescription:
      "Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    socialMediaAnalytics: "Social Media Analytics",
    socialDescription: "Analytics dashboard for social media metrics with data visualization and automated reporting.",
    recipePlatform: "Recipe Sharing Platform",
    recipeDescription:
      "Community-driven recipe sharing platform with user profiles, ratings, and meal planning features.",
    fitnessTracker: "Fitness Tracker API",
    fitnessDescription:
      "RESTful API for fitness tracking applications with user management, workout logging, and progress analytics.",
    interestedWorking: "Interested in Working Together?",
    interestedDescription: "I'm always open to discussing new opportunities and interesting projects.",
    letsTalk: "Let's Talk",
    code: "Code",
    liveDemo: "Live Demo",
    view: "View",
  },
  uz: {
    // Navigation
    home: "Bosh sahifa",
    about: "Men haqimda",
    works: "Ishlarim",
    contact: "Aloqa",

    // Home page
    hiIm: "Salom, mening ismim",
    heroDescription:
      "Web dasturlar yaratadigan fullstack dasturchiman. G'oyalarimni kod orqali yaratishga harakat qilaman.",
    viewMyWork: "Loyihalarni ko'rish",
    getInTouch: "Bog'lanish",
    whatIDo: "Men nima qilaman",
    whatIDoDescription:
      "Men zamonaviy web-texnologiyalarda ixtisoslashganman va g'oyalarni hayotga tatbiq etishni yaxshi ko'raman",
    frontendDevelopment: "Frontend Dasturlash",
    frontendDescription:
      "React, TypeScript va zamonaviy CSS frameworklar yordamida interaktiv foydalanuvchi interfeyslari yaratish.",
    backendDevelopment: "Backend Dasturlash",
    backendDescription: "Node.js, Nestjs va turli databasalar yordamida mustahkam API ilovalar yaratish.",

    featuredProjects: "Asosiy Loyihalar",
    featuredProjectsDescription: "Men faxrlanadigan so'nggi ishlarimdan ba'zilari",
    ecommercePlatform: "Elektron Tijorat Platformasi",
    ecommerceDescription: "React va Node.js bilan to'liq elektron tijorat yechimi.",
    taskManagementApp: "Vazifalarni Boshqarish Ilovasi",
    taskManagementDescription:
      "Real vaqtda yangilanishlar va jamoa funksiyalari bilan hamkorlikdagi vazifalarni boshqarish ilovasi.",
    viewProject: "Loyihani ko'rish",
    viewAllProjects: "Barcha loyihalarni ko'rish",
    letsWorkTogether: "Birga ishlaylik",
    letsWorkTogetherDescription:
      "Loyihangiz bormi? Men bu haqda eshitishni va g'oyalaringizni hayotga tatbiq etishda yordam berishni istardim.",

    // About page
    aboutMe: "Men haqimda",
    aboutDescription: "Men yangi narsalarni o'rganishga ishtiyoqli full-stack dasturchiman. Bu mening hikoyam",
    myJourney: "Mening yo'lim",
    journeyText1:
      "Web-dasturlashga yo'lim kompyuterni o'rganish davomida boshlandi, u yerda men real muammolarni hal qiladigan raqamli texnologiyalarga bo'lgan ishtiyoqimni kashf etdim.",
    journeyText2:
      "Yillar davomida men qiziqish bilan dasturlash o'rgandim va interaktiv loyihalar yaratishga harakat qildim. Men toza kod yozishga va real muammolarni o'rganib ular uchun intuitiv loyilar yaratishga harakat qilaman.",
    journeyText3:
      "Zamonoviy texnologiyalar meni doim qiziqtirib kelgan. Ular qanday ishlashi, tagida nimalar yotishi men uchun doimo qiziq bo'lgan va ularni o'rganishga axd qilganman va hozirda ham shu ishni davom ettiryapman",
    education: "Ta'lim",
    softwareEngineering: "Bootcamp fullstack kursi",
    najotTalim: "Najot Ta'lim • 2024 - 2025",
    educationDescription:
      "Najot ta'limda bootcamp Foundation va bootcamp Fullstack kurslarini tugatdim",
    quickInfo: "Info",
    availableForProjects: "Qiziqarli loyihalar uchun tayyorman",
    downloadResume: "Rezyumeni yuklash",
    coreSkills: "Asosiy Ko'nikmalar",
    languages: "Tillar",
    backend: "Backend",
    frontend: "Frontend",
    databases: "Database",
    tools: "tools",
    uzbekNative: "O'zbek (native)",
    englishIntermediate: "Ingliz (B2)",

    // Works page
    myWorks: "Mening ishlarim",

    // Real Projects
    rozoviySad: "Rozoviy Sad",
    rozoviySadDescription:
      "Gul do'koni uchun zamonaviy dizayn, mahsulot katalogi, savatcha va admin paneli bilan to'liq elektron tijorat platformasi.",
    youtubeBackend: "YouTube Backend Kloni",
    youtubeBackendDescription:
      "Video oqim imkoniyatlari, foydalanuvchi autentifikatsiyasi va kontent boshqaruvi bilan to'liq backend implementatsiyasi.",
    learningCenter: "O'quv Markazi Boshqaruvi",
    learningCenterDescription:
      "Talabalarni ro'yxatga olish, kurs boshqaruvi va taraqqiyot kuzatuvi bilan ta'lim muassasalarini boshqarish uchun keng qamrovli tizim.",
    lunchpiration: "Lunchpiration",
    lunchpirationDescription:
      "Foydalanuvchilarga kundalik ovqatlar uchun ilhom topishda yordam beradigan retsept kashfiyoti va ovqat rejalashtirish ilovasi.",
    devConnect: "Dev Connect",
    devConnectDescription:
      "Dasturchilarga bog'lanish, loyihalarni almashish va hamkorlik qilish uchun ijtimoiy platforma (Ishlanmoqda).",

    // Contact page
    getInTouchTitle: "Bog'laning",
    contactDescription:
      "Men har doim yangi imkoniyatlar va loyihalar haqida eshitishga qiziqaman. Hamkorlik qilishga tayyorman",
    sendMessage: "Xabar jo'natish",
    firstName: "Ism",
    lastName: "Familiya",
    email: "Email",
    subject: "Mavzu",
    message: "Xabar",
    sending: "Yuborilmoqda...",
    sendMessageBtn: "Xabar yuborish",
    contactInformation: "Aloqa ma'lumotlari",
    phone: "Telefon",
    location: "Joylashuv",
    connectWithMe: "Bog'lanish",
    github: "GitHub",
    checkRepositories: "Repositorilarni ko'rish",
    linkedin: "LinkedIn",
    connectProfessionally: "Professionallarcha bog'lanish",
    telegram: "Telegram",
    messageDirectly: "To'g'ridan-to'g'ri xabar",
    availableForProjectsTitle: "Qiziqarli loyihalar bilan ishlashga tayyorman",
    availableDescription: "Hozirda yangi loyihalar va hamkorliklarni qabul qilyapman. Birga ajoyib narsa yaratamiz!",

    // Projects
    ecommerceFullDescription:
      "Foydalanuvchi autentifikatsiyasi, to'lov jarayoni, inventar boshqaruvi va admin paneli bilan to'liq elektron tijorat platformasi.",
    taskManagementFullDescription:
      "Real vaqtda yangilanishlar, jamoa ish joylari va loyiha kuzatuvi bilan hamkorlikdagi vazifalarni boshqarish ilovasi.",
    weatherDashboard: "Ob-havo Paneli",
    weatherDescription:
      "Joylashuvga asoslangan prognozlar, interaktiv xaritalar va ob-havo ogohlantirishlari bilan go'zal ob-havo paneli.",
    socialMediaAnalytics: "Ijtimoiy Media Analitikasi",
    socialDescription:
      "Ma'lumotlarni vizualizatsiya qilish va avtomatlashtirilgan hisobot berish bilan ijtimoiy media ko'rsatkichlari uchun analitika paneli.",
    recipePlatform: "Retsept Almashish Platformasi",
    recipeDescription:
      "Foydalanuvchi profillari, reytinglar va ovqat rejalashtirish funksiyalari bilan jamiyat tomonidan boshqariladigan retsept almashish platformasi.",
    fitnessTracker: "Fitnes Kuzatuvchi API",
    fitnessDescription:
      "Foydalanuvchilarni boshqarish, mashq yozish va taraqqiyot analitikasi bilan fitnes kuzatuv ilovalari uchun RESTful API.",
    interestedWorking: "Birga ishlashga qiziqasizmi?",
    interestedDescription: "Men har doim yangi imkoniyatlar va qiziqarli loyihalarni muhokama qilishga tayyorman.",
    letsTalk: "Gaplashaylik",
    code: "Kod",
    liveDemo: "Jonli Demo",
    view: "Ko'rish",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
