import './globals.css'

export const metadata = {
  title: 'Zarna N. Patel — Health Informatics Specialist',
  description:
    'Versatile healthcare professional with 9+ years of clinical experience and 5+ years in quality compliance. MS Health Informatics candidate (GPA 3.97) specializing in data analytics, IRB administration, and clinical systems.',
  openGraph: {
    title: 'Zarna N. Patel — Health Informatics Specialist',
    description:
      'Bridging 9+ years of clinical expertise with data-driven health informatics to deliver compliant, measurable outcomes.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
