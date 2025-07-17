# Vercel Deployment Guide

This guide explains how to deploy your portfolio on Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to a GitHub repository
3. **Environment Variables**: Set up email configuration for contact form

## Quick Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

### 2. Configure Environment Variables

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
RECIPIENT_EMAIL=muhamedfahmy7474@gmail.com
GITHUB_USERNAME=Muhammadatef
GITHUB_TOKEN=your_github_token_here
```

### 3. Deploy

1. Click **Deploy**
2. Wait for the build to complete
3. Your portfolio will be available at `https://your-project-name.vercel.app`

## Email Configuration

For the contact form to work, you need to set up Gmail App Passwords:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this app password as `EMAIL_PASS` in your environment variables

## Automatic Deployments

Vercel will automatically redeploy your site when you push changes to your GitHub repository.

## Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Update your DNS records as instructed

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript compilation with `npm run type-check`

### Email Issues
- Verify EMAIL_USER and EMAIL_PASS are set correctly
- Make sure you're using an app-specific password, not your regular Gmail password
- Check that 2FA is enabled on your Gmail account

### Performance
- Vercel automatically optimizes images and assets
- Monitor your site's performance in the Vercel dashboard

## Support

For issues with:
- **Vercel Platform**: [Vercel Documentation](https://vercel.com/docs)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **This Portfolio**: Check the repository issues or create a new one

## Files Modified for Vercel

- `next.config.js` - Removed static export settings
- `package.json` - Updated scripts and removed GitHub Pages config
- `vercel.json` - Added Vercel-specific configuration
- `.env.example` - Environment variables template