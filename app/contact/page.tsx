"use client"
import { useActionState } from "react"
import { submitContactForm } from "./actions"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Send, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"

function ContactForm() {
  const { t } = useLanguage()
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <>
      <form action={action} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {t("firstName")} *
            </label>
            <Input id="firstName" name="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {t("lastName")} *
            </label>
            <Input id="lastName" name="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("email")} *
          </label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("subject")} *
          </label>
          <Input id="subject" name="subject" placeholder="Project Collaboration" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("message")} *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or idea..."
            className="min-h-[120px]"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
        >
          {isPending ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              {t("sending")}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t("sendMessageBtn")}
            </>
          )}
        </Button>
      </form>

      {state && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            state.success
              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
          }`}
        >
          {state.message}
        </div>
      )}
    </>
  )
}

export default function ContactPage() {
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
              <Link href="/contact" className="font-bold text-slate-900 dark:text-white">
                {t("contact")}
              </Link>
              <LanguageToggle />
            </div>

            {/* Mobile Navigation */}
            <MobileNav currentPage="contact" />
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("getInTouchTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t("contactDescription")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <Card className="p-4 sm:p-8 order-2 lg:order-1">
              <CardContent className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t("sendMessage")}</h2>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Contact Information */}
              <Card className="p-4 sm:p-8">
                <CardContent className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {t("contactInformation")}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("email")}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base break-all">
                          sobirjonovnuriddin43@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("phone")}</h3>
                        <p className="text-slate-600 dark:text-slate-400">+998 99 097 42 03</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("location")}</h3>
                        <p className="text-slate-600 dark:text-slate-400">Fergana, Uzbekistan</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-4 sm:p-8">
                <CardContent className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {t("connectWithMe")}
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/graff012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group min-h-[60px]"
                    >
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors flex-shrink-0">
                        <Github className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("github")}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{t("checkRepositories")}</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/nuriddin-sobirjonov-1237802a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group min-h-[60px]"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex-shrink-0">
                        <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("linkedin")}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{t("connectProfessionally")}</p>
                      </div>
                    </a>

                    <a
                      href="https://t.me/tt_me12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group min-h-[60px]"
                    >
                      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors flex-shrink-0">
                        <Send className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{t("telegram")}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{t("messageDirectly")}</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="p-4 sm:p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {t("availableForProjectsTitle")}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{t("availableDescription")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
