import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if email configuration is set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email configuration is not set up. Please configure EMAIL_USER and EMAIL_PASS in your .env.local file.' },
        { status: 500 }
      )
    }

    // Create transporter - Using Gmail as example
    // You can configure this for other email providers
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Use app-specific password for Gmail
      }
    })

    // Email to the portfolio owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'muhamedfahmy7474@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `
    }

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Mohamed Atef Fahmy`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          
          <p style="line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I have received your message 
            about "${subject}" and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="line-height: 1.6;">
            I typically respond within 24-48 hours. If you have any urgent matters, 
            please feel free to contact me directly at muhamedfahmy7474@gmail.com.
          </p>
          
          <p style="line-height: 1.6;">
            Best regards,<br>
            <strong>Mohamed Atef Fahmy</strong><br>
            <em>Data Engineer</em>
          </p>
          
          <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This is an automated response from Mohamed Atef Fahmy's portfolio website.
            </p>
          </div>
        </div>
      `
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email'
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Invalid email credentials. Please check your EMAIL_USER and EMAIL_PASS configuration.'
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Make sure to use an app-specific password for Gmail.'
      } else if (error.message.includes('ETIMEDOUT') || error.message.includes('timeout')) {
        errorMessage = 'Connection timeout. Please check your internet connection and email server settings.'
      } else {
        errorMessage = `Email error: ${error.message}`
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}