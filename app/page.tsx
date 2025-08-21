"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Send, Code, Zap, ExternalLink, Database, Settings } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ProjectImageCarousel } from "@/components/project-image-carousel"

export default function HomePage() {
  const { t } = useLanguage()

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
              <Link
                href="/works"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
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
            <MobileNav currentPage="home" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                  {t("hiIm")}{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Nuriddin
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t("heroDescription")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-6"
                >
                  <Link href="/works">
                    {t("viewMyWork")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent">
                  <Link href="/contact">{t("getInTouch")}</Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <Link
                  href="https://github.com/graff012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nuriddin-sobirjonov-1237802a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://t.me/tt_me12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                >
                  <Send className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-800" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-400 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-green-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("whatIDo")}</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t("whatIDoDescription")}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                  {t("frontendDevelopment")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t("frontendDescription")}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                  {t("backendDevelopment")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t("backendDescription")}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technologies & Tools</h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Languages */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">JS</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Languages</h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>TypeScript</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Frameworks</h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>React</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>NestJS</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>Express</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Databases</h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Redis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Settings className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tools</h3>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Git</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Neovim</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Linux CLI</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Figma</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>CI/CD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("featuredProjects")}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">{t("featuredProjectsDescription")}</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 relative overflow-hidden">
                <ProjectImageCarousel
                  images={[
                    "/images/rozoviy-sad-homepage.png",
                    "/images/rozoviy-sad-admin.png",
                    "/images/rozoviy-sad-cart.png",
                  ]}
                  alt="Rozoviy Sad project screenshots"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Button asChild size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <a href="https://github.com/graff012/rozoviy-sad" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <a href="https://rozoviysad.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t("rozoviySad")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{t("rozoviySadDescription")}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent h-10">
                  <a href="https://rozoviysad.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t("liveDemo")}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 relative overflow-hidden">
                <ProjectImageCarousel
                  images={["/images/youtube-backend-api.png"]}
                  alt="YouTube Backend Clone API"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Button asChild size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <a
                      href="https://github.com/graff012/youtube-backend-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t("youtubeBackend")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{t("youtubeBackendDescription")}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>JWT</Badge>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent h-10">
                  <a href="https://github.com/graff012/youtube-backend-clone" target="_blank" rel="noopener noreferrer">
                    {t("code")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="h-12 px-6">
              <Link href="/works">
                {t("viewAllProjects")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("letsWorkTogether")}</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t("letsWorkTogetherDescription")}
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-6">
            <Link href="/contact">{t("getInTouch")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
