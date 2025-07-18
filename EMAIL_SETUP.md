# Email Setup Guide

The contact form in this portfolio now supports sending actual emails. Follow these steps to configure email functionality:

## 1. Environment Variables

Create a `.env.local` file in the root directory of your project:

```bash
cp .env.example .env.local
```

## 2. Gmail Setup (Recommended)

### For Gmail:
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Copy the generated password
3. Update your `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
RECIPIENT_EMAIL=memail@gmail.com
```

## 3. Alternative Email Providers

### For Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
RECIPIENT_EMAIL=email@gmail.com
```

You'll also need to modify the transporter configuration in `src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

### For Yahoo:
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-password
RECIPIENT_EMAIL=muhamedfahmy7474@gmail.com
```

Transporter configuration:
```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.mail.yahoo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

## 4. Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section of your portfolio
3. Fill out and submit the form
4. Check both your inbox (for the message) and the sender's email (for the auto-reply)

## 5. Features

- **Email Notification**: You receive a formatted email with the contact form data
- **Auto-Reply**: The sender receives a professional auto-reply confirming receipt
- **Error Handling**: Proper error messages are displayed if sending fails
- **Responsive Design**: The form works seamlessly on all devices

## 6. Security Notes

- Never commit your `.env.local` file to version control
- Use app-specific passwords for Gmail
- Consider using environment variables in production deployment
- The API route includes basic validation for required fields

## 7. Troubleshooting

### Common Issues:
- **"Invalid login"**: Check your email/password combination
- **"Connection timeout"**: Verify your internet connection and email provider settings
- **"Missing environment variables"**: Ensure all required variables are set in `.env.local`

### For Gmail specifically:
- Ensure 2-factor authentication is enabled
- Use an app-specific password, not your regular password
- Check that "Less secure app access" is disabled (use app passwords instead)

## 8. Production Deployment

For production deployment:
1. Set environment variables in your hosting platform
2. Ensure the API route is accessible
3. Test the functionality in the production environment

The email functionality is now fully operational and ready for use!