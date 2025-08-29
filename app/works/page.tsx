"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ProjectImageCarousel } from "@/components/project-image-carousel"

export default function WorksPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "Rozoviy Sad",
      titleKey: "rozoviySad",
      description:
        "Full-stack e-commerce platform for a flower shop with modern design, product catalog, shopping cart, and admin panel.",
      descriptionKey: "rozoviySadDescription",
      images: ["/images/rozoviy-sad-homepage.png", "/images/rozoviy-sad-admin.png", "/images/rozoviy-sad-cart.png"],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      category: "Full-Stack",
      featured: true,
      githubUrl: "https://github.com/graff012/rozoviy-sad",
      githubBackendUrl: "https://github.com/graff012/rozoviy-sad-frontend",
      liveUrl: "https://rozoviysad.vercel.app/",
      hasScreenshot: true,
    },
    {
      id: 2,
      title: "YouTube Backend Clone",
      titleKey: "youtubeBackend",
      description:
        "Complete backend implementation with video streaming capabilities, user authentication, and content management.",
      descriptionKey: "youtubeBackendDescription",
      images: ["/images/youtube-clone.png"],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
      category: "Backend",
      featured: true,
      githubUrl: "https://github.com/graff012/youtube-backend-clone",
      hasScreenshot: true,
    },
    {
      id: 3,
      title: "Learning Center Management",
      titleKey: "learningCenter",
      description:
        "Comprehensive system for managing educational institutions with student enrollment, course management, and progress tracking.",
      descriptionKey: "learningCenterDescription",
      images: ["/images/LMS.png"],
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT"],
      category: "Full-Stack",
      featured: true,
      githubUrl: "https://github.com/graff012/learning-center-management-system",
      hasScreenshot: true,
    },
    {
      id: 4,
      title: "Lunchpiration",
      titleKey: "lunchpiration",
      description:
        "Recipe discovery and meal planning application to help users find inspiration for their daily meals.",
      descriptionKey: "lunchpirationDescription",
      images: ["/images/lunchpiration-hero.png", "/images/lunchpiration-cards.png"],
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      category: "Frontend",
      featured: false,
      githubUrl: "https://github.com/graff012/lunchpiration",
      hasScreenshot: true,
    },
    {
      id: 5,
      title: "Dev Connect",
      titleKey: "devConnect",
      description: "Social platform for developers to connect, share projects, and collaborate (Work in Progress).",
      descriptionKey: "devConnectDescription",
      images: ["/images/dev-connect-api.png"],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js"],
      category: "Full-Stack",
      featured: false,
      githubUrl: "https://github.com/graff012/dev-connect",
      isWIP: true,
      hasScreenshot: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                href="/about"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t("about")}
              </Link>
              <Link href="/works" className="font-bold text-slate-900 dark:text-white">
                {t("works")}
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t("contact")}
              </Link>
              <LanguageToggle />
            </div>

            {/* Mobile Navigation */}
            <MobileNav currentPage="works" />
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop Quote - Top Right */}
        <div className="absolute top-20 sm:top-24 right-4 sm:right-8 hidden lg:block text-right">
          <p className="text-lg italic text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
            "Beauty will save the world."
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 font-serif mt-2">— F. Dostoevsky</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Mobile Quote - Shows on smaller screens */}
            <div className="lg:hidden mb-6 sm:mb-8">
              <p className="text-base italic text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
                "Beauty will save the world."
              </p>
              <p className="text-sm text-slate-400 dark:text-slate-500 font-serif mt-2">— F. Dostoevsky</p>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t("myWorks")}</h1>
          </div>

          {/* All Projects */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  {project.hasScreenshot && project.images.length > 0 ? (
                    <ProjectImageCarousel
                      images={project.images}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.image || "from-gray-400 to-gray-600"}`} />
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* WIP Badge */}
                  {project.isWIP && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                        WIP
                      </Badge>
                    </div>
                  )}

                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 z-10">
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="h-7 w-7 sm:h-8 sm:w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="h-7 w-7 sm:h-8 sm:w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white truncate pr-2">
                      {t(project.titleKey) || project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
                    {t(project.descriptionKey) || project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl ? (
                      <Button asChild variant="outline" size="sm" className="flex-1 text-xs bg-transparent h-8">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          {t("liveDemo")}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" size="sm" className="flex-1 text-xs bg-transparent h-8">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          {t("code")}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-20 p-6 sm:p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("interestedWorking")}</h2>
            <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg max-w-2xl mx-auto">
              {t("interestedDescription")}
            </p>
            <Button asChild size="lg" variant="secondary" className="h-10 sm:h-12 px-4 sm:px-6">
              <Link href="/contact">{t("letsTalk")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
