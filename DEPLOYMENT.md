# Deployment Guide

## Prerequisites

1. **Node.js 18+** installed locally
2. **GitHub account** for repository hosting
3. **Domain name** (optional) for custom domain

## Quick Deployment Steps

### 1. Initial Setup
```bash
# Clone the repository
git clone https://github.com/Muhammadatef/portfolio.git
cd portfolio

# Install dependencies
npm install

# Test locally
npm run dev
```

### 2. GitHub Repository Setup
```bash
# Create new repository on GitHub
# Push code to GitHub
git remote add origin https://github.com/Muhammadatef/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages
1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

### 4. Custom Domain (Optional)
1. Update `CNAME` in `.github/workflows/deploy.yml`
2. Add DNS record pointing to GitHub Pages
3. Configure domain in repository settings

## Environment Variables

Create `.env.local` for local development:
```bash
GITHUB_USERNAME=Muhammadatef
GITHUB_TOKEN=your_github_token
POWERBI_WORKSPACE_ID=your_powerbi_workspace_id
```

## Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Export static files
npm run export

# Deploy to GitHub Pages
npm run deploy
```

## Customization

### Colors
Update `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    600: '#your-red-color',
    // ... other shades
  }
}
```

### Content
1. Update personal information in components
2. Replace project data with your own
3. Add your actual PowerBI dashboard URLs
4. Update social media links

### PowerBI Integration
1. Get PowerBI embed URLs from your dashboards
2. Update project data in `src/components/Projects.tsx`
3. Configure authentication if needed

## Performance Optimization

The portfolio includes:
- Image optimization with Next.js
- Code splitting
- Lazy loading
- Responsive design
- SEO optimization

## Monitoring

- GitHub Actions for CI/CD
- Lighthouse CI for performance monitoring
- Error tracking with built-in Next.js error handling

## Troubleshooting

### Common Issues

1. **Build Fails**: Check Node.js version and dependencies
2. **Images Not Loading**: Ensure proper image paths and optimization
3. **PowerBI Not Embedding**: Check URL format and permissions
4. **GitHub Pages Not Updating**: Check GitHub Actions logs

### Support

For technical support or questions about the portfolio:
- Check the README.md for detailed setup instructions
- Review the GitHub Issues for common problems
- Contact for custom development needs

## Security

- No sensitive data in repository
- Environment variables for API keys
- HTTPS enforced through GitHub Pages
- Regular dependency updates