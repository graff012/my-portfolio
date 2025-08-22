"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Nuriddin_Sobirjonov_Resume_Main.pdf"
    link.download = "Nuriddin_Sobirjonov_Resume_Main.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              <Link href="/about" className="font-bold text-slate-900 dark:text-white">
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
            <MobileNav currentPage="about" />
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t("aboutMe")}</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t("aboutDescription")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <Card className="p-4 sm:p-8">
                <CardContent className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t("myJourney")}</h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t("journeyText1")}
                    </p>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t("journeyText2")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="p-4 sm:p-8">
                <CardContent className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    {t("education")}
                  </h2>
                  <div className="border-l-4 border-green-600 pl-4 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {t("softwareEngineering")}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">{t("najotTalim")}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                      {t("educationDescription")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Quick Info */}
              <Card className="p-4 sm:p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t("quickInfo")}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        Fergana, Uzbekistan
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        {t("availableForProjects")}
                      </span>
                    </div>
                  </div>
                  <Button onClick={handleDownloadResume} className="w-full mt-4 h-10 sm:h-12">
                    <Download className="mr-2 h-4 w-4" />
                    {t("downloadResume")}
                  </Button>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="p-4 sm:p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t("coreSkills")}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                        {t("languages")}
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="text-xs">JavaScript</Badge>
                        <Badge className="text-xs">TypeScript</Badge>
                        <Badge className="text-xs">C</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                        {t("backend")}
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="text-xs">Node.js</Badge>
                        <Badge className="text-xs">Express.js</Badge>
                        <Badge className="text-xs">NestJS</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                        {t("frontend")}
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="text-xs">React</Badge>
                        <Badge className="text-xs">Next.js</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                        {t("databases")}
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="text-xs">PostgreSQL</Badge>
                        <Badge className="text-xs">MongoDB</Badge>
                        <Badge className="text-xs">Redis</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                        {t("tools")}
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <Badge className="text-xs">Git</Badge>
                        <Badge className="text-xs">Docker</Badge>
                        <Badge className="text-xs">Neovim</Badge>
                        <Badge className="text-xs">Linux CLI</Badge>
                        <Badge className="text-xs">Figma</Badge>
                        <Badge className="text-xs">CI/CD</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="p-4 sm:p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t("languages")}</h3>
                  <div className="space-y-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    <p>🇺🇿 {t("uzbekNative")}</p>
                    <p>🇺🇸 {t("englishIntermediate")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
