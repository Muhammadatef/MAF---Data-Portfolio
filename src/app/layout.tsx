import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Atef Fahmy - Data Engineering Portfolio',
  description: 'Senior Data Engineer specializing in Spark, Hadoop, Python, and cloud-based data solutions. 5+ years experience in building scalable data pipelines and analytics systems.',
  keywords: 'Data Engineering, Data Science, Python, Spark, Hadoop, AWS, Azure, SQL, ETL, Big Data, Analytics, Machine Learning',
  authors: [{ name: 'Mohamed Atef Fahmy' }],
  creator: 'Mohamed Atef Fahmy',
  publisher: 'Mohamed Atef Fahmy',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Mohamed Atef Fahmy - Data Engineering Portfolio',
    description: 'Senior Data Engineer with expertise in building scalable data solutions',
    url: 'https://muhammadatef.github.io/portfolio',
    siteName: 'Mohamed Atef Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed Atef Fahmy - Data Engineering Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Atef Fahmy - Data Engineering Portfolio',
    description: 'Senior Data Engineer with expertise in building scalable data solutions',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}