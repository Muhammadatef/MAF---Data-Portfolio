# Quick Email Setup Guide

## The Error You're Seeing

The "Failed to send email" error is because the email credentials aren't configured yet. This is **not** because you're running locally - the API will work locally once configured.

## Quick Fix (5 minutes)

### Step 1: Edit the .env.local file
Open `.env.local` and replace the placeholder values:

```bash
# Current (placeholder values):
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Replace with YOUR actual values:
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-actual-app-password
```

### Step 2: For Gmail Users (Recommended)
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an app-specific password:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Copy the 16-character password
4. Use this password in `.env.local`

### Step 3: Restart your development server
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test the contact form
- Fill out the form on your portfolio
- You should now see a proper error message if there are still issues

## Alternative: Use a Test Email Service

If you don't want to use your personal Gmail, you can use a test email service:

### Option 1: Mailtrap (Free testing)
```bash
EMAIL_USER=your-mailtrap-username
EMAIL_PASS=your-mailtrap-password
```

Update the API route to use Mailtrap:
```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

### Option 2: Outlook/Hotmail
```bash
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

Update the API route:
```typescript
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

## The email functionality will work perfectly on localhost once configured!

## Next Steps After Setup
1. Test the contact form
2. Check your email for the message
3. Verify the sender gets an auto-reply
4. Deploy to production with the same environment variables