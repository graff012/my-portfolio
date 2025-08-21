"use server"

export async function submitContactFormSimple(prevState: any, formData: FormData) {
  // Check if formData exists
  if (!formData) {
    return {
      success: false,
      message: "Form data is missing. Please try again.",
    }
  }

  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Log the submission (you can see this in your development console)
  console.log("\n" + "=".repeat(50))
  console.log("📧 NEW CONTACT FORM SUBMISSION")
  console.log("=".repeat(50))
  console.log(`👤 Name: ${firstName} ${lastName}`)
  console.log(`📧 Email: ${email}`)
  console.log(`📋 Subject: ${subject}`)
  console.log(`💬 Message: ${message}`)
  console.log(`⏰ Time: ${new Date().toLocaleString()}`)
  console.log("=".repeat(50) + "\n")

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  }
}
