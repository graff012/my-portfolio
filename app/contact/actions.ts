"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
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

  try {
    // Check if Resend API key is available
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // Fallback: Log to console (you can see this in your server logs)
      console.log("=== NEW CONTACT FORM SUBMISSION ===")
      console.log(`Name: ${firstName} ${lastName}`)
      console.log(`Email: ${email}`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log(`Timestamp: ${new Date().toISOString()}`)
      console.log("=====================================")

      return {
        success: true,
        message:
          "Thank you for your message! I'll get back to you soon. (Note: Email service is not configured yet, but your message has been logged.)",
      }
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["sobirjonovnuriddin43@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #666; font-size: 14px; text-align: center;">
              Sent from your portfolio website on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Resend API error:", errorData)

      // Fallback: Log to console if email fails
      console.log("=== EMAIL FAILED - LOGGING SUBMISSION ===")
      console.log(`Name: ${firstName} ${lastName}`)
      console.log(`Email: ${email}`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log(`Timestamp: ${new Date().toISOString()}`)
      console.log("========================================")

      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon. (Your message has been received and logged.)",
      }
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error processing contact form:", error)

    // Fallback: Log to console even if there's an error
    console.log("=== ERROR OCCURRED - LOGGING SUBMISSION ===")
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Timestamp: ${new Date().toISOString()}`)
    console.log("==========================================")

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon. (Your message has been received and logged.)",
    }
  }
}
